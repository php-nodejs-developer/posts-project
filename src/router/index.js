import {createRouter, createWebHistory} from "vue-router";
// все подключаемые компоненты необходимо импортировать
import HomePage from '../views/HomePage.vue'
import PostsPage from '../views/PostsPage.vue'

const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/posts",
        component: PostsPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;