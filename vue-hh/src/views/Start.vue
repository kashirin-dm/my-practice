<template>
	<div class="start container">
		<h1>Демо выдачи вакансий hh.kz и страницы с отдельной вакансией</h1>
		<h2>Важные замечания</h2>
		<div class="start-page-wrapper">
			<h3>Что работает в демо, а что нет</h3>
			<p>Есть немного кривоватая адаптивная верстка на scss с использованием grid и flex, которую я решил не доводить до идеала, но сделал очень близко к оригиналу.
				<br>Нет версии для печати, атрибутов для ридеров, микроразметки, а также других примочек для сео и разных платформ, не говоря уже о нормальной оптимизации.
				<br>Также я практически не верстал фильтр в левой колонке, поскольку там много заморочек, а его логику реализовать в демо достаточно сложно.
				<br>
				<br>Есть список вакансий из базы данных. Описание обрезаются на 180 символах (в оригинале логика сложнее), а блок с зарплатой собирается согласно разным условиям.
				<br>Можно переходить в каждую из вакансий при помощи роутера с сохранением состояния приложения и обновлением тега title.
				<br>Работает пагинация. Для пагинатора использовал отдельный модуль из npm чтобы немного быстрее всё сделать. (в оригинале пагинатор умнее)
				<br>Добавлено чуть-чуть анимации для списка вакансий и немного анимации для заголовка, пока ожидаем данные от Firebase. На оригинальном сайте этого нет.
				<br>Поиск и фильтрация не работает, список отсортирован по .key
				<br>Красный эластичный круг внизу - это скрипт из документации к Vue но немного кастомизированный и поправленый.
				<br>
				<br>Я намеренно сделал разнообразие подходов к организации файлов, стилей и кода,
				<br>Половина того что есть в демо просто не нужна и можно сделать всё проще,
				<br>Будем считать что это минимальный жизнеспособный продукт для большого проекта, который будет масштабироваться.
				<br>Изначально планировал использовать Vuex и VuexFire соответственно, но тут слишком простая логика для таких вещей.
			</p>

			<h3>Вёрстка</h3>
			<p>
				Вёрстка адаптивная. В оригинале hh.kz имеет отдельную мобильную версию, которая никак не связана с десктоп версией.
				Поэтому я сделал простой адаптив. Есть разница в оригинальном десктопе и моём, но оттачивание деталей занимает много времени, тем более я использовал другие принципы вёрстки.
				Я не предерживался какой-то методологии в вёрстке да и вообще в построении приложения, поскольку это демо и в общем-то нет смысла сильно думать об архитектуре.
			</p>

			<h3>Зависимости</h3>
			<p>
				Для базы данных я использовал Firebase в связке с Vuefire.
				<br>Realtime Database в Firebase по сути отдаёт обычный json, но в работе с ним есть нюансы.
				Также использовал Router который обеспечивает переход между страницами, ставит нужны title (с использованием доп. кода для отслеживания хуков).
			</p>
		</div>
		<router-link to="/vacancy">
			<svg width="200" height="200">
				<polygon :points="points"></polygon>
				<text x="45" y="105" fill="white">СМОТРЕТЬ</text>
			</svg>
		</router-link>
	</div>
</template>

<script>
import "../assets/js/TweenLite.min.js";

// Эластичный круг
function valueToPoint(value, index, total) {
	var x = 0;
	var y = -value * 0.9;
	var angle = ((Math.PI * 2) / total) * index;
	var cos = Math.cos(angle);
	var sin = Math.sin(angle);
	var tx = x * cos - y * sin + 100;
	var ty = x * sin + y * cos + 100;
	return {
		x: tx,
		y: ty
	};
}

function generatePoints(stats) {
	var total = stats.length;
	return stats
		.map(function(stat, index) {
			var point = valueToPoint(stat, index, total);
			return point.x + "," + point.y;
		})
		.join(" ");
}

export default {
	name: "start",
	//---------------
	data() {
		var defaultSides = 60;
		var stats = Array.apply(null, {
			length: defaultSides
		}).map(function() {
			return 100;
		});
		return {
			stats: stats,
			points: generatePoints(stats),
			sides: defaultSides,
			minRadius: 95,
			interval: null,
			updateInterval: 500
		};
	},
	//---------------
	watch: {
		sides(newSides, oldSides) {
			var sidesDifference = newSides - oldSides;
			if (sidesDifference > 0) {
				for (var i = 1; i <= sidesDifference; i++) {
					this.stats.push(this.newRandomValue());
				}
			} else {
				var absoluteSidesDifference = Math.abs(sidesDifference);
				for (i = 1; i <= absoluteSidesDifference; i++) {
					this.stats.shift();
				}
			}
		},
		stats(newStats) {
			TweenLite.to(this.$data, this.updateInterval / 1000, {
				points: generatePoints(newStats)
			});
		},
		updateInterval() {
			this.resetInterval();
		}
	},
	//---------------
	mounted() {
		this.resetInterval();
	},
	//---------------
	methods: {
		randomizeStats() {
			var vm = this;
			this.stats = this.stats.map(function() {
				return vm.newRandomValue();
			});
		},
		newRandomValue() {
			return Math.ceil(
				this.minRadius + Math.random() * (100 - this.minRadius)
			);
		},
		resetInterval() {
			var vm = this;
			clearInterval(this.interval);
			this.randomizeStats();
			this.interval = setInterval(function() {
				vm.randomizeStats();
			}, this.updateInterval);
		}
	}
};
</script>

<style lang="scss" scoped>
.start {
	font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
	font-size: 14px;
	line-height: 1.5;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	width: 80%;
	margin: 0 auto;
	padding: 50px 20px;
}

svg {
	display: block;
	margin-top: 50px;

	&:hover {
		text {
			text-decoration: underline;
		}
	}

	text {
		font-size: 20px;
		font-weight: 700;
		transition: all 0.5s ease-in;
	}
}

polygon {
	fill: #c00;
	transition: fill 0.5s ease-in;

	&:hover {
		fill: #09f;
	}
}

h1 {
	font-weight: 200;
	font-size: 28px;
	margin-bottom: 20px;
}

.start-page-wrapper {
	margin-top: 25px;
	text-align: left;

	@media (min-width: 768px) {
		column-count: 2;
		column-gap: 60px;
		column-rule: 1px solid #ccc;
	}

	h3 {
		line-height: 1.5;
	}

	p {
		margin-bottom: 20px;
	}
}
</style>