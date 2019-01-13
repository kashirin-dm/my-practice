<template>
<!-- 1 Column -->
<div class="column-list-item-wrapper" :class="{'column-list-item-wrapper--hover-drag': columnHoverStatus}">
	<div class="column-and-wiew-menu">
		<div class="column-header" @mouseover="columnHoverStatus = true" @mouseout="columnHoverStatus = false">
			<span>{{ columnTitle.title }}</span>
			<svg focusable="false" viewBox="0 0 32 32"><path d="M16,22.5c-0.3,0-0.7-0.1-0.9-0.3l-11-9c-0.6-0.5-0.7-1.5-0.2-2.1c0.5-0.6,1.5-0.7,2.1-0.2L16,19.1l10-8.2c0.6-0.5,1.6-0.4,2.1,0.2c0.5,0.6,0.4,1.6-0.2,2.1l-11,9C16.7,22.4,16.3,22.5,16,22.5z"></path></svg>
		</div>
		<a href="#" class="add-card-button" role="button">
			<svg focusable="false" viewBox="0 0 32 32"><path d="M26,14h-8V6c0-1.1-0.9-2-2-2h0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2v0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2v0C28,14.9,27.1,14,26,14z"></path></svg>
		</a>
		<div class="column-cards-container column-cards-container--col-empty">
			<!-- ~~~~~~~~~~~~~~~~~ CARDS -->
			<Card v-for="card in CardsItems" :key="card.id" :cardTitle="card" />
		</div>
	</div>
</div>
</template>

<script>
import Card from './Card';
import {db} from '../db'; // загружаем модуль базы
import {boardRef} from '../db'; // загружаем Ref доски
export default {
	name: 'Column',
	/////////////////////////////////////////////////////////
	components: {
		Card,
	},
	/////////////////////////////////////////////////////////
	data(){
		return {
			columnHoverStatus: false
		};
	},
	/////////////////////////////////////////////////////////
	props: {
		columnTitle: boardRef
	},
	/////////////////////////////////////////////////////////
	computed: {
		CardsItems() { // Получаем колонки
			return this.$store.getters.GET_cards;
		},
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
