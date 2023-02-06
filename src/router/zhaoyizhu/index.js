const routes = [
  {
    path: "/zyz",
    name: "zyz",
    redirect: "/zyz/index",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
      {
        path: "index",
        name: "zyz-index",
        component: () => import("@/views/zhaoyizhu/IndexView.vue"),
      },
      {
        path: "test",
        name: "",
        component: () => import("@/views/zhaoyizhu/TestView.vue"),
      },
    ],
  },
]

export default routes
