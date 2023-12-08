import {createRouter, createWebHistory} from 'vue-router'
import App from "@/App.vue";
import 'bootstrap/dist/js/bootstrap'
import Gallery from "@/components/Gallery.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";

import './assets/main.css'

import {createApp} from 'vue'
import News from "@/components/News.vue";
import Home from "@/components/Home.vue";

// Routes array example {path: '/', component: ComponentName}
const routes = [
    {path: '/', component: Home},
    {path: '/news', component: News},
    {path: '/gallery', component: Gallery},
    {path: '/about', component: About},
    {path: '/contact', component: Contact},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
const app = createApp(App)
app.use(router).mount('#app')