import ajax from 'src/utils/ajax'

export const state = {
    articlesDetail: {}
}

export const getters = {
    getArticlesDetail: state => state.articlesDetail
}

export const mutations = {
    /**
     * 保存文章信息
     * @param {Object} state
     * @param {String} articleId
     * @param {Object} data
     */
    updateArticlesDetail (state, { articleId, data }) {
        state.articlesDetail[articleId] = data
    }
}

export const actions = {
    /**
     * 获取文章列表
     */
    requestArticlesList ({ commit, state, dispatch }) {
        return ajax.get(`${CLIENT_AJAX_URL}/articles/`).then(response => {
            return response
        })
    },
    /**
     * 获取一篇文章详情
     * @param {String} articleId
     */
    requestArticleDetail ({ commit, state, dispatch }, articleId) {
        return ajax.get(`${CLIENT_AJAX_URL}/article/?article_id=${articleId}`).then(response => {
            let {
                data
            } = response

            commit('updateArticlesDetail', {
                articleId,
                data
            })

            return data
        })
    }
}
