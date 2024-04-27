<template>
	<div>
		<h2>AboutView</h2>
		<button class="btn btn-primary" @click="goHomePage">Home이동</button>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

//페이지이동
//GIT TEST
const goHomePage = () => {
	router.push('/');
};
</script>

<style lang="scss" scoped></style>
