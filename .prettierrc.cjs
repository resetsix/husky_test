// JS文件更适合写注释，所以文件格式使用 .js
// prettier配置文件，具体配置项参考：https://prettier.io/docs/en/options.html
module.exports = {
    printWidth: 120, // 每行最多120个字符
    tabWidth: 4, // 缩进为4个空格
    useTabs: false, // 使用空格，不用tabs
    semi: true, // 句末要加分号
    singleQuote: false, // 使用双引号
    quoteProps: "as-needed", // 属性名需要引号时才加
    jsxSingleQuote: false, // jsx里使用双引号
    arrowParens: "always", // 箭头函数参数总是有括号
    insertPragma: false, // 不在被prettier格式化的文件顶部添加标注
    eslintIntegration: true, // 使用ESLint规则
    stylelintIntegration: true, // 使用stylelint规则
    bracketSpacing: true, // 对象花括号两边要留空格
    htmlWhitespaceSensitivity: "ignore", // HTML忽略空格
};
