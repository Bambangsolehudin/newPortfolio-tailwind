<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						`
						Software Developer with a strong focus on frontend development, experienced in building responsive and high-performance web and mobile applications using Vue.js, Nuxt.js, React.js, and React Native. Proficient in developing scalable user interfaces and integrating RESTful APIs. Possesses basic backend knowledge with Express.js, Laravel, and SQL. Committed to continuous learning and creating user-focused digital solutions.
						`,
				},
				// {
				// 	id: 2,
				// 	bio:
				// 		'Possesses basic backend knowledge with Express.js, Laravel, and SQL. Committed to continuous learning and creating user-focused digital solutions.',
				// },
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0 shadow-xl">
			<img
				src="@/assets/images/profile-2.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left flex items-center">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
