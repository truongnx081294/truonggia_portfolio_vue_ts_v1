import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        layout: 'guest-layout',
        title: 'Truong Gia',
        requiresAuth: false,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/cms/LoginView.vue'),
      meta: {
        layout: 'guest-layout',
        title: 'Đăng nhập',
        requiresAuth: false,
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
            requiresAuth: true,
            title: 'Dashboard',
          },
        },
        {
          path: '/cms/skill',
          name: 'ManageSkill',
          component: () => import('../views/cms/ManageSkill.vue'),
          meta: {
            layout: 'dashboard-layout',
            requiresAuth: true,
            title: 'Quản lý kỹ năng',
          },
        },
        {
          path: '/cms/project',
          name: 'ManageProject',
          component: () => import('../views/cms/ManageProject.vue'),
          meta: {
            layout: 'dashboard-layout',
            requiresAuth: true,
            title: 'Quản lý dự án',
          },
        },
        {
          path: '/cms/user',
          name: 'ManageUser',
          component: () => import('../views/cms/ManageUser.vue'),
          meta: {
            layout: 'dashboard-layout',
            requiresAuth: true,
            title: 'Quản lý thành viên',
          },
        },
        {
          path: '/cms/home',
          name: 'Homer',
          redirect: '/',
        },
      ],
    },
    { path: '/cms/:pathMatch(.*)*', redirect: 'Dashboard' },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    if (to.name === 'Login') {
      const token = localStorage.getItem('userToken');
      if (token) {
        next({ name: 'Dashboard' });
      }
    }
    next();
    return;
  } else {
    // const authStore = useAuthStore();
    const token = localStorage.getItem('userToken');
    // const isLogin = authStore.initialState.isLogin;
    if (!token || token == '') {
      if (to.name !== 'Login') {
        next({ name: 'Login' });
        return;
      }
      next();
      return;
    } else {
      // checkRefreshToken();
      // const levels = to.meta.levels;
      // const discountCodes = to.meta.discountCodes as UserDiscountCode[];
      // const user = authStore.getUserAuth.user as UserState;
      // const discountCode = user?.metadata?.discountCode;
      // if (
      //   discountCodes?.length &&
      //   discountCode &&
      //   !discountCodes.includes(discountCode)
      // ) {
      //   next({ name: "Dashboard" });
      //   return;
      // } else if (levels && user?.level === UserLevels.SPONSOR) {
      //   next({ name: "Dashboard" });
      //   return;
      // }
      next();
      return;
    }
  }
});

router.afterEach((to) => {
  document.title = typeof to.meta.title === 'string' ? to.meta.title : 'Truong Gia';
});

export default router;
