const routes = [
  {
    path: "/zjb",
    name: "zjb",
    redirect: "/zjb/index",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
      {
        path: "index",
        name: "zjb-index",
        component: () => import("@/views/zhangjinbao/IndexView.vue"),
      },
      {
        path: "test",
        name: "",
        component: () => import("@/views/zhangjinbao/TestView.vue"),
      },
    ],
  },
]

export default routes
