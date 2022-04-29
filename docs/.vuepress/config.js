module.exports = {
    head: [
        [
            'link', { rel: 'icon', href: '/logo.png' }
        ]
    ],
    title: '会飞的猪',// 设置网站标题
    description: '猪的学习笔记',
    base: '/zhuyunju/',// 设置站点根路径
    dest: './ROOT',  // 设置输出目录
    plugins: [],
    markdown: {
        // 代码块行号
        lineNumbers: true,
    },
    themeConfig: {
        logo: '/logo.png',
        // 添加导航栏
        nav: require('./nav.js'),
        // 侧边栏
        sidebar: require('./sidebar.js'),
        // 标题深度，2 表示提取 h2 和 h3 标题
        sidebarDepth: 2,
        // 启用页面滚动效果
        smoothScroll: true,
        // 导航栏显示 码云 仓库
        repo: 'https://gitee.com/zhu-yunju/starred',
        repoLabel: '码云',
        // 最后更新时间
        lastUpdated: '更新时间'
    },
}