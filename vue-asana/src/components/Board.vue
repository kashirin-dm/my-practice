<template>
<div class="board">
	<BoardHeader />
	<main>
		<div class="board__scrollable" :class="{ dragscroll: !newColumnInputToggler }">
			<a class="board__description-button" @click="UIdescriptionToggler = !UIdescriptionToggler">Показать Описание Проекта</a>
			<div class="board__body" :class="{'board__body--opened': UIdescriptionToggler}">
				<ColumnDescription />
				<div class="board__body__scrollable-lists">
					<draggable v-model="board" :options="{group:'columns',handle:'.column-header', direction:'horizontal', ghostClass: 'drag-ghost'}"
					@start="drag=true" @end="drag=false" class="scrollable-lists__inner">
						<!-- COLUMNS ~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
							<Column v-for="column in board" :key="column['.key']" :columnTitle="column" />
						<!-- COLUMNS END ~~~~~~~~~~~~~~~~~~~~~~~ -->

						<div v-if="newColumnInputToggler == false" class="add-column">
							<div class="add-column__inner">
								<a class="add-column__link" @click.prevent="openNewColumnInput" role="button">+ Добавить колонку</a>
							</div>
						</div>

						<div v-else class="column-list-item-wrapper">
							<div class="column-and-wiew-menu">
								<div class="column-header">
									<input v-model="TEMP_inputNewColumnTitle" @blur="inputNewColumnBlur"
									ref="inputNewColTitle" autofocus class="inputTitleColumn" type="text" placeholder="Новая колонка">
								</div>
								<div class="add-column-margin column-cards-container column-cards-container--col-empty">

								</div>
							</div>
						</div>

					</draggable>
				</div>
			</div>
		</div>
	</main>
</div>
</template>

<script>
import BoardHeader from './BoardHeader';
import ColumnDescription from './ColumnDescription';
import Column from './Column';
import dragscroll from 'dragscroll';
import draggable from 'vuedraggable'
import {db} from '../db'; // загружаем модуль базы
import {boardRef} from '../db'; // загружаем Ref доски
import {columnsOrdersRef} from '../db'; // загружаем Ref Кол-ва колонок
export default {
	name: 'Board',
	/////////////////////////////////////////////////////////
	components: {
		BoardHeader,
		ColumnDescription,
		Column,
		dragscroll,
		draggable
	},
	/////////////////////////////////////////////////////////
	data(){
		return {
			UIdescriptionToggler: false, // Делает подсветку колонки, если навести на её заголовок
			newColumnInputToggler: false, // Если true, то показываем input для создания колонки
			TEMP_inputNewColumnTitle: '', // Временная переменная для записи заголовка создаваемой колонки
		};
	},
	/////////////////////////////////////////////////////////
	methods: {
		inputNewColumnBlur() { // Действия при потери фокуса input-ом новой колонки
			if (this.TEMP_inputNewColumnTitle == '') {
				// Скрываем input и возвращаем ссылку добавления колонки
				this.newColumnInputToggler = false;
				this.$nextTick(() => {
					dragscroll.reset(); // Сбрасываем вочер скролла на следующий тик
				});
			} else {
				// Передаем значением инпута в массив колонок в Store
				//this.$store.dispatch('ACT_columns', this.TEMP_inputNewColumnTitle); // теперь передаем в базу
				let orderIncrement = this.board.length;
				++orderIncrement;

				boardRef.push({ // Создаем в базе первую колонку пока без карточек
						title: this.TEMP_inputNewColumnTitle, // название колонки берем из input
						order: orderIncrement, // стартовый порядок колонки, берем длину массива с колонками + 1
				});
				this.TEMP_inputNewColumnTitle = ''; // Обнуляем
				this.newColumnInputToggler = false; // Показываем ссылку вместо инпута
				this.$nextTick(() => {
					dragscroll.reset();
				});
			}
		},
		openNewColumnInput() {
			this.newColumnInputToggler = true; // Показываем input
			this.$nextTick(() => { // Ставим следующим событием фокус на input новой колонки
				this.$refs.inputNewColTitle.focus();
				dragscroll.reset();
			});
		},
	},
	/////////////////////////////////////////////////////////
	computed: { // Больше не нужно так-как получаем из базы
		//ColumnsRow() { // Получаем колонки
			//return this.$store.getters.GET_columns;
		//},
	},
	/////////////////////////////////////////////////////////
	firebase() {
        return {
			board: boardRef,
        };
    },
}
</script>

<style scoped lang="scss">
</style>
