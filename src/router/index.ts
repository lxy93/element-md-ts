import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: "/tab",
      name: "tab",
      component: () => import("../views/home/index.vue"),
      children:[
        {
          path: "/home",
          name: "home",
          component: () => import("../views/home/home.vue"),
        },
        {
          path: "/order",
          name: "order",
          component: () => import("../views/home/order.vue"),
        },
        {
          path: "/self",
          name: "self",
          component: () => import("../views/home/self.vue"),
        }
      ]
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
