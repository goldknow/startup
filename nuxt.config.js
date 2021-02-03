import colors from 'vuetify/es5/util/colors'

export default {
	/**
	 * 서버 렌더링여부
	 */
	ssr: false,

	/**
	 * ENV 파일 이름
	 */
	dotenv: '.env',

	/**
	 * HTML 속성 정의
	 */
	head: {
		titleTemplate: process.env.APP_NAME,

		/**
		 * HTML 타이틀
		 */
		title: process.env.APP_NAME,

		/**
		 * HTML 로케일
		 */
		htmlAttrs: {
			lang: 'kr'
		},

		/**
		 * HTML 메타태그 정의
		 */
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.APP_DESCRIPTION }
		],

		/**
		 * Static Asset 로드
		 */
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: process.env.APP_FAVICON }
		]
	},

	/**
	 * 글로벌 CSS & SCSS 로드
	 */
	css: [],

	/**
	 * 글로벌 플로그인 로드
	 */
	plugins: [],

	components: true,

	/**
	 * webpack 빌드 모듈
	 */
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/vuetify'
	],

	/**
	 * 글로벌 모듈 로드
	 */
	modules: [
		'@nuxtjs/axios'
	],

	/**
	 * 통신 설정
	 */
	axios: {},

	/**
	 * 뷰티파이 플러그인 정의
	 */
	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		theme: {
			dark: false,
			themes: {
				dark: {
					primary: colors.blue.darken2,
					accent: colors.grey.darken3,
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3
				}
			}
		}
	},

	build: {}
}
