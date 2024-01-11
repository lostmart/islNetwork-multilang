<script setup>
import VideoPlayer from '../components/VideoPlayer.vue'
</script>

<script>
export default {
	data() {
		return {
			title: 'ISL network voces',
			videoURL:
				'https://prolinguas.net/assets/videos/isl-network/ISL-nutshell.mp4',
			cierre: 'https://vimeo.com/750515103'
		}
	},
}
</script>

<template>
	<div class="container">
		<h2 class="text-center">Voices</h2>
		<div class="card">
			<div class="card-body text-center">
				<h5 class="card-title">ISL in a nutshell</h5>
				<div>

					<VideoPlayer class="video_player" :videoURL="videoURL" />
				</div>
				<div>

					<VideoPlayer class="video_player" :videoURL="cierre" />
				</div>
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
