<template>
	<article class="vacancy-item" :class="{'vacancy-premium' : vacancy.premium}">
		<header class="header-row">
			<div class="header-info">
				<router-link :to="/vacancy/ + vacancy['.key']">{{ vacancy.title }}</router-link>
				<div class="meta-info">
					<a href>{{ vacancy.employer }}</a>
					<a href class="employer-verified" target="_blank">
						<span></span>
					</a>
				</div>
				<div class="meta-info">
					<span class="address">{{ vacancy.city }}</span>
				</div>
			</div>
			<div class="header-sidebar">
				<span v-html="checkCompensation()"></span>
			</div>
		</header>
		<div class="content-row">
			<div class="content-info">
				<div class="responsibility">{{ vacancy.responsibility | truncate() }}</div>
				<div class="requirement">{{ vacancy.requirements | truncate() }}</div>
			</div>
			<div v-if="employerLogoLink != '//hh.kz/employer-logo/'" class="content-sidebar">
				<a href class="employer-logo">
					<img :src="employerLogoLink" :alt="vacancy.employer">
				</a>
			</div>
		</div>
		<div class="contols-row">
			<div class="contols-links">
				<span>
					<a href>Откликнуться</a>
				</span>
				<span v-show="vacancy.contacts">Показать контакты</span>
			</div>
			<span class="publication-date">{{ vacancy.created.substring(0, vacancy.created.length - 5) }}</span>
		</div>
	</article>
</template>

<script>
import { vacanciesRef } from "../assets/js/db"; // загружаем для firebase
export default {
	name: "VacancyListItem",
	//---------------
	data() {
		return {
			// Формируем ссылку на лого работодателя
			employerLogoLink: "//hh.kz/employer-logo/" + this.vacancy.logo
		};
	},
	//---------------
	props: {
		// Получаем значения базы данных с родителя
		vacancy: vacanciesRef
	},
	//---------------
	methods: {
		// Добавляем разделитель целых в числа зарплат
		addSpace(number) {
			return number.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
		},
		// Решаем, как вывести предлагаемую в вакансии зарплату
		checkCompensation() {
			let curr = this.vacancy.currency;
			let cStart = this.vacancy.compensationStart;
			let cEnd = this.vacancy.compensationEnd;
			cStart = this.addSpace(cStart);
			cEnd = this.addSpace(cEnd);

			// Если указана валюта и любая цифра
			if ((curr != "" && cStart) || cEnd != "") {
				// Нет суммы До, выводим сумму От
				if (cEnd == "")
					return "<span>от " + cStart + " " + curr + "</span>";
				// Нет суммы От выводим сумму До
				if (cStart == "")
					return "<span>до " + cEnd + " " + curr + "</span>";
				// Есть обе суммы
				if (cStart != "" && cEnd != "")
					return (
						"<span>" + cStart + "-" + cEnd + " " + curr + "</span>"
					);
			}
		}
	},
	//---------------
	filters: {
		/* Фильтр который добавляет "..." у длинных предложений
		   В оригинале на hh фильтр не обрезает слова и оставляет их целыми
		   но здесь более простая реализация */
		truncate(text) {
			let clamp = "...";
			let node = document.createElement("span");
			node.innerHTML = text;
			let content = node.textContent;
			return content.length > 180
				? content.slice(0, 180) + clamp
				: content;
		}
	}
};
</script>