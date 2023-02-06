const routes = [
  {
    path: "/nxf",
    name: "nxf",
    redirect: "/nxf/index",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
      {
        path: "index",
        name: "nxf-index",
        component: () => import("@/views/niuxiaofang/IndexView.vue"),
      },
      {
        path: "test",
        name: "",
        component: () => import("@/views/niuxiaofang/TestView.vue"),
      },
      {
        path: "dq",
        name: "",
        component: () => import("@/views/niuxiaofang/DqView.vue"),
      },
      {
        path: "node",
        name: "",
        component: () => import("@/views/niuxiaofang/NodeView.vue"),
      },
      {
        path: "pinia",
        name: "pinia",
        component: () => import("@/views/niuxiaofang/piniaView.vue"),
      },
    ],
  },
]

export default routes
