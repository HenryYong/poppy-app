// tags页
const Tags = () => import(
    /* webpackChunkName: Tags */
    '../../views/tags/index'
)

const routes = [
    {
        path: 'tags',
        name: 'ClientTags',
        component: Tags
    }
]

export default routes
