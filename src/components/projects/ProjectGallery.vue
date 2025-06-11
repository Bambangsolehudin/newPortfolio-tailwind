<script>
export default {
	props: ['projectImages'],
};
</script>

<template>
	<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		<div
			class="mb-10 sm:mb-0"
			v-for="projectImage in projectImages"
			:key="projectImage"
		>
			<img
				:src="projectImage"
				class="rounded-xl cursor-pointer shadow shadow-xl border border-gray-100 sm:shadow-none"
				alt="img"
			/>
		</div>
	</div>
</template>
