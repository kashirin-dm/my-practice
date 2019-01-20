<template>
	<div>
		<section class="container content-vacancies">
			<div class="page-title">
				<h1 v-if="vacancies == ''">Ищем вакансии в вашем регионе
					<span class="waiting-vacancies"></span>
				</h1>
				<h1 v-else>Найдено {{ vacancies.length }} вакансии</h1>
			</div>

			<vacancy-search-filter/>

			<div class="vacancy-content">
				<!-- Настройки выдачи -->
				<vacancy-settings/>

				<!-- Результаты поиска -->
				<main>
					<!-- Карточки вакансий -->
					<transition-group name="list" tag="div">
						<vacancy-list-item
							v-for="vacancy in limitedVacancies"
							:key="vacancy['.key']"
							:vacancy="vacancy"
						/>
					</transition-group>
					<span
						v-show="vacancies == ''"
					>Попробуйте другие варианты поискового запроса или уберите фильтры</span>
				</main>
				<paginate
					:page-count="totalPages()"
					:prev-text="'К началу'"
					:break-view-class="'break'"
					:next-text="'дальше'"
					:container-class="'pagination'"
					:click-handler="clickPagination"
				/>
				<a href class="banner">
					<img src="//hhcdn.ru/nposter/180848.jpg" alt="Ваше резюме поднимается вверх">
				</a>
			</div>
		</section>
		<saved-search-notify/>
	</div>
</template>
<script>
import VacancySettings from "../components/vacancy-settings";
import VacancySearchFilter from "../components/vacancy-search-filter";
import VacancyListItem from "../components/vacancy-list-item";
import SavedSearchNotify from "../components/saved-search-notify";
import { vacanciesRef } from "../assets/js/db"; // загружаем для firebase
import Paginate from "vuejs-paginate";

export default {
	name: "vacancy",
	//---------------
	components: {
		VacancySettings,
		VacancySearchFilter,
		VacancyListItem,
		SavedSearchNotify,
		Paginate
	},
	//---------------
	data() {
		return {
			// Сколько вакансий на странице
			perPage: 20,
			// Текущая страница
			currentPage: 1
		};
	},
	//---------------
	methods: {
		// Узнаем сколько всего страниц для пагинации
		totalPages() {
			let totalPages = Math.ceil(this.vacancies.length / this.perPage);
			return totalPages;
		},
		// Обрезаем выдачу всех вакансий на нужное кол-во страниц
		paginate(vacancies) {
			let currentPage = this.currentPage;
			let perPage = this.perPage;
			let from = currentPage * perPage - perPage;
			let to = currentPage * perPage;
			return vacancies.slice(from, to);
		},
		// Коллбэк пагинатора, передаем нажатую страницу для перерисовки списка
		clickPagination(pageNum) {
			window.scrollTo(0, 0);
			return (this.currentPage = pageNum);
		}
	},
	//---------------
	computed: {
		// Выводим на страницу кол-во вакансий согласно perPage
		limitedVacancies() {
			return this.paginate(this.vacancies);
		}
	},
	//---------------
	firebase() {
		return {
			vacancies: vacanciesRef.orderByKey()
		};
	}
};
</script>
