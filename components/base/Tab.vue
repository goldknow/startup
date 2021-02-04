<template>
	<!-- 루트 엘리먼트 -->
	<div>
		<ul class="tab">
			<li class="on">1</li>
			<li>2</li>
		</ul>
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
	.tab {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 1024px;
		height: 60px;
		background: 0 0 / contain;
		position: relative;

		li {
			width: 50%;
			height: 100%;
			border: 1px solid;

			&:nth-child(1).on {
				background-image: url(~assets/imgs/tab1.png);
			}
			&:nth-child(2).on {
				background-image: url(~assets/imgs/tab2.png);
			}
		}
	}

</style>
