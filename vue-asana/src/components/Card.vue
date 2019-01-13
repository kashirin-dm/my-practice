<template>
<div class="card-wrapper">
	<div class="card-content">
		<div class="pot-pills">
			<div class="pot-pill orange"></div>
			<div class="pot-pill blue"></div>
		</div>
		<div class="card-content__name-and-dropdown">
			<div class="card-content__name">
				Написал: Ватсапп, салон, +7 747 718 4794
			</div>
			<svg class="show-delete-card" focusable="false" viewBox="0 0 32 32"><path d="M16,22.5c-0.3,0-0.7-0.1-0.9-0.3l-11-9c-0.6-0.5-0.7-1.5-0.2-2.1c0.5-0.6,1.5-0.7,2.1-0.2L16,19.1l10-8.2c0.6-0.5,1.6-0.4,2.1,0.2c0.5,0.6,0.4,1.6-0.2,2.1l-11,9C16.7,22.4,16.3,22.5,16,22.5z"></path></svg>
		</div>
		<div class="card-content__metadata">
			<div class="left_metadata">
				<div class="domain-avatar">
					<svg focusable="false" viewBox="0 0 32 32"><path d="M16,18c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S20.4,18,16,18z M16,4c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S19.3,4,16,4z"></path><path d="M29,32c-0.6,0-1-0.4-1-1v-4.2c0-2.6-2.2-4.8-4.8-4.8H8.8C6.2,22,4,24.2,4,26.8V31c0,0.6-0.4,1-1,1s-1-0.4-1-1v-4.2C2,23,5,20,8.8,20h14.4c3.7,0,6.8,3,6.8,6.8V31C30,31.6,29.6,32,29,32z"></path></svg>
				</div>
				<div class="due-date deadline">2 Фев</div>
			</div>
			<div class="right_metadata">
				<span class="comment-count">
					<span>1</span>
					<svg viewBox="0 0 24 24"><path d="M14.7,4C17.6,4,20,6.4,20,9.3v1.3c0,2.9-2.4,5.3-5.3,5.3H10H9.4l-0.5,0.3L6,18.3v-2.6v-0.8l-0.5-0.6C4.5,13.3,4,12,4,10.7  V9.3C4,6.4,6.4,4,9.3,4H14.7 M14.7,2H9.3C5.3,2,2,5.3,2,9.3v1.3c0,2,0.8,3.7,2,5.1V22l6-4h4.7c4.1,0,7.3-3.3,7.3-7.3V9.3  C22,5.3,18.7,2,14.7,2L14.7,2z"></path></svg>
				</span>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'Card',
}
</script>

<style scoped lang="scss">
</style>
