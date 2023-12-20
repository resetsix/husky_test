module.exports = {
    root: true, // 标识此为ESLint配置的顶级文件
    env: { browser: true, es2020: true }, // 环境配置，设置运行环境为浏览器和es2020
    extends: [
        "eslint:recommended", // 使用ESLint推荐的规则
        "plugin:@typescript-eslint/recommended", // TypeScript插件推荐的规则
        "plugin:react-hooks/recommended", // React Hooks插件推荐的规则
    ],
    ignorePatterns: ["dist", "build", ".eslintrc.cjs"], // 忽略对 'dist' 文件以及 '.eslintrc.cjs' 文件的检查
    parser: "@typescript-eslint/parser", // 使用 '@typescript-eslint/parser' 作为解析器
    plugins: ["react-refresh"], // 加载使用的插件(这里仅有 'react-refresh')
    rules: {
        "react-refresh/only-export-components": [
            // 设置'react-refresh/only-export-components'规则
            "warn", // 当规则被违反时，显示警告
            { allowConstantExport: true }, // 允许常量导出
        ],
    },
};
