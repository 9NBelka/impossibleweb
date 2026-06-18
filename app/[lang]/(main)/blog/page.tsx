import Link from 'next/link';
import { getPosts, formatDate, getExcerpt } from '@/lib/wordpress';
import scss from './Blog.module.scss';
import ReactMarkdown from 'react-markdown';
import BlogHero from './BlogHero/BlogHero';

const translations = {
  en: {
    readMore: 'Читать далеe',
  },
  ru: {
    readMore: 'Read more',
  },
};

type Lang = 'ru' | 'en';

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = translations[lang as Lang] || translations.en;
  const posts = await getPosts(12);

  const scrollToContact = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <BlogHero lang={lang} />
      <div className={scss.blogPage}>
        <div className={scss.container}>
          <div className={scss.postsBlockMain}>
            {posts.map((post) => (
              <Link key={post.id} href={`/${lang}/blog/${post.slug}`} className={scss.card}>
                <div className={scss.postImage}>
                  {post.image_url ? (
                    <img
                      src={post.image_url}
                      alt={post.title.rendered}
                      title={post.title.rendered}
                      className={scss.image}
                    />
                  ) : (
                    <img src='/images/logo-for-blog.png' className={scss.image} />
                    // <div className={scss.imagePlaceholder} />
                  )}
                </div>
                <div className={scss.postContent}>
                  <h2
                    className={scss.postTitle}
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div className={scss.postExcerpt}>
                    <ReactMarkdown>{getExcerpt(post.excerpt.rendered)}</ReactMarkdown>{' '}
                  </div>
                  <div className={scss.postDateAndButton}>
                    <span className={scss.postDate}>{formatDate(post.date, lang)}</span>
                    <div className={scss.linkBlock}>
                      <span className={scss.readMore}>{t.readMore} →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
