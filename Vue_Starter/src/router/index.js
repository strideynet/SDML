import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import PurchaseOrders from '@/views/PurchaseOrders'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'po',
          name: 'Purchase Orders',
          redirect: '/po/search',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'search',
              name: 'Search',
              component: PurchaseOrders
            },
            {
              path: 'create',
              name: 'Create'
            }
          ]
        },
        {
          path: 'sinvoice',
          name: 'Supplier Invoices',
          redirect: '/sinvoice/search',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'search',
              name: 'Search'
            },
            {
              path: 'create',
              name: 'Create'
            }
          ]
        }
      ]
    }
  ]
})
