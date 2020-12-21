import vueRouter from 'vue-router'
import User from './components/User'
import UserBalance from './components/UserBalance'
import App from './App'
import UserAuth from './components/UserAuth'
import UserTransaction from './components/UserTransaction'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        
        {
            path: '/',
            name: "root",
            component: App
        },
        {
            path: '/user/:username',
            name: "user",
            component: User
            },
        {
            path: '/user/balance/:username',
            name: "user_balance",
            component: UserBalance
        },
        {
            path: '/user/auth',
            name: "user_auth",
            component: UserAuth
        },
        {
            path: '/user/transaction/:username',
            name: "user_transaction",
            component: UserTransaction
        },
        
            ]
            })
        export default router