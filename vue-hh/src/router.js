import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start'

Vue.use(Router)

export default new Router({

	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			name: 'start',
			component: Start,
			meta: {
				title: 'Введение: Прототип hh.kz'
			}
		},
		{
			path: '/vacancy',
			name: 'vacancy',
			component: () => import('./views/Vacancy.vue'),
			meta: {
				title: 'Работа, вакансии, резюме и подбор персонала в Казахстане. Всё для профессионалов на hh.kz'
			}
		},
		{
			path: '*',
			redirect: '/'
		},
		{
			path: '/vacancy/:key',
			name: 'detail',
			component: () => import('./views/VacancyDetail.vue'),
			meta: {
				title: 'Вакансия'
			}
		}
	]
})