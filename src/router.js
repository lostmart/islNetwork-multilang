import { createRouter, createWebHistory } from "vue-router"

/* pages  */
import Home from "./pages/Home.vue"
/* lazy loaded  */
const About = () => import("./pages/About.vue")
const Faq = () => import("./pages/Faq.vue")
const Materials = () => import("./pages/Materials.vue")
const Team = () => import("./pages/Team.vue")
const Voices = () => import("./pages/Voices.vue")
const VoicesEn = () => import("./pages/Voices-en.vue")
const NotFound = () => import("./pages/NotFound.vue")
const Blog = () => import("./pages/Blog.vue")
const BlogSingle = () => import("./pages/BlogSingle.vue")

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},
		{
			path: "/about",
			name: "About",
			component: About,
		},
		{
			path: "/faq",
			name: "Faq",
			component: Faq,
		},
		{
			path: "/materials",
			name: "Materials",
			component: Materials,
		},
		{
			path: "/team",
			name: "Team",
			component: Team,
		},
		{
			path: "/voices",
			name: "Voices",
			component: Voices,
		},
		{
			path: "/voices-en",
			name: "Voices-en",
			component: VoicesEn,
		},
		{
			path: "/blog",
			name: "blog",
			component: Blog,
		},
		{
			path: "/blog/:id",
			name: "blogSingle",
			component: BlogSingle,
		},
		{
			path: "/:catchAll(.*)",
			name: "NotFound",
			component: NotFound,
		},
	],
})

export default router
