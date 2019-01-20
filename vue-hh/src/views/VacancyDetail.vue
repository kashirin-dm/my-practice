<template>
	<div>
		<section class="container content-single-vacancy">
			<div v-if="this.vacancy.length != 0" class="vacancy-content">
				<div class="page-title">
					<h1>{{ vacancy[14]['.value'] }}</h1>
					<p v-html="checkCompensation()"></p>
				</div>
				<div class="company__row">
					<div class="company__wrapper">
						<div class="company__name">
							<a href>{{ vacancy[7]['.value'] }}</a>
							<a href class="employer-verified">
								<span></span>
							</a>
						</div>
						<p>{{ vacancy[0]['.value'] }}</p>
					</div>
					<a v-if="this.vacancy[10]['.value'] != ''" href class="company__logo">
						<img
							:src="'//hh.kz/employer-logo/' + this.vacancy[10]['.value']"
							:alt="this.vacancy[7]['.value']"
						>
					</a>
				</div>

				<div class="buttons__row">
					<a href class="vacancy-action buttons__applicant">Откликнуться</a>
					<button v-if="this.vacancy[4]['.value'] == true" class="buttons__contacts">Показать контакты</button>
					<span class="buttons__favorite">
						<button>
							<span></span>
						</button>
					</span>
				</div>

				<main>
					<div class="start-conditions">
						<p>Требуемый опыт работы: {{ vacancy[9]['.value'] }}</p>
						<p>{{ vacancy[8]['.value'] }}</p>
					</div>
					<div class="vacancy-section">
						<b>Обязанности:</b>
						<p>{{ vacancy[13]['.value'] }}</p>

						<b>Требования:</b>
						<p>{{ vacancy[12]['.value'] }}</p>

						<b>Условия:</b>
						<p>{{ vacancy[3]['.value'] }}</p>
					</div>

					<div class="vacancy-section">
						<h2 class="skills-header">Ключевые навыки</h2>
						<span class="skill-element" title="CSS">CSS</span>
						<span class="skill-element" title="Adobe Photoshop">Adobe Photoshop</span>
						<span class="skill-element" title="MS PowerPoint">MS PowerPoint</span>
						<span class="skill-element" title="SQL">SQL</span>
						<span class="skill-element" title="HTML">HTML</span>
						<span class="skill-element" title="Пользователь ПК">Пользователь ПК</span>
						<span class="skill-element" title="Работа в команде">Работа в команде</span>
						<span class="skill-element" title="Internet">Internet</span>
						<span class="skill-element" title="Грамотная речь">Грамотная речь</span>
						<span class="skill-element" title="PHP">PHP</span>
						<span class="skill-element" title="JavaScript">JavaScript</span>
						<span class="skill-element" title="jQuery">jQuery</span>
					</div>

					<div class="vacancy-section">
						<p
							class="vacancy-creation-time"
						>Вакансия опубликована {{ vacancy[5]['.value'] }} в {{ vacancy[0]['.value'] }}</p>
						<div class="buttons__row">
							<a href class="vacancy-action buttons__applicant">Откликнуться</a>
						</div>
					</div>
				</main>
			</div>
			<aside class="sidebar-single-vacancy">
				<a href>
					<img src="//hhcdn.ru/nposter/220359.gif" alt="Mini-MBA">
				</a>
			</aside>
		</section>
	</div>
</template>
<script>
import { vacanciesRef } from "../assets/js/db"; // загружаем для firebase

export default {
	name: "detail",
	//---------------
	data() {
		return {
			/* Извлекаем из роутера текущий ключ маршрута.
			Ключ совпадает с key в Firebase и используется для извелечения
			из базы одной конкретной вакансии */
			key: this.$route.params.key
		};
	},
	//---------------
	methods: {
		// Добавляем разделитель целых в числа зарплат
		addSpace(number) {
			return number.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
		},
		// Решаем, как вывести предлагаемую в вакансии зарплату
		checkCompensation() {
			let curr = this.vacancy[6][".value"];

			let cStart = this.vacancy[2][".value"];
			let cEnd = this.vacancy[1][".value"];
			cStart = this.addSpace(cStart);
			cEnd = this.addSpace(cEnd);

			// Если указана валюта и любая цифра
			if ((curr != "" && cStart) || cEnd != "") {
				// Нет суммы До, выводим сумму От
				if (cEnd == "")
					return (
						"<span>от " + cStart + " " + curr + " на руки</span>"
					);
				// Нет суммы От выводим сумму До
				if (cStart == "")
					return "<span>до " + cEnd + " " + curr + " на руки</span>";
				// Есть обе суммы
				if (cStart != "" && cEnd != "")
					return (
						"<span>от " +
						cStart +
						" до " +
						cEnd +
						" " +
						curr +
						" на руки</span>"
					);
			}
		}
	},
	//---------------
	firebase() {
		return {
			vacancy: vacanciesRef.child(this.key)
		};
	}
};
</script>
