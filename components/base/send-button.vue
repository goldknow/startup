<template>
	<button></button>
</template>

<script>
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class sendButton extends Vue {


	}

</script>

<style lang="scss" scoped>
	button {
		max-width: 360px;
		width: 100%;
		height: 60px;
		border-radius: 50px;
		background: 50% 50% / 143px url(~assets/imgs/btn_send.png) no-repeat #fffa6f;
		text-align: center;
		font-size: 34px;
		box-shadow: 5px 5px 0 #47362d;
		position: relative;
	}
</style>
