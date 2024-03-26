const { getPlugin, pluginByName, whenProd } = require("@craco/craco");
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure(webpackConfig) {
      let cdn = {js: []};
      // 线上替换cdn key:value key为库的名字 value为umd模块导出到global对象的key名
      whenProd(() => {
        webpackConfig.externals = {
          react: "React",
          "react-dom": "ReactDOM"
        };
        // cdnurl要按照库的相互依赖优先级填写 被依赖的写前面优先加载
        cdn = {
          js: [
            'https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js'
          ]
        }
      });
      // 根据插件名获取插件 返回是否找到和匹配的插件
      const { isFound: isHtmlWebpackPluginFound, match: htmlWebpackPlugin } =
        getPlugin(webpackConfig, pluginByName("HtmlWebpackPlugin"));
      if (isHtmlWebpackPluginFound) {
        htmlWebpackPlugin.options.title = whenProd(
          () => "生产环境",
          "开发环境"
        );

      }
      htmlWebpackPlugin.options.cdn = cdn
      return webpackConfig;
    },
  },
};
