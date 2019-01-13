<template>
<div class="board">
	<main>
		<div class="welcome-board-banner" v-show="!StatusWelcomeBanner">
			<img src="../assets/new_board.svg" alt="Добро пожаловать на новую доску!">
			<div class="welcome-banner-text">
				Организуйте работу по этапам или категориям — например, как заметки на доске.
			</div>
			<div class="welcome-banner-button" @click.prevent="ButtonWelcomeBanner" role="button" aria-disabled="false" aria-pressed="false">Добавить колонки</div>
		</div>


		<div class="board__scrollable" v-show="StatusWelcomeBanner">
			<div class="board__body">
				<div class="board__body__scrollable-lists">
					<div class="scrollable-lists__inner">
						<!-- FIRST COLUMN ~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

						<div class="column-list-item-wrapper">
							<div class="column-and-wiew-menu">
								<div class="column-header">
									<input v-model="TEMP_inputTitle" @blur="inputBlur" ref="inputColumnTitle" autofocus class="inputTitleColumn" type="text" placeholder="Новая колонка">
								</div>
								<div class="welcome-column column-cards-container column-cards-container--col-empty">

								</div>
							</div>
						</div>

						<!--  FIRST COLUMN END ~~~~~~~~~~~~~~~~~~~~~~~ -->
					</div>
				</div>
			</div>
		</div>
	</main>
</div>
</template>

<script>
import {db} from '../db'; // загружаем модуль базы
import {boardRef} from '../db'; // загружаем Ref доски
import {columnsOrdersRef} from '../db'; // загружаем Ref Кол-ва колонок
export default {
	name: 'WelcomeBanner',
	data() {
		return {
			// Связываем input с этой переменной
			TEMP_inputTitle: '',
		};
	},
	/////////////////////////////////////////////////////////
	computed: {
		StatusWelcomeBanner() { // Узнаем, показывать ли приветствие
			return this.$store.getters.GET_welcomeBanner.show;
		},
	},
	/////////////////////////////////////////////////////////
	methods: {
		inputBlur() { // Открываем приветствие при потере фокуса формы
			if (this.TEMP_inputTitle == '') {
				// Открываем приветствие если пусто
				this.$store.dispatch('ACT_welcomeBanner', {
					show: false,
					component: 'WelcomeBanner'
					}
				);
			} else {
				// Передаем значением инпута в массив колонок в Store
				//this.$store.dispatch('ACT_columns', this.TEMP_inputTitle); теперь передается в базу
				boardRef.push({ // Создаем в базе первую колонку пока без карточек
						title: this.TEMP_inputTitle, // название колонки берем из input
						order: 1, // стартовый порядок колонки
				});
				this.TEMP_inputTitle = ''; // Обнуляем
				// Переходим в динамический компонент Board
				this.$store.dispatch('ACT_welcomeBanner', {
					show: true,
					component: 'Board'
					}
				);
			}
		},
		ButtonWelcomeBanner() { // Закрываем при нажатии на кнопку приветствия
			this.$store.dispatch('ACT_welcomeBanner', {
					show: true,
					component: 'WelcomeBanner'
					}
					);
			this.$nextTick(() => { // Ставим следующим событием фокус на input новой колонки
				this.$refs.inputColumnTitle.focus();
			});
		},
	},
}
</script>