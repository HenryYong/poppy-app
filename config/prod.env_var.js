/**
 * prod env
 * @author Henry Yang
 */

const {
    stringify
} = JSON
const url = 'http://www.sephenry.cn/api'

export default {
    'process.env': {
        'NODE_ENV': stringify('production')
    },
    NODE_ENV: stringify('production'),
    COMMON_AJAX_URL: stringify(url),
    AJAX_URL: stringify(`${url}/admin`),
    ADMIN_AJAX_URL: stringify(`${url}/admin`),
    CLIENT_AJAX_URL: stringify(`${url}/client`)
}
