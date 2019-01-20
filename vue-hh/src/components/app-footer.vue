<template>
	<footer class="container">
		<div class="footer-content">
			<div class="footer-content__main">
				<div class="footer-content__nav">
					<div>
						<a href>Работодателям</a>
						<a href>Прайс-лист</a>
					</div>
					<div>
						<a href>Соискателям</a>
						<a href>Продвижение резюме</a>
						<a href>Работа в других городах</a>
					</div>
					<div>
						<a href>&copy; {{ new Date().getFullYear() }} Группа компаний HeadHunter</a>
						<a href>Наши вакансии</a>
						<a href>Реклама на сайте</a>
						<a href>Мобильный сайт</a>
						<a href>Требования к ПО</a>
					</div>
				</div>
				<div class="footer-content__social">
					<!--noindex-->
					<a href class="fb" target="_blank" rel="noopener noreferrer nofollow"></a>
					<a href class="vk" target="_blank" rel="noopener noreferrer nofollow"></a>
					<a href class="insta" target="_blank" rel="noopener noreferrer nofollow"></a>
					<!--/noindex-->
				</div>
			</div>
			<div class="footer-content__additional">
				<p>Сегодня на сайте 62 вакансии, 2 009 563 резюме, 54 171 компания</p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "AppFooter"
};
</script>