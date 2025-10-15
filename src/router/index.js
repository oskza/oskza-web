import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Project from '../views/Project.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      { path: 'projects',
        name: 'projects',
        component: Projects
      },
      {
        path: "projects/:slug",
        name: "project",
        component: Project,
      }
    ]
  }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
