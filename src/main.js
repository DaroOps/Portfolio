import { createApp } from 'vue'
import './assets/styles/main.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router.js'
import { createI18n } from 'vue-i18n'

import messages from './config/118n.config.js'

const app = createApp(App);

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'es',
    messages
    }
);

const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(i18n);

app.mount('#app');
