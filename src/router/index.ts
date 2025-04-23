import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
      meta: {
        layout: 'guest-layout',
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/cms/Login.vue'),
      meta: {
        layout: 'guest-layout',
      },
    },
    {
      path: '/cms',
      redirect: '/cms/dashboard',
      children: [
        {
          path: '/cms/dashboard',
          name: 'Dashboard',
          component: () => import('../views/cms/Dashboard.vue'),
          meta: {
            layout: 'dashboard-layout',
          },
        },
        {
          path: '/cms/skill',
          name: 'ManageSkill',
          component: () => import('../views/cms/ManageSkill.vue'),
          meta: {
            layout: 'dashboard-layout',
          },
        },
        {
          path: '/cms/project',
          name: 'ManageProject',
          component: () => import('../views/cms/ManageProject.vue'),
          meta: {
            layout: 'dashboard-layout',
          },
        },
        {
          path: '/cms/user',
          name: 'ManageUser',
          component: () => import('../views/cms/ManageUser.vue'),
          meta: {
            layout: 'dashboard-layout',
          },
        },
        {
          path: '/cms/home',
          name: 'Homer',
          redirect: '/',
        },
      ],
    },
    { path: '/cms/:pathMatch(.*)*', redirect: '/cms/dashboard' },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    console.log(from);
    next();
    return;
  } else {
    next();
  }
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
