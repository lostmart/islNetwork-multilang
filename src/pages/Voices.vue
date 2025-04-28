<script setup>
import VideoPlayer from '../components/VideoPlayer.vue'
</script>

<script>
export default {
	data() {
		return {
			title: 'ISL network voces',
			vimeos_ids: [
				{
					id: "750515103", title: "Title 01"
				},
				{
					id: "750506521", title: "Title 02"
				},
				{
					id: "901933889", title: "Cierre del año"
				},
				{
					id: "1079419875", title: "Reunión abril 2025"
				}
			],
			height: "auto",
			width: "370",
			options: {
				muted: true,
				autoplay: true,
			},
			playerReady: false
		}
	},
	methods: {
		onReady() {
			this.playerReady = true
		},
		play() {
			this.$refs.player.play()
		},
		pause() {
			this.$refs.player.pause()
		}
	}
}
</script>

<template>
	<div class="container">
		<h2 class="text-center">Voces</h2>
		<div class="card">
			<div v-for="id in vimeos_ids" :key="id.id" class="card-body text-center">
				<vimeo-player ref="player" :video-id="id.id" :player-width="width" class="video_player"
					@ready="onReady" />
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
	max-height: 280px;
	max-width: 100%;
}
</style>
