import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
// 尝试导入配置，如果找不到就用默认值，防止报错
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  // 获取 'blog' 集合下的所有文章
  const posts = await getCollection('blog');

  return rss({
    // 设置 RSS 标题和描述
    title: SITE_TITLE || 'My Blog',
    description: SITE_DESCRIPTION || 'Welcome to my website',
    site: context.site,
    
    // 定义每篇文章在 RSS 里的样子
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}