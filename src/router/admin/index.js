
import AdminLayout from '@/views/admin/layout.vue'
import hospital from './hospital'
const routes = [
  {
    path: "/admin",
    name: "admin",
    redirect: "/admin/index",
    component: AdminLayout,
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
      {
        path: "index",
        name: "admin-index",
        component: () => import("@/views/admin/IndexView.vue"),
      },
      ...hospital
    ],
  },
]

export default routes
