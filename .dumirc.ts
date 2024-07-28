import { defineConfig } from 'dumi';


export default defineConfig({
  title: '杰嘉',
  outputPath: 'docs-dist',
  themeConfig: {
    hd: { rules: [] },
    rtl: true,
    name: '杰嘉',
    // logo: '/mosaic2.png',
    // github page作为站点补全地址
    // logo: 'https://shanchuan1.github.io/proxy-mosaic/mosaic2.png',
    footer: `Open-source MIT Licensed | Copyright © 2019-present
<br />
Powered by self`,
    prefersColor: { default: 'auto' },
    // socialLinks: {
    //   github: 'https://github.com/shanchuan1/proxy-mosaic',
    // },
    lastUpdated: true,
    nprogress: true,
  },
  ...(process.env.NODE_ENV === 'development' ? {} : { ssr: {} }),
  analytics: {
    ga_v2: 'G-GX2S89BMXB',
  },
  sitemap: { hostname: 'https://d.umijs.org' },
});
