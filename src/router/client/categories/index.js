// 文章分类页
const Categories = () => import(
    /* webpackChunkName: Categories */
    '../../../views/client/categories/index'
)

const routes = [
    {
        path: 'categories',
        name: 'Categories',
        component: Categories
    }
]

export default routes
