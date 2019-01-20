<template>
	<section class="top-sticky" :class="{ 'top-sticky__sticky--js': scrollMenuSticky }">
		<!-- Белая шапка -->
		<div
			class="top-sticky__top-panel"
			:class="{ 'top-sticky__top-panel__sticky-hide--js': scrollMenuSticky, 'top-sticky__top-panel__sticky-show--js': showWhiteMenuSticky }"
		>
			<div class="container">
				<div class="navi-logo">
					<router-link to="/" title="hh.kz">
						<span class="navi-logo__domain"></span>
						<span class="navi-logo__zone"></span>
					</router-link>
				</div>
				<div class="search-group">
					<input type="text" placeholder="Я ищу...">
					<select>
						<option value="searchVacancy" selected>Вакансии</option>
						<option value="searchResume">Резюме</option>
						<option value="employerList">Компании</option>
					</select>
					<button class="blue-btn">Найти</button>
				</div>
				<div class="navi-cells">
					<a href class="advanced-search">Расширенный поиск</a>
					<a href class="region">Работа в Казахстане</a>
				</div>
				<div class="navi-lang">
					<div class="navi-lang__lang-switcher">
						<span class="icon-flag icon-flag__ru"></span>
					</div>
					<div class="navi-lang__dropdown">
						<ul>
							<li>
								<span class="lang selected">
									Русский
									<span class="icon-flag icon-flag__ru"></span>
								</span>
							</li>
							<li>
								<a href>
									<span class="lang">
										Английский
										<span class="icon-flag icon-flag__en"></span>
									</span>
								</a>
							</li>
							<li>
								<a href>
									<span class="lang">
										Казахский
										<span class="icon-flag icon-flag__kz"></span>
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- Тёмная шапка -->
		<div class="top-sticky__nav-panel">
			<div class="container">
				<nav class="navi-wrapper">
					<div class="navi-logo-small" :class="{ 'navi-logo-small__visible--js': showFakeElements }">
						<router-link to="/" class="navi-logo-small__href">
							<img src="../assets/img/hh-small.svg" alt="hh.kz" title="hh.kz">
						</router-link>
					</div>
					<ul class="navi-items">
						<li class="navi-item__level-1">
							<span>Ищу работу</span>
							<ul class="navi-sub-dropdown">
								<li class="navi-item__level-2">
									<a href>
										<span>Создать резюме</span>
									</a>
								</li>
								<li class="navi-item__level-2">
									<a href>
										<span>Как улучшить резюме</span>
									</a>
								</li>
							</ul>
						</li>
						<li class="navi-item__level-1">
							<span>Ищу сотрудников</span>
							<ul class="navi-sub-dropdown">
								<li class="navi-item__level-2">
									<a href>
										<span class="primary">Разместить вакансию</span>
									</a>
								</li>
								<li class="navi-item__level-2">
									<a href>
										<span>Прайс-лист</span>
									</a>
								</li>
								<li class="navi-item__level-2">
									<a href>
										<span>Описание услуг</span>
									</a>
								</li>
							</ul>
						</li>
						<li class="navi-item__level-1">
							<a href>
								<span>Помощь</span>
							</a>
						</li>
						<li class="navi-item__level-1">
							<span>Компании</span>
							<ul class="navi-sub-dropdown">
								<li class="navi-item__level-2">
									<a href>
										<span>Каталог компаний</span>
									</a>
								</li>
								<li class="navi-item__level-2">
									<a href>
										<span>Работа по профессиям</span>
									</a>
								</li>
								<li class="navi-item__level-2">
									<a href>
										<span>Работа рядом с метро</span>
									</a>
								</li>
							</ul>
						</li>
						<li class="navi-item__level-1">
							<span>Проекты</span>
							<ul class="navi-sub-dropdown">
								<li class="navi-item__level-2 external-link">
									<a href="//hh.kz" target="_blank">
										<span>Премия HR-бренд</span>
									</a>
								</li>
								<li class="navi-item__level-2 external-link">
									<a href="//hh.kz" target="_blank">
										<span>HRspace</span>
									</a>
								</li>
								<li class="navi-item__level-2 external-link">
									<a href="//hh.kz" target="_blank">
										<span>Карьерный консультант</span>
									</a>
								</li>
								<li class="navi-item__level-2">
									<a href>
										<span>Обучающие вебинары</span>
									</a>
								</li>
								<li class="navi-item__level-2">
									<a href>
										<span>Работа рядом с метро</span>
									</a>
								</li>
							</ul>
						</li>
					</ul>
					<div class="navi-fake-search" :class="{ 'navi-fake-search__visible--js': showFakeElements }">
						<div
							class="fake-search"
							@click="showWhiteMenuSticky = true, showFakeElements = false, fakeSearchCatchPos()"
						>Я ищу...</div>
						<a href>Расширенный</a>
					</div>
				</nav>
				<div class="navi-user">
					<span>Войти</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "AppHeader",
	//---------------
	data() {
		return {
			// Лепим верхнее меню к верху экрана при скролле вниз
			scrollMenuSticky: false,
			// Показываем мини-лого и поиск в тёмном меню
			showFakeElements: false,
			// Показываем светлое меню прилепив к верху экрана по клику на fake-search
			showWhiteMenuSticky: false,
			// Текущая позиция скролла, записываем при клике на fake-search
			currentScrollY: 0
		};
	},
	//---------------
	methods: {
		// При клике на fake-search записываем текущую позицию скролла
		fakeSearchCatchPos() {
			this.currentScrollY = pageYOffset;
		},
		// Слушаем событие скролла
		handleScroll() {
			// Если промотали вниз на 81px и белое меню не открыто
			if (pageYOffset >= 81 && this.showWhiteMenuSticky == false) {
				// То показываем доп элементы в тёмном меню и включаем режим прилипания для всего меню
				this.scrollMenuSticky = true;
				this.showFakeElements = true;
			}
			// Если скроллим назад и белое меню также не прилипало
			if (pageYOffset < 81 && this.showWhiteMenuSticky == false) {
				// Просто отключаем режим прилипания
				this.scrollMenuSticky = false;
				this.showFakeElements = false;
			}
			// Отключаем режим прилипания включая белое меню при полной отмотке вверх
			if (pageYOffset == 0 && this.showWhiteMenuSticky == true) {
				this.scrollMenuSticky = false;
				this.showWhiteMenuSticky = false;
				this.showFakeElements = false;
			}
			// Если показано белое меню, но мы промотали вниз, то оно выключается
			if (
				pageYOffset > this.currentScrollY &&
				this.showWhiteMenuSticky == true
			) {
				this.showWhiteMenuSticky = false;
				this.showFakeElements = false;
			}
		}
	},
	//---------------
	created() {
		window.addEventListener("scroll", this.handleScroll);
	},
	//---------------
	destroyed() {
		window.removeEventListener("scroll", this.handleScroll);
	}
};
</script>