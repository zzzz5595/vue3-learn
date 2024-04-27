<template>
	<div>
		<h2>HomeView</h2>
		<button class="btn btn-primary" @click="goAboutPage">Avout이동</button>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

//페이지 이동
const goAboutPage = () => {
	router.push('/about');
};
</script>

<style lang="scss" scoped></style>
