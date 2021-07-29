import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () =>
    import ('../views/home/Home')
const Category = () =>
    import ('../views/category/Category')
const Profile = () =>
    import ('../views/profile/Profile')
const Select = () =>
    import ('../views/select/Select')

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/select',
        component: Select
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
})


const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
}

export default router

// import { createRouter, createWebHistory } from 'vue-router'

// const Home = () =>
//     import ('../views/home/Home.vue')
// const Category = () =>
//     import ('../views/category/Category.vue')
// const Profile = () =>
//     import ('../views/profile/Profile.vue')
// const Select = () =>
//     import ('../views/select/Select.vue')

// const routes = [{
//         path: '/',
//         redirect: './home'
//     },
//     {
//         path: './home',
//         component: Home
//     },
//     {
//         path: './category',
//         component: Category
//     },
//     {
//         path: './profile',
//         component: Profile
//     },
//     {
//         path: './select',
//         component: Select
//     }
// ]

// const routerHistory = createWebHistory()
// const router = createRouter({
//     history: routerHistory,
//     routes
// })
// export default router