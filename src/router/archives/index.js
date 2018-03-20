// 文章归档页
const Archives = () => import(
    /* webpackChunkName: Archives */
    '../../views/archives/index'
)

const routes = [
    {
        path: 'archives',
        name: 'ClientArchives',
        component: Archives
    }
]

export default routes
