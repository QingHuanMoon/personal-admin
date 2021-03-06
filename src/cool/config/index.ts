import dev from "./dev";
import prod from "./prod";

// 是否开发模式
export const isDev = import.meta.env.MODE === "development";

// 配置
export const config = {
	// 项目信息
	app: {
		name: "COOL-ADMIN",

		// 菜单
		menu: {
			list: []
		},

		// 路由
		router: {
			// 模式
			mode: "history",
			// 页面
			pages: [],
			// 视图 / 路由下的 children
			views: []
		},

		// 主题
		theme: {
			// 主色
			color: "",
			// 样式地址
			url: "",
			// 显示一级菜单
			showAMenu: false
		},

		// 字体图标库
		iconfont: []
	},

	// 忽略规则
	ignore: {
		// 不显示请求进度条
		NProgress: ["/sys/info/record"],
		// 页面不需要登录验证
		token: ["/login", "/401", "/403", "/404", "/500", "/502"]
	},

	// 调试
	test: {
		token: "",
		mock: false,
		eps: true
	},

	// 当前环境
	...(isDev ? dev : prod)
};

export * from "./proxy";
