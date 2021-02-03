<template>
	<div>
		<error400 v-if="error.statusCode === 404" />
		<error500 v-if="error.statusCode === 500" />
	</div>
</template>

<script lang="ts">
import Error400 from '~/components/error/error404.vue';
import Error500 from '~/components/error/error500.vue';

export default {
	components: {
		Error400,
		Error500,
	},
	props: ["error"],
	layout: "error",
};
</script>
