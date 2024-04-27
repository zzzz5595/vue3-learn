<template>
	<div>
		<h2>게시글수정</h2>
		<hr class="my-4" />
		<!-- form의 기본 동작 이벤트(새로고침)를 하지 않도록 제어하는 이벤트-->
		<form action="" @submit.prevent>
			<div class="mb-3">
				<label for="title" class="form-label">제목</label>
				<input type="text" class="form-control" id="title" />
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">내용</label>
				<textarea class="form-control" id="content" rows="3"></textarea>
			</div>

			<div class="pt-4">
				<button
					type="button"
					class="btn btn-outline-danger me-2"
					@click="goDetailPage"
				>
					취소
				</button>
				<button class="btn btn-primary">수정</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

//수정페이지에서 상세페이지 이동 시 동일한 수정 페이지의 id값 조회
const id = route.params.id;

const goDetailPage = () => {
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
	});
};
</script>

<style lang="scss" scoped></style>
