const routes = [
  {
    path: "/cmm",
    name: "cmm",
    redirect: "/cmm/index",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
      {
        path: "index",
        name: "cmm-index",
        component: () => import("@/views/chengmiaomiao/IndexView.vue"),
      },
      {
        path: "test",
        name: "",
        component: () => import("@/views/chengmiaomiao/TestView.vue"),
      },
    ],
  },
]

export default routes
