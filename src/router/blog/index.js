const ArticlesWrapper = () => import(
    /* webpackChunkName: ArticlesWrapper */
    '../../views/blog/index'
)

// 文章列表页
const ArticlesList = () => import(
    /* webpackChunkName: ArticlesList */
    '../../views/blog/list'
)

// 文章详情页
const ArticleDetail = () => import(
    /* webpackChunkName: ArticleDetail */
    '../../views/blog/detail'
)

const routes = [
    {
        path: '/blog',
        name: 'ArticlesList',
        component: ArticlesList
    },
    {
        path: '/blog/:articleId',
        name: 'ArticleDetail',
        component: ArticleDetail,
        meta: {
            name: 'ArticlesList'
        }
    }
]

export default routes
