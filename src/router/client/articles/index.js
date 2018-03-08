// 文章列表页
const ArticlesList = () => import(
    /* webpackChunkName: ArticlesList */
    '../../../views/client/articles/index'
)

// 文章详情页
const ArticleDetail = () => import(
    /* webpackChunkName: ArticleDetail */
    '../../../views/client/articles/detail'
)

const routes = [
    {
        path: 'articles',
        name: 'ArticlesList',
        component: ArticlesList
    },
    {
        path: 'articles/:articleId',
        name: 'ArticleDetail',
        component: ArticleDetail
    }
]

export default routes
