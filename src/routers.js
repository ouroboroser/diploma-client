import { Docs, Home, SignIn, SignUp, Dashboard, CreateApiKey, ListOfApiKeys, Diagram } from './pages';

export const routers = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/docs',
        exact: false,
        component: Docs,
    },
    {
        path: '/signin',
        exact: false,
        component: SignIn,
    },
    {
        path: '/signup',
        exact: false,
        component: SignUp,
    },
    {
        path: '/dashboard',
        exact: false,
        component: Dashboard,
    },
    {
        path: '/create-api-key',
        exact: false,
        component: CreateApiKey,
    },
    {
        path: '/api-keys',
        exact: false,
        component: ListOfApiKeys,
    },
    {
        path: '/diagram',
        exact: false,
        component: Diagram,
    },
];