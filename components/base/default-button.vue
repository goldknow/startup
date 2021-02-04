<template>
	<a href="#none">
		<slot />
	</a>
</template>

<script>
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class button extends Vue {


	}

</script>

<style lang="scss" scoped>
	a {
		display: inline-flex;
		align-items: center;
		height: 48px;
		padding: 0 30px;
		font-size: 16px;
		text-align: left;
		border-radius: 24px;
		border: 1px solid #000;
		position: relative;
		transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

		&.on,
		&:hover {
			background-color: #000;
			color: #fff;
		}
	}

</style>
