//axios 적용 전 임시 하드코딩 데이터
const posts = [
	{
		id: 1,
		title: '제목',
		content: '내용1',
		createdAt: '2024-12-18',
	},
	{
		id: 2,
		title: '제목',
		content: '내용2',
		createdAt: '2024-12-18',
	},
	{
		id: 3,
		title: '제목',
		content: '내용3',
		createdAt: '2024-12-18',
	},
	{
		id: 4,
		title: '제목',
		content: '내용4',
		createdAt: '2024-12-18',
	},
	{
		id: 5,
		title: '제목',
		content: '내용5',
		createdAt: '2024-12-18',
	},
];

export function getPosts() {
	return posts;
	//return axios.get('http://localhost:3000/posts');
}

// export function getmenus() {
// 	return axios.get('http://localhost:3000/menus');
// }

// export function getPostById(id) {
// 	return posts.find(item => item.id === id);
// }
