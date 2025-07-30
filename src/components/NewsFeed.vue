<script setup>
defineProps({
	title: String,
	date: String,
	link: String,
	image: String
})
</script>

<template>
	<a :href="link" target="_blank" rel="noopener noreferrer" class="news bg-white">
		<article class="d-flex flex-column">
			<img :src="image" alt="news feed" class="img-fluid" />
			<h4>{{ title }}</h4>
			<span class="text-muted text-end">{{ date }}</span>
		</article>
	</a>
</template>



<style scoped>
.news {
	max-width: 314px;
	padding: 1em;
	display: block;
	min-width: 305px;
}

.news .text-muted {
	font-size: .8em;
}


a {
	text-decoration: none;
	color: rgb(31, 31, 31);
}

img {
	transition: all 250ms ease-in-out;
	max-height: 140px;
	object-fit: cover;
}

a:hover img {
	transform: scale(1.1);
	z-index: 0;
	position: relative;
}

article {
	overflow: hidden;
}

h4 {
	font-size: 18px;
	padding: 0.5em 0;
	max-width: 90%;
	position: relative;
	z-index: 2;
	margin-bottom: 0;
}

/*
article::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #0D6EFD;
	background: linear-gradient(1deg, rgba(13, 103, 238, 0.596) 0%, rgba(255, 255, 255, 0.18) 47%);
	z-index: 1;
}
	*/

@media screen and (min-width: 992px) {
	section {
		flex-direction: row;
		width: 100%;
		gap: 1em;
	}

	h3 {
		min-width: 120px;
	}

	section a {
		width: 350px;
	}
}
</style>
