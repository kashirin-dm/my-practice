<template>
	<aside class="search-settings">
		<div class="search-settings__filters">
			<select>
				<option value="publication_time">по дате</option>
				<option value="salary_desc">по убыванию зарплаты</option>
				<option value="salary_asc">по возрастанию зарплаты</option>
				<option value="relevance" selected>по соответствию</option>
			</select>
			<select>
				<option value="30" selected>за месяц</option>
				<option value="7">за неделю</option>
				<option value="3">за три дня</option>
				<option value="1">за сутки</option>
			</select>
		</div>
		<div class="search-settings__additional">
			<button>На карте</button>
			<button>Изменить запрос</button>
		</div>
	</aside>
</template>

<script>
export default {
	name: "VacancySettings"
};
</script>