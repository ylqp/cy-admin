const routes = [
  {
    path: "/lxz",
    name: "lxz",
    redirect: "/lxz/index",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
      {
        path: "index",
        name: "lxz-index",
        component: () => import("@/views/liuxiaozhen/IndexView.vue"),
      },
      {
        path: "test",
        name: "",
        component: () => import("@/views/liuxiaozhen/TestView.vue"),
      },
    ],
  },
]

export default routes
