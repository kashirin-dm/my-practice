<template>
<div id="app">
	<div class="background"></div>
	<div class="container">
		<div class="ui">
			<Sidebar />
			<section class="main">

				<Topbar />
				<div class="main-wrapper">
					<section class="main-board">
						<!-- Показываем доску, если есть хоть 1 колонка -->
						<!-- <Board v-if="boardStatus.length > 0" /> теперь берем из базы-->
						<Board v-if="board.length > 0" />
						<!-- Если нет колонок, то показываем приветствие, после заполнения 1 колонки выведем Board -->
						<component v-else :is="boardMode"></component>
					</section>
				</div>

			</section>
		</div>
	</div>
</div>
</template>

<script>
import './assets/scss/styles.scss'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import WelcomeBanner from './components/WelcomeBanner'
import Board from './components/Board'
import {db} from './db'; // загружаем модуль базы
import {boardRef} from './db'; // загружаем Ref доски

export default {
	name: 'app',
	/////////////////////////////////////////////////////////
	components: {
		Sidebar,
		Topbar,
		WelcomeBanner,
		Board
	},
	/////////////////////////////////////////////////////////
	computed: {
		boardStatus() { // Узнаем, есть ли доска для условия if
			return this.$store.getters.GET_columns;
		},
		boardMode() { // Получаем статус для динамического компонента
			return this.$store.getters.GET_welcomeBanner.component;
		}
	},
	/////////////////////////////////////////////////////////
	firebase() {
        return {
            board: boardRef,
        };
    },
}
</script>

<style lang="scss">
</style>