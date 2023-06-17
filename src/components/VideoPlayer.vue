<template>
	<video controls>
		<source :src="videoURL" type="video/mp4" />
		Your browser does not support HTML video.
	</video>
</template>
<script>
	export default {
		name: 'VideoPlayer',
		props: ['videoURL'],
	}
</script>
