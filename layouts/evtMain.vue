<template>
	<div>
		<evt-header />
		<evt-nav />
		<nuxt />
		<evt-footer />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import EvtHeader from '@/layouts/evtHeader.vue'
import EvtNav from '@/layouts/evtNav.vue'
import EvtFooter from '@/layouts/evtFooter.vue';

@Component({
	components: {EvtHeader, EvtNav, EvtFooter}
})
export default class EvtMain extends Vue {


}

</script>