import { createApp, defineAsyncComponent } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.component(
  'dashboard-layout',
  defineAsyncComponent(() => import('./layout/DashboardLayout.vue')),
);

app.component(
  'guest-layout',
  defineAsyncComponent(() => import('./layout/GuestLayout.vue')),
);

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.add(savedTheme);
  } else {
    // fallback: tự động theo hệ điều hành
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (!prefersDark) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }
}

initTheme();

app.use(router).mount('#app');
