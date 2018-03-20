// about页
const About = () => import(
    /* webpackChunkName: About */
    '../../views/about/index'
)

const routes = [
    {
        path: 'about',
        name: 'ClientAbout',
        component: About
    }
]

export default routes
