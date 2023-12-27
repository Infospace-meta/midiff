import { createRouter, createWebHistory } from "vue-router";

/**Define routes here */
import HomeView from "../views/HomeView.vue";
import PostsView from "../views/PostsView.vue";
import DetailsView from "../views/DetailsView.vue";
import JobsComponent from "../components/JobsComponent.vue";
import JobDetailsComponent from "../components/JobDetails.vue";

const routes = [
  { path: "/", name: "posts", component: PostsView },
  { path: "/home", name: "home", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
  { path: "/jobs", name: "jobs", component: JobsComponent },
  { path: "/posts/:id", name: "details", component: DetailsView,props: true },
  { path: "/jobs/:id", name: "job_details", component: JobDetailsComponent },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
