// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'EMIS 4.0',
		category: 'Web Application',
		img: require('@/assets/images/portfolio/emis/1.jpg'),
		company: 'JUKE SOLUTIONS',
		url: 'https://emis.kemenag.go.id/',
		detail: `The EMIS program, short for 
				Education Management Information System, is an educational data management 
				system developed by Kementrian Agama (Kemenag). EMIS provides an accurate, valid, 
				and efficient system for managing student data, enabling a comprehensive understanding of 
				each student's condition based on reliable information. This data serves as the foundation 
				for ensuring that assistance programs, such as the Indonesia Smart Program (PIP), are distributed effectively to students in need.`,
		tools: 'React-native, React.js, SQL, Laravel, JIRA, Git, Gitlab',
		client: 'KEMENTRIAN AGAMA',
		imgArray: [
			require('@/assets/images/portfolio/emis/1.jpg'),
			require('@/assets/images/portfolio/emis/2.jpg'),
		]
	},
	{
		id: 2,
		title: 'LSP GETI',
		category: 'Web Application',
		img: require('@/assets/images/portfolio/lsp/lsp.jpg'),
		company: 'ATT GROUP',
		url: 'https://asesi.lsp.geti.id/',
		detail: `This program was developed to support the needs of the Professional Certification Institution (LSP) 
				and is conducted entirely online. Candidates (assessees) are provided with written tests or practical assessments (conducted via Zoom link) 
				and are supervised by certified assessors. The master data for assessors is managed and maintained by the admin user through the system.`,
		tools: 'Vue.JS, Nuxt.js, SQL, Laravel, JIRA, Git, Gitlab',
		client: 'GETI',
		imgArray: [
			require('@/assets/images/portfolio/lsp/lsp.jpg'),
			require('@/assets/images/portfolio/lsp/lsp2.jpg'),
		]

	},
	{
		id: 3,
		title: 'Receiving',
		category: 'Web Application',
		img: require('@/assets/images/portfolio/receiving/receiving.jpg'),		
		company: 'SARIRASA GROUP',
		url: null,
		detail: `This program was developed to support the online assessment process for the Professional Certification Institute (LSP). 
				In this system, candidates (assessees) are presented with written tests 
				or practical assessments conducted via a Zoom link, and are supervised by assessors. 
				The master data of the assessors is created and managed by the admin user.`,
		tools: 'Vue.JS, Mongo DB, Express.JS, JIRA, Git, Gitlab',
		client: 'SARIRASA GROUP',
		imgArray: [
			require('@/assets/images/portfolio/receiving/receiving.jpg'),
			require('@/assets/images/portfolio/receiving/receiving1.jpg'),
		]
	},
	{
		id: 4,
		title: 'DistrApp',
		category: 'Web Application',
		img: require('@/assets/images/portfolio/distribusi/distribusi.jpg'),
		company: 'SARIRASA GROUP',
		url: null,
		detail: `This program was developed to manage the product distribution transactions from the Sarirasa Group warehouse 
				to Sarirasa stores. Products received at the warehouse are distributed based on the specific orders from each store. 
				The transaction process includes picking, generating the SKB (Shipping Order) number, followed by the distribution receipt process, 
				item splitting into containers, and finally, the creation of a SKB transit document as proof of delivery to the store location.`,
		tools: 'Vue.JS, Mongo DB, Express.JS, JIRA, Git, Gitlab',
		client: 'SARIRASA GROUP',
		imgArray: [
			require('@/assets/images/portfolio/distribusi/distribusi.jpg'),
		]
	},
	{
		id: 5,
		title: 'WEB BOH',
		category: 'Web Application',
		img: require('@/assets/images/portfolio/weboh/weboh.jpg'),
		company: 'SARIRASA GROUP',
		url: null,
		detail: `This program was developed to manage product and sub-product data displayed in the POS 
				menu for the available brands under the Sarirasa Group. 
				It handles various aspects such as product visibility, promotions, pricing, and other related configurations.`,
		tools: 'Vue.JS, Mongo DB, Express.JS, JIRA, Git, Gitlab',
		client: 'SARIRASA GROUP',
		imgArray: [
			require('@/assets/images/portfolio/weboh/weboh.jpg'),
			require('@/assets/images/portfolio/weboh/weboh2.jpg'),
		]
	},
	{
		id: 6,
		title: 'Lost Items Apps',
		category: 'Web Application',
		img: require('@/assets/images/portfolio/lost_items/lostItem.jpg'),
		company: 'Freelance',
		url: null,
		detail: `This program was developed to manage product and sub-product data displayed in the POS 
				menu for the available brands under the Sarirasa Group. 
				It handles various aspects such as product visibility, promotions, pricing, and other related configurations.`,
		tools: 'Laravel 6, Bootsrap, git, github',
		client: 'Freelance',
		imgArray: [
			require('@/assets/images/portfolio/lost_items/lostItem.jpg'),
			require('@/assets/images/portfolio/lost_items/lostItem1.jpg'),
			require('@/assets/images/portfolio/lost_items/2.jpg'),
		]
	},
];

export default projects;
