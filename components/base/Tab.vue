<template>
	<!-- 루트 엘리먼트 -->
	<div>
		<ul class="tabs">
			<li class="on"></li>
			<li></li>
		</ul>
		<div class="tab"></div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class Tab extends Vue {


	}

</script>

<style scope lang="scss">
	.tabs {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 1024px;
		height: 60px;
		margin: auto;
		position: relative;
		cursor: pointer;

		li {
			width: 50%;
			height: 100%;
			background: 0 0 no-repeat;
			background-image: url(~assets/imgs/tab.png);

			&:nth-child(1) {
				background-position: 0 0;

				&.on {
					background-position: 0 -60px;
				}
			}

			&:nth-child(2) {
				background-position: 0 -120px;
				
				&.on {
					background-position: 0 -180px;
				}
			}
		}
	}

</style>
