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
        component: Home
      },
      {
        path: 'contact',
        name: 'contact',
        component: Contact,
        meta: {
          breadcrumbs: [
            { labelKey: 'home', to: '/' },
            { labelKey: 'contactPage.pageTitle' }
          ]
        }
      },
      {
        path: 'courses',
        name: 'courses',
        component: Courses,
        meta: {
          breadcrumbs: [
            { label: 'home', to: '/' },
            { labelKey: 'coursesPage.pageTitle' }
          ]
        }
      },
      {
        path: 'projects',
        name: 'projects',
        component: Projects,
        meta: {
          breadcrumbs: [
            { labelKey: 'home', to: '/' },
            { labelKey: 'projectsPage.pageTitle' }
          ]
        }
      },
      {
        path: 'projects/:slug',
        name: 'project',
        component: Project,
        meta: {
          breadcrumbs: [
            { labelKey: 'home', to: '/' },
            { labelKey: 'projectsPage.pageTitle', to: '/projects' }
          ]
        },
        beforeEnter: (to, from, next) => {
          if (projects.some(p => p.slug === to.params.slug))
            next()
          else
            next('/')
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
