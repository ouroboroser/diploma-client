import { 
    Docs, 
    Home, 
    SignIn, 
    SignUp, 
    Dashboard, 
    CreateApiKey, 
    ListOfApiKeys,
    Diagram,
    DiagramsHistory,
    About,
    Logout
} from './pages';

export const routers = [
    {
        path: '/',
        exact: true,
        component: Home,
        auth: false,
    },
    {
        path: '/docs',
        exact: false,
        component: Docs,
        auth: false,
    },
    {
        path: '/about',
        exact: false,
        component: About,
        auth: false,
    },
    {
        path: '/signin',
        exact: false,
        component: SignIn,
        auth: false,
    },
    {
        path: '/signup',
        exact: false,
        component: SignUp,
        auth: false,
    },
    {
        path: '/dashboard',
        exact: false,
        component: Dashboard,
        auth: true,
    },
    {
        path: '/create-api-key',
        exact: false,
        component: CreateApiKey,
        auth: true,
    },
    {
        path: '/api-keys',
        exact: false,
        component: ListOfApiKeys,
        auth: true,
    },
    {
        path: '/diagram',
        exact: false,
        component: Diagram,
        auth: true,
    },
    {
        path: '/history',
        exact: false,
        component: DiagramsHistory,
        auth: true,
    },
    {
        path: '/logout',
        exact: false,
        component: Logout,
        auth: true,
    },
];