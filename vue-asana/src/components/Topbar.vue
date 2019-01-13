<template>
<section class="top-bar">
	<a class="top-bar__show-sidebar" @click="UIsidebarStatusOpen" :class="{'top-bar__show-sidebar-not': !UIsidebarStatus}">
		<svg focusable="false" viewBox="0 0 32 32"><path d="M31,4H1C0.4,4,0,3.6,0,3s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,4,31,4z"></path><path d="M31,16H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,16,31,16z"></path><path d="M31,28H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,28,31,28z"></path></svg>
	</a>
	<div class="top-bar__page-header">
		<div class="page-header__page-icon">
			<svg focusable="false" viewBox="0 0 32 32"><path d="M29,4H3C1.3,4,0,5.3,0,7v14c0,1.7,1.3,3,3,3h7v3c0,1.7,1.3,3,3,3h6c1.7,0,3-1.3,3-3v-5h7c1.7,0,3-1.3,3-3V7C32,5.3,30.7,4,29,4z M3,22c-0.6,0-1-0.4-1-1V7c0-0.6,0.4-1,1-1h7v16H3z M20,27c0,0.6-0.4,1-1,1h-6c-0.6,0-1-0.4-1-1v-3V6h8v16V27zM30,19c0,0.6-0.4,1-1,1h-7V6h7c0.6,0,1,0.4,1,1V19z"></path></svg>
		</div>
		<div class="page-header__title-and-nav">
			<div class="page-header__title-row">
				<div class="title">Project X</div>
				<div class="star">
					<svg focusable="false" viewBox="0 0 32 32"><path d="M31.6,12.3c-0.3-0.8-0.9-1.4-1.7-1.5l-8.2-1.2l-3.7-7.4C17.6,1.5,16.8,1,16,1c0,0,0,0,0,0c-0.8,0-1.6,0.5-1.9,1.2l-3.7,7.4l-8.2,1.2c-0.8,0.1-1.5,0.7-1.7,1.5c-0.3,0.8,0,1.6,0.5,2.2l5.9,5.8l-1.4,8.2c-0.1,0.8,0.2,1.6,0.9,2.1c0.7,0.5,1.5,0.6,2.3,0.2l7.3-3.9l7.3,3.9c0.3,0.2,0.7,0.3,1,0.3c0.4,0,0.9-0.1,1.3-0.4c0.7-0.5,1-1.3,0.9-2.1l-1.4-8.2l5.9-5.8C31.6,13.9,31.8,13.1,31.6,12.3z"></path></svg>
				</div>
				<div class="project-actions">
					<svg focusable="false" viewBox="0 0 32 32"><circle cx="3" cy="16" r="3"></circle><circle cx="16" cy="16" r="3"></circle><circle cx="29" cy="16" r="3"></circle></svg>
				</div>
				<div class="facepile-and-share">
					<div class="facepile">
						<div style="background: url(//avatarfiles.alphacoders.com/161/161515.jpg) no-repeat; background-size: cover;"></div>
						<div style="background: url(//avatarfiles.alphacoders.com/163/163238.png) no-repeat; background-size: cover;"></div>
					</div>
					<div class="share">
						<svg viewBox="0 0 24 24"><path d="M18.3,14h-0.7c-0.8,0-1.3,0.9-0.8,1.5c0.8,1.2,1.2,2.6,1.2,4l0,0v0.1l0,0c0,0.3-0.1,0.7-0.1,1c-0.2,0.7,0.3,1.3,0.9,1.3 h2.8c1.3,0,2.4-1.1,2.4-2.4C24,16.5,21.4,14,18.3,14z"></path><path d="M14.8,11.9c0.7,0.2,1.5,0.2,2.3,0c2.1-0.4,3.8-2.1,4.2-4.2C22.1,4.1,19.4,1,16,1c-0.4,0-0.8,0-1.2,0.1 c-0.7,0.2-0.9,0.9-0.6,1.5c0.7,1.1,1.1,2.4,1.1,3.8s-0.4,2.7-1.1,3.8C13.9,10.9,14.1,11.7,14.8,11.9z"></path><path d="M12,14.3c-0.5-0.2-1.1-0.3-1.7-0.3H5.7C2.6,14,0,16.5,0,19.6C0,20.9,1.1,22,2.4,22h11.2c1.3,0,2.4-1.1,2.4-2.4 C16,17.1,14.3,15,12,14.3z"></path><circle cx="8" cy="6.5" r="5.5"></circle></svg>
						Поделиться
					</div>
				</div>
			</div>
			<nav class="page-header__menu-row">
				<div class="tab selected-tab">Доска</div>
				<div class="tab">Таймлайн</div>
				<div class="tab">Календарь</div>
				<div class="tab">Беседы</div>
				<div class="tab">Прогресс</div>
				<div class="tab">Файлы</div>
			</nav>
		</div>
	</div>

	<div class="top-bar__global-actions">
		<div class="global-actions__top-search">
			<div class="top-search__wrapper">
				<input type="search" placeholder="В любом проекте или задаче...">
				<svg focusable="false" viewBox="0 0 32 32"><path d="M29.707,28.293l-8.256-8.256C23.042,18.13,24,15.677,24,13c0-6.075-4.925-11-11-11S2,6.925,2,13s4.925,11,11,11c2.677,0,5.13-0.958,7.037-2.549l8.256,8.256L29.707,28.293z M4,13c0-4.963,4.037-9,9-9c4.963,0,9,4.037,9,9s-4.037,9-9,9C8.037,22,4,17.963,4,13z"></path></svg>
			</div>
		</div>
		<div class="global-actions__omni-button">
			<svg viewBox="0 0 24 24"><path d="M10,10V4c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2v6h6c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2h-6v6c0,1.1-0.9,2-2,2c-1.1,0-2-0.9-2-2v-6H4c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2H10z"></path></svg>
			Добавить
			</div>
		<a href="#" role="button" class="global-actions__help-button">
			<svg focusable="false" viewBox="0 0 32 32"><path d="M9,10.5277402 L12.358774,10.5277402 C12.5048077,8.44925575 13.9489183,7.13396482 16.188101,7.13396482 C18.4110577,7.13396482 19.8551683,8.43301759 19.8551683,10.2192152 C19.8551683,11.8592693 19.1574519,12.7848444 17.1941106,13.97023 C14.9711538,15.3017591 13.9813702,16.7631935 14.0625,19.1014885 L14.078726,20.3355886 L17.4375,20.3355886 L17.4375,19.3612991 C17.4375,17.7212449 18.0378606,16.8606225 20.1310096,15.6265223 C22.2728365,14.3437077 23.5384615,12.5737483 23.5384615,10.0730717 C23.5384615,6.54939107 20.6502404,4 16.3665865,4 C11.6610577,4 9.14603365,6.79296346 9,10.5277402 Z M15.9609375,28 C17.453726,28 18.4597356,27.0094723 18.4597356,25.5317997 C18.4597356,24.0216509 17.453726,23.0311231 15.9609375,23.0311231 C14.468149,23.0311231 13.4459135,24.0216509 13.4459135,25.5317997 C13.4459135,27.0094723 14.468149,28 15.9609375,28 Z"></path></svg>
		</a>
		<div class="global-actions__upgrade-button">Улучшить</div>
		<a href="#" class="global-actions__avatar" style="background: url(//avatarfiles.alphacoders.com/161/161515.jpg) no-repeat; background-size: cover;"></a>
	</div>
</section>
</template>

<script>
export default {
	name: 'Topbar',
	computed: {
		UIsidebarStatus() { // Получаем статус открытия сайдбара
			return this.$store.getters.GET_UIsidebarStatus;
		}
	},
	methods: {
		UIsidebarStatusOpen() {// Открываем сайдбар
			this.$store.dispatch('ACT_UIsidebarStatus', false);
		}
	},
}
</script>

<style scoped lang="scss">
</style>
