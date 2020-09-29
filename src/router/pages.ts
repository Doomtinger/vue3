const pages = {
	path: "/page",
	name: "Pages",
	component: () => import("../pages/index.vue"),
	redirect: "noRedirect",
	children: [
    //    {
	// 		path: "index",
	// 		name: "Index",
	// 		component: () => import("../App.vue"),
	// 	},
	],
};

export default pages;
