module.exports = {
  // 缩进宽度
  tabWidth: 2,
  // 单引号
  singleQuote: true,
  // JSX 属性中使用单引号
  jsxSingleQuote: true,
  // 多行的 HTML 元素中，前标签的 '>' 是否与最后一个属性在同一行
  bracketSameLine: false,
  // 行末使用 '\n'
  endOfLine: 'lf',
  // 语句尾部添加分号
  semi: true,
  // 特殊文件处理
  overrides: [
    {
      // css 样式文件
      files: '*.css',
      options: {
        // 缩进宽度
        tabWidth: 4,
      },
    },
  ],
};
