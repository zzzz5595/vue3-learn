<template>
	<div>
		<h2>게시글목록</h2>
		<hr class="my-4" />

		<div class="row g-3">
			<div v-for="post in posts" :key="post.id" class="col-4">
				<!-- props 데이터 전달 및 v-vind를통한 데이터 매핑-->
				<PostItem
					:title="post.title"
					:content="post.content"
					:createdAt="post.createdAt"
					@click="goPage(post.id)"
				></PostItem>
			</div>
		</div>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
//게시글 목록 리스트 함수 import
import { getPosts } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

//단일값이 아닌 다중값이므로 ([]) 선언
const posts = ref([]);

//게시글 목록 리스트 조회함수
const fetchPosts = () => {
	//조회된 게시글 목록 데이터를 posts에 매핑
	posts.value = getPosts();
};

//게시글 목록 리스트 조회 실행
fetchPosts();

//상세페이지이동
const goPage = id => {
	//문자열로 넘기기
	router.push(`/posts/${id}`);

	//객체로 name값을 지정해서 넘기기
	// router.push({
	// 	name: 'PostDetail',
	// 	params: {
	// 		id, // Router에서 파라미터 이름과 값이 동일한 경우에는 축약해서 사용
	// 	},
	// });
};
</script>

<style lang="scss" scoped></style>
