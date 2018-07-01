/**
 * @file executed before main.js. Load different version of externals according to current environment
 * @author Henry Yang
 */

let script = document.createElement('script')
console.log(NODE_ENV)
if (NODE_ENV !== 'dev') {
    script.src = 'https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js'
    console.log(script)
    document.body.appendChild(script)
}

require('./main.js')
