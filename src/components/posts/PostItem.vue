<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title">{{ title }}</h5>
			<p class="card-text">
				{{ content }}
			</p>
			<p class="text-muted">{{ createdAt }}</p>
		</div>
	</div>
</template>

<script setup>
//props 정의
defineProps({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
	},
	createdAt: {
		//createdAt 타입은 여러개가 올수도 있으므로 배열로 필요한 타입정의
		type: [String, Date, Number],
	},
});
</script>

<style lang="scss" scoped></style>
