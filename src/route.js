import async from './components/Async.js';

const Login = async(() => import("./pages/auth/Login.js"));
const Page404 = async(() => import("./pages/auth/Page404.js"));

const Homepage = async(() => import("./pages/homepage/Home.js"));

const LoginRouter = {
    id: "Login",
    path: '/login',
    component: Login,
    title: "Đăng nhập"
}

const Page404Router = {
    id: "Page404",
    path: "/page404",
    component: Page404,
    title: "Không tìm thấy trang"
}

const HomeRouter = {
    id: "Home",
    path: '/',
    component: Homepage,
    title: "Trang chủ"
}

export const PageRouter = [
    LoginRouter,
    Page404Router,
    HomeRouter,
]