<template>
	<div id="app">
		<div class="header-push"></div>
		<app-header/>
		<router-view/>
		<app-footer/>
	</div>
</template>

<script>
import "./assets/scss/style.scss";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
export default {
	components: {
		AppHeader,
		AppFooter
	}
};
</script>
