<template>
	<div>
		<h2>제목</h2>
		<p>내용</p>
		<p class="text-muted">2024-12-18</p>
		<hr class="my-4" />
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전글</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goListPage">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEditPage">
					수정
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

//상세페이지에서 수정페이지 이동 시 동일한 상세 페이지의 id값 조회
const id = route.params.id;

const goListPage = () => {
	router.push('/posts');
};

const goEditPage = () => {
	router.push({
		name: 'PostEdit',
		params: {
			id,
		},
	});
};
</script>

<style lang="scss" scoped></style>
