<template>
	<!-- <div id="event-wrap">
		<v-card>
			<v-tabs v-model="tab" class="tabs">
				<v-tab v-for="item in items" :key="item.tab" active-class="on" class="tab">
					{{ item.tab }}
				</v-tab>
			</v-tabs>

			<v-tabs-items v-model="tab">
				<v-tab-item transition="false">
					<event-1-content></event-1-content>
				</v-tab-item>
				<v-tab-item transition="false">
					<event-2-content></event-2-content>
				</v-tab-item>
			</v-tabs-items>
		</v-card> 
	</div> -->
	<div id="event-wrap">
		<key-visual bgColor="type1">한우 먹고! 한우 인증 GO~</key-visual>
	</div>
</template>


<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class EvtWrap extends Vue {

		tab: any = 0;

		items: any[] = [
			{
				tab: '',
				active: false
			},
			{
				tab: '',
				active: false
			}
		]

		/*items: any[] = [
			{
				tab: 1,
				content: require('@/assets/imgs/evt1.jpg')

			},
			{
				tab: 2,
				content: require('@/assets/imgs/evt2.jpg')

			}
		]*/
	}

</script>

<style scope lang="scss">
	#event-wrap {
		width: 1024px;
		margin: 0 auto;
	}

	.v-tabs-bar {
		height: 100%;
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
