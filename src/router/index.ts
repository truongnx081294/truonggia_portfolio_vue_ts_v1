import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/cms/Login.vue"),
    },
    {
      path: "/cms",
      name: "Dashboard",
      component: () => import("../views/cms/Dashboard.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  //   if (!to.meta.requiresAuth) {
      next();
  //     return;
  //   } else {
  //     const authStore = useAuthStore();
  //     const isLogin = authStore.initialState.isLogin;
  //     if (!isLogin || !getToken() || getToken() == "") {
  //       if (to.name !== "Login") {
  //         next({ name: "Login" });
  //         return;
  //       }
  //       next();
  //       return;
  //     } else {
  //       checkRefreshToken();
  //       const levels = to.meta.levels;
  //       const discountCodes = to.meta.discountCodes as UserDiscountCode[];
  //       const user = authStore.getUserAuth.user as UserState;
  //       const discountCode = user?.metadata?.discountCode;
  //       if (
  //         discountCodes?.length &&
  //         discountCode &&
  //         !discountCodes.includes(discountCode)
  //       ) {
  //         next({ name: "Dashboard" });
  //         return;
  //       } else if (levels && user?.level === UserLevels.SPONSOR) {
  //         next({ name: "Dashboard" });
  //         return;
  //       }
  //       next();
  //       return;
  //     }
  //   }
});

export default router;
