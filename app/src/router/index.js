import { createRouter, createWebHistory } from "vue-router";

/**Define routes here */
import HomeView from "../views/HomeView.vue";
import PostsView from "../views/PostsView.vue";
import DetailsView from "../views/DetailsView.vue";
import JobsComponent from "../components/JobsComponent.vue";
import JobDetailsComponent from "../components/JobDetails.vue";
import AboutView from "../views/AboutView.vue";
import CoursesView from "../views/CoursesView.vue";
import DeptView from "../views/DeptView.vue";
import NewsView from "../views/NewsView.vue";

const routes = [
  { path: "/", name: "posts", component: PostsView },
  { path: "/home", name: "home", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
  { path: "/courses", name: "courses", component: CoursesView },
  { path: "/departments", name: "departments", component: DeptView },
  { path: "/news", name: "news", component: NewsView },
  { path: "/jobs", name: "jobs", component: JobsComponent },
  { path: "/posts/:id", name: "details", component: DetailsView, props: true },
  { path: "/jobs/:id", name: "job_details", component: JobDetailsComponent },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
