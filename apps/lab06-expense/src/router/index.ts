import { createRouter, createWebHistory } from '@ionic/vue-router'
import TabsPage from '@/views/TabsPage.vue'
import Tab1 from '@/views/Tab1Page.vue'
import AddExpense from '@/views/AddExpense.vue'
import List from '@/views/List.vue'
import EditExpense from '@/views/EditExpense.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        component: Tab1
      },
      {
        path: 'add',
        component: AddExpense
      },
      {
        path: '/tabs/list',
        component: () => import('@/views/List.vue')
      },
      {
        path: '/tabs/edit/:id',
        component: () => import('@/views/EditExpense.vue')
      }
          ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router