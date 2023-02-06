const routes = [
  {
    path: "/dyx",
    name: "dyx",
    redirect: "/dyx/index",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [
      {
        path: "index",
        name: "",
        component: () => import("@/views/dongyunxiao/IndexView.vue"),
      },
      {
        path: "test",
        name: "",
        component: () => import("@/views/dongyunxiao/TestView.vue"),
      },
    ],
  },
]

export default routes
