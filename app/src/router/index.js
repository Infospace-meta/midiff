import { createRouter, createWebHistory } from "vue-router";

/**Import components here */
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CoursesView from "../views/CoursesView.vue";
import CoursesPageView from "../views/CoursesPageView.vue";
import DeptView from "../views/DeptView.vue";
import NewsView from "../views/NewsView.vue";
import ApplicationView from "../views/Application/Application.vue"
import EntryRequirementsView from "../views/Application/Requirements.vue";
import StudentView from "../views/Info/StudentView.vue";

/**Define routes here */
const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "home", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
  { path: "/courses", name: "courses", component: CoursesView },
  { path: "/courses_page", name: "courses_page", component: CoursesPageView },
  { path: "/departments", name: "departments", component: DeptView },
  { path: "/application", name: "application", component: ApplicationView },
  { path: "/entry_requirements", name: "entry_requirements", component: EntryRequirementsView },
  { path: "/news", name: "news", component: NewsView },
  { path: "/student_life", name: "student_life", component: StudentView },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
