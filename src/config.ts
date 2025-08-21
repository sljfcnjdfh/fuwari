import type {
    ExpressiveCodeConfig,
	ImageFallbackConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
	UmamiConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Lishuai Blog",
	description:
		"分享网络技术、服务器部署、软件秒破解、容器化部署、薅羊毛、大厂活动等技术教程与实践经验，供大家参考提升自身履历丰富度，吾心澎湃！这里是具有创造性又符合伦理的个人技术博客，专注于云原生、无服务器架构、Python，作者为李帅站长",

	keywords: [],
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 361, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
		forceDarkMode: true, // Force dark mode and hide theme switcher
	},
	banner: {
		enable: false,
		src: "/xinghui.avif", // Relative to the /src directory. Relative to the /public directory if it starts with '/'

		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Pixiv @chokei", // Credit text to be displayed

			url: "https://www.pixiv.net/artworks/122782209", // (Optional) URL link to the original artwork or artist's page
		},
	},
	background: {
		enable: true, // Enable background image
		src: "https://eo-picsv.jianyuan.eu.org/h", // Background image URL (supports HTTPS)
		position: "center", // Background position: 'top', 'center', 'bottom'
		size: "cover", // Background size: 'cover', 'contain', 'auto'
		repeat: "no-repeat", // Background repeat: 'no-repeat', 'repeat', 'repeat-x', 'repeat-y'
		attachment: "fixed", // Background attachment: 'fixed', 'scroll', 'local'
		opacity: 0.5, // Background opacity (0-1)
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "https://q2.qlogo.cn/headimg_dl?dst_uin=1160299306&spec=0", // Path of the favicon, relative to the /public directory
			//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "个人主页",
			url: "https://taiyanglee.eu.org/", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
		{
			name: "短信轰炸",
			url: "https://taiyanglee.eu.org/pct/zpzs/zpzs/20/index.html", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
		{
			name: "数据统计",
			url: "https://umami.jianyuan.eu.org/share/f66BeyREQYYAVM5b/fx.jianyuan.eu.org", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
		{
			name: "服务监控",
			url: "http://120.46.159.200:3001/status/online", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "https://q2.qlogo.cn/headimg_dl?dst_uin=1160299306&spec=0", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "李帅站长",
	bio: "下面↓有两个github按钮，猜猜两个都是啥。咩做右边那个就是邮箱",
	links: [
		{
			name: "Bilibli",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/1857798048",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/sljfcnjdfh",
		},
		{
			name: "Email",
			icon: "fa6-brands:github",
			url: "mailto:nathanlee2013@icloud.com",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const imageFallbackConfig: ImageFallbackConfig = {
	enable: true,
	originalDomain: "eo-picsv.jianyuan.eu.org",
	fallbackDomain: "9d58109d7ffef47d28bbef6e57a1415d.r2.cloudflarestorage.com",
};

export const umamiConfig: UmamiConfig = {
	enable: true,
	baseUrl: "https://umami.jianyuan.eu.org",
	shareId: "f66BeyREQYYAVM5b",
	timezone: "Asia/Shanghai",
	
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
