// Components
import Layout from './components/layout/Layout';
import Login from './components/login/Login';
// import MenuUsers from './components/menu/MenuUsers';
import Menu from './components/menu/Menu';

export default [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'Menu',
                component: Menu
            }
            // {
            //     path: '/usuarios',
            //     name: 'usuarios',
            //     component: MenuUsers
            // }
        ]
    },

    {
        path: '/login',
        name: 'login',
        component: Login
    }
];
