<script setup>
	import VideoPlayer from '../components/VideoPlayer.vue'
</script>

<script>
	export default {
		data() {
			return {
				title: 'ISL network voces',
				videoURL_one:
					'https://prolinguas.net/assets/videos/isl-network/video-2.mp4',
				videoURL_two:
					'https://prolinguas.net/assets/videos/isl-network/video-01.mp4',
				videoURL_three:
					'https://prolinguas.net/assets/videos/isl-network/video-3.mp4',
				videoURL_four:
					'https://prolinguas.net/assets/videos/isl-network/video-4.mp4',
			}
		},
	}
</script>

<template>
	<div class="container">
		<h2 class="text-center">Voces</h2>
		<div class="card">
			<div class="card-body text-center">
				<h5 class="card-title">Title 01</h5>
				<VideoPlayer class="video_player" :videoURL="videoURL_one" />
			</div>
		</div>
		<div class="card">
			<div class="card-body text-center">
				<h5 class="card-title">Title 02</h5>
				<VideoPlayer class="video_player" :videoURL="videoURL_two" />
			</div>
		</div>
		<div class="card">
			<div class="card-body text-center">
				<h5 class="card-title">Title 03</h5>
				<VideoPlayer class="video_player" :videoURL="videoURL_three" />
			</div>
		</div>
		<div class="card">
			<div class="card-body text-center">
				<h5 class="card-title">Title 04</h5>
				<VideoPlayer class="video_player" :videoURL="videoURL_four" />
			</div>
		</div>
	</div>
</template>
<style scoped>
	.card {
		max-width: 650px;
		margin: auto;
	}
	.video_player {
		max-height: 220px;
		max-width: 100%;
	}
</style>
