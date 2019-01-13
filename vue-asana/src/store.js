import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		// Интерфейс и графические эффекты
		UIsidebarStatus: false, // Туглер, для скрытия / раскрытия сайдбара

		//
		welcomeBanner: {
			show: false, // Первый запуск доски, видно приветствие	если false
			component: 'WelcomeBanner' // Туглер для замены компонента на Board
		},
		columns: [], // Колонки доски. 1 доска = 1 объект в массиве
		cards: ['dddd','d333','23233'], // Карточки

	},
	////////////////////////////////////////////////////////////////////////
	getters: {
		GET_UIsidebarStatus: state => state.UIsidebarStatus,

		//
		GET_welcomeBanner: state => state.welcomeBanner,
		GET_columns: state => state.columns,
		GET_cards: state => state.cards,
	},
	////////////////////////////////////////////////////////////////////////
	actions: {
		ACT_UIsidebarStatus(context, payload) { // Передает статус показа сайдбара
			context.commit('MUT_UIsidebarStatus', payload);
		},

		//
		ACT_welcomeBanner(context, payload) { // Закрываем приветствие
			context.commit('MUT_welcomeBanner', payload);
		},
		ACT_columns(context, payload) { // Получаем данные для колонок
			context.commit('MUT_columns', payload);
		},
	},
	////////////////////////////////////////////////////////////////////////
	mutations: {
		MUT_UIsidebarStatus(state, payload) { //Меняет статус показа сайдбара
			state.UIsidebarStatus = payload;
		},

		//
		MUT_welcomeBanner(state, payload) { // Изменяем показ баннера приветствия
			state.welcomeBanner = payload;
		},
		MUT_columns(state, payload) { //Добавляем колонку в массив
			state.columns.push(payload);
		},
	},
})