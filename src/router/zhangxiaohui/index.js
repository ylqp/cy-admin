const routes = [
  {
    path: "/zxh",
    name: "zxh",
    redirect: "/zxh/index",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
      {
        path: "index",
        name: "zxh-index",
        component: () => import("@/views/zhangxiaohui/IndexView.vue"),
      },
      {
        path: "test",
        name: "",
        component: () => import("@/views/zhangxiaohui/TestView.vue"),
      },
    ],
  },
]

export default routes
