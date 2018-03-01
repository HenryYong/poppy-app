/**
 * prod env
 * @author Henry Yang
 */

let settings = {}

if (process.env.NODE_ENV !== 'development') {
    settings = {
        'process.env': {
            'NODE_ENV': JSON.stringify('prod')
        },
        NODE_ENV: JSON.stringify('prod'),
        COMMON_AJAX_URL: JSON.stringify('http://www.sephenry.cn/api'),
        AJAX_URL: JSON.stringify('http://www.sephenry.cn/api/admin')
    }
}

export default settings
