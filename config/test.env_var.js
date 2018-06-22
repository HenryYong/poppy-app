/**
 * test env
 * @author Henry Yang
 */

const {
    stringify
} = JSON
const url = 'http://test.sephenry.cn/api'

export default {
    'process.env': {
        'NODE_ENV': stringify('test')
    },
    NODE_ENV: stringify('test'),
    COMMON_AJAX_URL: stringify(url),
    AJAX_URL: stringify(`${url}/admin`),
    ADMIN_AJAX_URL: stringify(`${url}/admin`),
    CLIENT_AJAX_URL: stringify(`${url}/client`)
}
