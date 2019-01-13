<template>
<article>
	<h3>Заголовок карточки 1</h3>
	<p>Основной текст</p>
	<div class="action-block">
		<div>
			<a href="" class="btn">Читать</a>
		</div>
		<span class="autor">
			Автор: <a href="">Милаков</a>
		</span>
		<div class="rating">
			<a href="" class="like">▲</a>
			<span>233</span>
			<a href="" class="dislike">▼</a>
		</div>
	</div>
</article>
</template>

<script>
export default {
  name: 'PostCard',
}
</script>