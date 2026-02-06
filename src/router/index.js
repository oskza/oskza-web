import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Courses from '../views/Courses.vue'
import Projects from '../views/Projects.vue'
import Project from '../views/Project.vue'
import { projects } from '../data/projects'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: {
          titleKey: 'homePage.meta.title',
          descriptionKey: 'homePage.meta.description',
          keywordsKey: 'homePage.meta.keywords'
        }
      },
      {
        path: 'contact',
        name: 'contact',
        component: Contact,
        meta: {
          titleKey: 'contactPage.meta.title',
          descriptionKey: 'contactPage.meta.description',
          keywordsKey: 'contactPage.meta.keywords'
        }
      },
      {
        path: 'courses',
        name: 'courses',
        component: Courses,
        meta: {
          titleKey: 'coursesPage.meta.title',
          descriptionKey: 'coursesPage.meta.description',
          keywordsKey: 'coursesPage.meta.keywords'
        }
      },
      {
        path: 'projects',
        name: 'projects',
        component: Projects,
        meta: {
          titleKey: 'projectsPage.meta.title',
          descriptionKey: 'projectsPage.meta.description',
          keywordsKey: 'projectsPage.meta.keywords'
        }
      },
      {
        path: 'projects/:slug',
        name: 'project',
        component: Project,
        meta: {
          titleKey: 'meta.project.title',
          descriptionKey: 'meta.project.description'
        },
        beforeEnter: (to, from, next) => {
          if (projects.some(p => p.slug === to.params.slug)) next()
          else next('/')
        }
      }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
