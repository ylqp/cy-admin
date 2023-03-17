const routes = [
  {
    path: "hospital",
    name: "hospital",
    redirect: "hospital/index",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
      {
        path: "index",
        name: "hospital-index",
        component: () => import("@/views/admin/hospital/IndexView.vue"),
      },
      {
        path: "add",
        name: "hospital-add",
        component: () => import("@/views/admin/hospital/AddView.vue"),
      },
    ],
  },
]

export default routes
