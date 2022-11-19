const { transformSync } = require("@babel/core") //引用方法后就可以使用我们开发的插件

const code = `
    console.log("click")
    
`
const babelConfig = {
    plugins: ["./index.js"]
}
const output = transformSync(code, babelConfig)
console.log(output)