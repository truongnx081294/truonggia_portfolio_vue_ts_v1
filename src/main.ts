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

app.use(router).mount('#app');
