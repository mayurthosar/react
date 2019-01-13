const path = require("path");

const DIST_DIR = path.resolve(__dirname,"dist");
const SRC_DIR = path.resolve(__dirname,"src");


const config = {
    entry:SRC_DIR+'/app/index.js',
    mode: 'development',
    output:{
        path:DIST_DIR+"/app",
        filename:'bundle.js',
        publicPath:"/app/"
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader',
                include:SRC_DIR,
                query:{
                    presets:['env','react','stage-2']
                }
            }
        ]
    }
}

module.exports = config;