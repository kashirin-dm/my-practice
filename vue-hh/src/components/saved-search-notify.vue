<template>
	<aside
		class="saved-search"
		:class="{'saved-search__opened' : showFormToggler, 'saved-search__collapsed' : !showFormToggler}"
	>
		<div v-show="showFormToggler">
			<div class="saved-search__plane"></div>
			<div>
				<div class="saved-search__form-row">Подпишитесь на результаты поиска по этому запросу,
					<br>чтобы не пропустить интересные предложения
				</div>
				<input type="text" placeholder="Адрес электронной почты">
				<button class="blue-btn">Подписаться</button>
			</div>
			<span class="saved-search__closer" @click="showFormToggler = false">×</span>
		</div>
		<aside class="saved-search__teaser" v-show="!showFormToggler" @click="showFormToggler = true"></aside>
	</aside>
</template>

<script>
export default {
	name: "SavedSearchNotify",
	//---------------
	data() {
		return {
			// Закрываем форму подписки на результаты если false
			showFormToggler: true
		};
	}
};
</script>