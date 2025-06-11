<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import projects from '../data/projects';


export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Project Management UI',
				// singleProjectDate: 'Jul 26, 2021',
				url: '',
				singleProjectTag: 'Web Application',
			},
			projectImages: [],
			projectInfo: {
				clientHeading: 'Client',
				companyInfos: '',
				client: '',
				objectivesHeading: 'Objective',
				objectivesDetails:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'HTML',
							'CSS',
							'JavaScript',
							'Vue.js',
							'TailwindCSS',
							'AdobeXD',
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: '',
				socialSharingsHeading: 'Share This',
				socialSharings: [
					{
						id: 1,
						name: 'Twitter',
						icon: 'twitter',
						url: 'https://twitter.com/realstoman',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: 'instagram',
						url: 'https://instagram.com/realstoman',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: 'facebook',
						url: 'https://facebook.com/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: 'linkedin',
						url: 'https://linkedin.com/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: 'youtube',
						url: 'https://www.youtube.com/c/StomanStudio',
					},
				],
			},
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: require('@/assets/images/mobile-project-1.jpg'),
					},
					{
						id: 2,
						title: 'Web Application',
						img: require('@/assets/images/web-project-1.jpg'),
					},
					{
						id: 3,
						title: 'UI Design',
						img: require('@/assets/images/ui-project-2.jpg'),
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: require('@/assets/images/mobile-project-2.jpg'),
					},
				],
			},
		};
	},
	methods: {
		getData() {
			const titleQuery = this.$route.query.title
			const newData = projects.find(e => e.title == titleQuery );

			// header
			this.singleProjectHeader.singleProjectTitle = newData.title
			this.singleProjectHeader.url = newData.url



			this.projectImages = newData.imgArray
			this.projectInfo.companyInfos = newData.company
			this.projectInfo.client = newData.client
			
			this.projectInfo.projectDetails = newData.detail
			this.projectInfo.technologies.techs = newData.tools.split(',')


			
			
		},
	},
	mounted() {
		feather.replace();
		this.getData();
		// alert(this.$route.query.title)
	},
	watch: {
		'projectData'(val) {
			alert(val)
		}
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="[]" />
	</div>
</template>

<style scoped></style>
