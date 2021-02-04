<template>
	<section>
		<img src="~/assets/imgs/evt1.jpg" alt="">
		<slot />
	</section>
</template>


<script>
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class evtSection extends Vue {


	}

</script>

<style lang="scss" scoped>
	section {
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
	}
</style>