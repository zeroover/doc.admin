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