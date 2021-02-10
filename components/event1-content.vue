<template>
	<div class="evt1-cont">
		<img src="~assets/imgs/evt1.jpg" alt="">
		<img src="~assets/imgs/evt1_bot.jpg" alt="">
		<send-button></send-button>
	</div>
</template>

<script>
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({

	})
	export default class event1Content extends Vue {

	}

</script>

<style lang="scss">
.evt1-cont {
	position: relative;

	button {
		position: absolute;
		bottom: 50px;
		left: 350px;
	}
}
</style>
