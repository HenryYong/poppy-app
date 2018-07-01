/**
 * @file executed before main.js. Load different version of externals according to current environment
 * @author Henry Yang
 */

let script = document.createElement('script')

if (NODE_ENV !== 'dev') {
    script.src = 'https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js'

    document.body.appendChild(script)
}

require('./main.js')
