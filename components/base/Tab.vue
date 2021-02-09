<!--
<template>
	<div>
		<ul class="tabs">
			<li class="on"></li>
			<li></li>
		</ul>
		<div class="tab"></div>
	</div>
</template>
-->

<template>
	<div id="event-wrap">
		<v-card>
			<v-tabs v-model="tab" class="tabs">
				<v-tab v-for="item in items" :key="item.tab" active-class="on" class="tab">
					{{ item.tab }}
				</v-tab>
			</v-tabs>

			<v-tabs-items v-model="tab">
				<v-tab-item v-for="item in items" :key="item.tab" transition="false">
					<img :src="item.content" alt="">
					<slot />
				</v-tab-item>
			</v-tabs-items>
		</v-card>
	</div>

</template>


<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		data() {
			return {
				tab: null,
				items: [{
						tab: '1',
						content: '/_nuxt/assets/imgs/evt2.png'
					},
					{
						tab: '2',
						content: '/_nuxt/assets/imgs/evt2.png'
					}
				],
			}
		},
	})

	export default class Tab extends Vue {

	}

</script>

<style scope lang="scss" scoped>
	#event-wrap {
		width: 1024px;
		margin: 0 auto;
	}

	.v-tabs-bar {
		height: 100% !important;
	}

	.tabs {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 60px;
		position: relative;
		cursor: pointer;

		.tab {
			max-width: 100%;
			width: 512px;
			height: 100%;
			background: 0 0 no-repeat;
			background-image: url(~assets/imgs/tab.png);

			&:nth-child(2) {
				background-position: 0 0;

				&.on {
					background-position: 0 -60px;
				}
			}

			&:nth-child(3) {
				background-position: 0 -120px;

				&.on {
					background-position: 0 -180px;
				}
			}
		}
	}

</style>
