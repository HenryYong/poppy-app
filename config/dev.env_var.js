/**
 * dev env
 * @author Henry Yang
 */

export default {
    'process.env': {
        'NODE_ENV': JSON.stringify('dev')
    },
    NODE_ENV: JSON.stringify('dev'),
    COMMON_AJAX_URL: JSON.stringify('http://dev.sephenry.cn:8000/api'),
    AJAX_URL: JSON.stringify('http://dev.sephenry.cn:8000/api/admin')
}
