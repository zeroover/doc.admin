module.exports = {
  title: 'API文档DEMO',
  base:'/',
  description: '从零开始',
  head: [
      ['link', {
          rel: 'icon',
          href: `/favicon.ico`
      }]
  ],
  dest: './docs/.vuepress/dist',
  ga: '',
  evergreen: true,
  markdown: {
    lineNumbers: false //行号
  },
  themeConfig: {

    /*  设置github页面编辑开始 */
    repo: 'zeroover/doc.admin',
    //repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'zeroover/doc.admin',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在 GitHub 上编辑此页',
    /*  设置github页面编辑结束 */

    lastUpdated: 'Last Updated',
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,

    nav: [
      { text: 'Home', link: '/api/FIRSTOFALL.md' },
      // {  text: '文档', link: '/api/FIRSTOFALL.md' },
      { text: 'demo', link: 'https://luntandemo.zeroover.com' },
      //{ text: 'External', link: 'https://www.baidu.com' },
    ],
    sidebarDepth: 2,
    sidebar: [
      // {
      //   title: 'Guide',
      //   collapsable: false,
      //   children: ['/guide/']
      // },
      {
        title: '说明',
        collapsable: false,
        children: [
          //'/api/',
          '/api/FIRSTOFALL.md',
          // '/api/ERRORCODE.md',
          ]
      },
      {
        title: '文档',
        collapsable: false,
        children: [
          //'/api/FIRSTOFALL.md',
          '/api/FRONTAPI.md',
          '/api/BACKENDAPI.md',
          // '/api/ERRORCODE.md',
          ]
      },
      // {
      //   title: '资源',
      //   collapsable: false,
      //   children: ['/resources/']
      // },         
    ]
  }
}