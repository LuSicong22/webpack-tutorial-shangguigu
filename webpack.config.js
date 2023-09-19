// Node.js的核心模块，专门用来处理文件路径
const path = require("path");

module.exports = {
  // entry(入口)
  entry: "./src/main.js",

  // output(输出)
  output: {
    // path: 文件输出目录，必须是绝对路径
    // path.resolve()方法返回一个绝对路径
    // __dirname 当前文件的文件夹绝对路径
    path: path.resolve(__dirname, "dist"),
    // filename: 输出文件名
    filename: "main.js",
  },

  // loader(加载器）
  module: {
    rules: [
      // loader的配置
      {
        test: /\.css$/, // 只检测.css文件
        use: ["style-loader", "css-loader"], //执行顺序:从右到左(从下到上)
      },
    ],
  },

  // plugins(插件）
  plugins: [],

  // mode(模式）
  mode: "development", // 开发模式
};
