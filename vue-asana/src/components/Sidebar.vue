<template>
<aside class="sidebar" :class="{'sidebar-is-collapsed': UIsidebarStatus}">
	<div class="sidebar__logo-and-hide-sidebar">
		<a href="#" title="Посмотреть проекты">Vue.js логотип</a>
		<svg @click="UIsidebarStatusClose" viewBox="0 0 50 32"><path d="M49,4H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,4,49,4z"></path><path d="M49,16H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,16,49,16z"></path><path d="M49,28H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,28,49,28z"></path><path d="M8.1,22.8c-0.3,0-0.5-0.1-0.7-0.3L0.7,15l6.7-7.8c0.4-0.4,1-0.5,1.4-0.1c0.4,0.4,0.5,1,0.1,1.4L3.3,15l5.5,6.2   c0.4,0.4,0.3,1-0.1,1.4C8.6,22.7,8.4,22.8,8.1,22.8z"></path></svg>
	</div>
	<nav class="sidebar__navigation">
		<a href="#">
			<svg viewBox="0 0 40 40"><path d="M37.9,15L22.2,3.8c-1.3-1-3.1-1-4.4-0.1L2.2,14.4c-0.7,0.5-0.9,1.4-0.4,2.1c0.5,0.7,1.4,0.9,2.1,0.4L6,15.4v12.3c0,4.6,3.7,8.3,8.3,8.3h11.4c4.6,0,8.3-3.7,8.3-8.3V15.9l2.1,1.5c0.3,0.2,0.6,0.3,0.9,0.3c0.5,0,0.9-0.2,1.2-0.6C38.7,16.4,38.5,15.5,37.9,15z M31,27.7c0,2.9-2.4,5.3-5.3,5.3H14.3C11.4,33,9,30.6,9,27.7V13.3l10.6-7.2c0.2-0.2,0.5-0.2,0.8,0L31,13.7V27.7z"></path></svg>
			<span>Домашний экран</span>
		</a>
		<a href="#">
			<svg viewBox="0 0 40 40"><path d="M20,37.5c-9.6,0-17.5-7.9-17.5-17.5S10.4,2.5,20,2.5S37.5,10.4,37.5,20S29.6,37.5,20,37.5z M20,5.5C12,5.5,5.5,12,5.5,20S12,34.5,20,34.5S34.5,28,34.5,20S28,5.5,20,5.5z"></path><path d="M16.7,27.4c-0.4,0-0.8-0.1-1.1-0.4l-4.1-4.1c-0.6-0.6-0.6-1.5,0-2.1s1.5-0.6,2.1,0l3.1,3.1l8.9-8.9c0.6-0.6,1.5-0.6,2.1,0s0.6,1.5,0,2.1l-10,10C17.5,27.3,17.1,27.4,16.7,27.4z"></path></svg>
			<span>Мои задачи</span>
		</a>
		<a href="#">
			<svg viewBox="0 0 40 40"><path d="M7.5,32L7.5,32h-1c-1.5,0-2.8-0.8-3.4-2c-0.8-1.5-0.4-3.4,0.9-4.5c1.2-1,1.9-2.4,2-3.9v-6.1C6,8.1,12.3,2,20,2s14,6.1,14,13.5V22c0.2,1.4,0.9,2.6,2,3.5c1.3,1.1,1.7,2.9,0.9,4.5c-0.6,1.2-2,2-3.4,2h-0.9H7.5z M7.6,29h25.8c0.3,0,0.7-0.2,0.8-0.4c0.2-0.4,0-0.7-0.2-0.8l0,0c-1.6-1.4-2.7-3.3-3-5.5c0-0.1,0-0.1,0-0.2v-6.6C31,9.7,26.1,5,20,5S9,9.7,9,15.5v6.1v0.1c-0.2,2.4-1.3,4.5-3.1,6c-0.2,0.2-0.3,0.5-0.2,0.8C5.9,28.8,6.2,29,6.5,29H7.6L7.6,29z M24.7,34c-0.7,1.9-2.5,3.2-4.7,3.2s-4-1.3-4.7-3.2H24.7z"></path></svg>
			<span>Уведомления</span>
		</a>
		<a href="#">
			<svg viewBox="0 0 40 40"><path d="M10,32.5c0,0.8-0.7,1.5-1.5,1.5l0,0C7.7,34,7,33.3,7,32.5v-27C7,4.7,7.7,4,8.5,4l0,0C9.3,4,10,4.7,10,5.5V32.5z M18,17.5  c0-0.8-0.7-1.5-1.5-1.5l0,0c-0.8,0-1.5,0.7-1.5,1.5v15c0,0.8,0.7,1.5,1.5,1.5l0,0c0.8,0,1.5-0.7,1.5-1.5V17.5z M26,9.5  C26,8.7,25.3,8,24.5,8l0,0C23.7,8,23,8.7,23,9.5v23c0,0.8,0.7,1.5,1.5,1.5l0,0c0.8,0,1.5-0.7,1.5-1.5V9.5z M34,24.5  c0-0.8-0.7-1.5-1.5-1.5l0,0c-0.8,0-1.5,0.7-1.5,1.5v8c0,0.8,0.7,1.5,1.5,1.5l0,0c0.8,0,1.5-0.7,1.5-1.5V24.5z"></path></svg>
			<span>Портфолио</span>
		</a>
	</nav>
	<div class="sidebar__custom-navigation">
		<div class="custom-navigation__reports">
			<div class="reports__accordion">
				<span>Отчеты</span>
				<svg class="sidebar__arrow-icon" viewBox="0 0 24 24"><path d="M12,15.6c-0.3,0-0.7-0.1-1-0.4l-4.8-4.1C5.6,10.6,5.5,9.6,6.1,9c0.5-0.6,1.5-0.7,2.1-0.2l3.8,3.3l3.6-3.2c0.6-0.6,1.6-0.5,2.1,0.1c0.6,0.6,0.5,1.6-0.1,2.1L13,15.2C12.7,15.5,12.4,15.6,12,15.6z"></path></svg>
			</div>
			<div class="reports__item">
				<span>Задачи созданные мной</span>
				</div>
			<div class="reports__item">
				<span>Задачи порученные другим</span>
				<svg focusable="false" viewBox="0 0 32 32"><path d="M16,24.3l-6,3.9v-8c1.7,1.1,3.8,1.8,6,1.8s4.3-0.7,6-1.8v8L16,24.3z M16,2c5,0,9,4,9,9c0,5-4,9-9,9s-9-4-9-9    C7,6,11,2,16,2L16,2z M27,11c0-6.1-4.9-11-11-11S5,4.9,5,11c0,2.9,1.1,5.6,3,7.5V32l8-5.3l8,5.3V18.5C25.9,16.6,27,13.9,27,11    L27,11z"></path></svg>
				</div>
			<div class="reports__item">
				<span>Недавно завершённые задачи</span>
				<svg focusable="false" viewBox="0 0 32 32"><path d="M16,24.3l-6,3.9v-8c1.7,1.1,3.8,1.8,6,1.8s4.3-0.7,6-1.8v8L16,24.3z M16,2c5,0,9,4,9,9c0,5-4,9-9,9s-9-4-9-9    C7,6,11,2,16,2L16,2z M27,11c0-6.1-4.9-11-11-11S5,4.9,5,11c0,2.9,1.1,5.6,3,7.5V32l8-5.3l8,5.3V18.5C25.9,16.6,27,13.9,27,11    L27,11z"></path></svg>
				</div>
			<a href="#">Обновиться и получить больше отчётов</a>
		</div>
		<div class="custom-navigation__teams-list">
			<a href="#" class="teams-list__workspace">
				<span>Kashirin Corporation</span>
				<svg viewBox="0 0 24 24"><path d="M10,10V4c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2v6h6c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2h-6v6c0,1.1-0.9,2-2,2c-1.1,0-2-0.9-2-2v-6H4c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2H10z"></path></svg>
			</a>
			<div class="teams-list__members-list">
				<div class="facepile">
					<div style="background: url(//avatarfiles.alphacoders.com/161/161515.jpg) no-repeat; background-size: cover;"></div>
					<div style="background: url(//avatarfiles.alphacoders.com/163/163238.png) no-repeat; background-size: cover;"></div>
					<div style="background: url(//avatarfiles.alphacoders.com/161/161875.jpg) no-repeat; background-size: cover;"></div>
				</div>
				<a href="#">Пригласить</a>
			</div>
			<div class="teams-list__projects-list">

				<div class="projects-list__item">
					<a href="#" class="active">
						<div class="title_project">
							<svg class="color-mark mark--color-red" viewBox="0 0 24 24"><path d="M10.4,4h3.2c2.2,0,3,0.2,3.9,0.7c0.8,0.4,1.5,1.1,1.9,1.9c0.4,0.8,0.7,1.6,0.7,3.9v3.2c0,2.2-0.2,3-0.7,3.9c-0.4,0.8-1.1,1.5-1.9,1.9c-0.8,0.4-1.6,0.7-3.9,0.7h-3.2c-2.2,0-3-0.2-3.9-0.7c-0.8-0.4-1.5-1.1-1.9-1.9C4.2,16.6,4,15.8,4,13.6v-3.2c0-2.2,0.2-3,0.7-3.9c0.4-0.8,1.1-1.5,1.9-1.9C7.4,4.2,8.2,4,10.4,4z"></path></svg>
							<span>Project X</span>
						</div>
						<div class="title_icons">
							<svg class="more-dots" focusable="false" viewBox="0 0 32 32"><circle cx="3" cy="16" r="3"></circle><circle cx="16" cy="16" r="3"></circle><circle cx="29" cy="16" r="3"></circle></svg>
						</div>
					</a>
				</div>
				<div class="projects-list__item">
					<a href="#">
						<div class="title_project">
							<svg class="color-mark mark--color-blue" viewBox="0 0 24 24"><path d="M10.4,4h3.2c2.2,0,3,0.2,3.9,0.7c0.8,0.4,1.5,1.1,1.9,1.9c0.4,0.8,0.7,1.6,0.7,3.9v3.2c0,2.2-0.2,3-0.7,3.9c-0.4,0.8-1.1,1.5-1.9,1.9c-0.8,0.4-1.6,0.7-3.9,0.7h-3.2c-2.2,0-3-0.2-3.9-0.7c-0.8-0.4-1.5-1.1-1.9-1.9C4.2,16.6,4,15.8,4,13.6v-3.2c0-2.2,0.2-3,0.7-3.9c0.4-0.8,1.1-1.5,1.9-1.9C7.4,4.2,8.2,4,10.4,4z"></path></svg>
							<span>Маркетинг</span>
						</div>
						<div class="title_icons">
							<svg class="more-dots" focusable="false" viewBox="0 0 32 32"><circle cx="3" cy="16" r="3"></circle><circle cx="16" cy="16" r="3"></circle><circle cx="29" cy="16" r="3"></circle></svg>
						</div>
					</a>
				</div>
				<div class="projects-list__item">
					<a href="#">
						<div class="title_project">
							<svg class="color-mark mark--color-pink" viewBox="0 0 24 24"><path d="M10.4,4h3.2c2.2,0,3,0.2,3.9,0.7c0.8,0.4,1.5,1.1,1.9,1.9c0.4,0.8,0.7,1.6,0.7,3.9v3.2c0,2.2-0.2,3-0.7,3.9c-0.4,0.8-1.1,1.5-1.9,1.9c-0.8,0.4-1.6,0.7-3.9,0.7h-3.2c-2.2,0-3-0.2-3.9-0.7c-0.8-0.4-1.5-1.1-1.9-1.9C4.2,16.6,4,15.8,4,13.6v-3.2c0-2.2,0.2-3,0.7-3.9c0.4-0.8,1.1-1.5,1.9-1.9C7.4,4.2,8.2,4,10.4,4z"></path></svg>
							<span>Учёт</span>
						</div>
						<div class="title_icons">
							<svg class="more-dots" focusable="false" viewBox="0 0 32 32"><circle cx="3" cy="16" r="3"></circle><circle cx="16" cy="16" r="3"></circle><circle cx="29" cy="16" r="3"></circle></svg>
							<svg class="lock-icon" viewBox="0 0 24 24"><path d="M20,12h-2V8c0-3.3-2.7-6-6-6S6,4.7,6,8v4H4c-1.1,0-2,0.9-2,2v8c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-8C22,12.9,21.1,12,20,12z M9,8c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3v4H9V8z"></path></svg>
						</div>
					</a>
				</div>
				<div class="projects-list__item">
					<a href="#">
						<div class="title_project">
							<svg class="color-mark mark--color-purple" viewBox="0 0 24 24"><path d="M10.4,4h3.2c2.2,0,3,0.2,3.9,0.7c0.8,0.4,1.5,1.1,1.9,1.9c0.4,0.8,0.7,1.6,0.7,3.9v3.2c0,2.2-0.2,3-0.7,3.9c-0.4,0.8-1.1,1.5-1.9,1.9c-0.8,0.4-1.6,0.7-3.9,0.7h-3.2c-2.2,0-3-0.2-3.9-0.7c-0.8-0.4-1.5-1.1-1.9-1.9C4.2,16.6,4,15.8,4,13.6v-3.2c0-2.2,0.2-3,0.7-3.9c0.4-0.8,1.1-1.5,1.9-1.9C7.4,4.2,8.2,4,10.4,4z"></path></svg>
							<span>Личное</span>
						</div>
						<div class="title_icons">
							<svg class="more-dots" focusable="false" viewBox="0 0 32 32"><circle cx="3" cy="16" r="3"></circle><circle cx="16" cy="16" r="3"></circle><circle cx="29" cy="16" r="3"></circle></svg>
							<svg class="lock-icon" viewBox="0 0 24 24"><path d="M20,12h-2V8c0-3.3-2.7-6-6-6S6,4.7,6,8v4H4c-1.1,0-2,0.9-2,2v8c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-8C22,12.9,21.1,12,20,12z M9,8c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3v4H9V8z"></path></svg>
						</div>
					</a>
				</div>
			
			</div>
		</div>
	</div>
	<div class="sidebar__invite">
		<img src="../assets/invite_peeps.png" alt="Пригласите свою команду в Asana!">
		<div class="invite-text">Пригласите вашу команду и начните сотрудничать!</div>
		<div class="button" role="button">Пригласить в Asana</div>
	</div>
</aside>
</template>

<script>
export default {
	name: 'Sidebar',
	computed: {
		UIsidebarStatus() { // Получаем статус открытия сайдбара
			return this.$store.getters.GET_UIsidebarStatus;
		}
	},
	methods: {
		UIsidebarStatusClose() { // Закрываем сайдбар
			this.$store.dispatch('ACT_UIsidebarStatus', true);
		}
	},
	
}
</script>

<style scoped lang="scss">
</style>
