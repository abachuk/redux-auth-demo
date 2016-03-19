import config from './config'
import base from './build/env/_base'
export default require(`./build/env/dev`)(base)