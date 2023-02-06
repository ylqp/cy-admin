const routes = [
  {
    path: "/xf",
    name: "xf",
    redirect: "/xf/index",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
      {
        path: "index",
        name: "xf-index",
        component: () => import("@/views/xiongfeng/IndexView.vue"),
      },
      {
        path: "test",
        name: "",
        component: () => import("@/views/xiongfeng/TestView.vue"),
      },
    ],
  },
]

export default routes
