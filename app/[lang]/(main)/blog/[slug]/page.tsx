import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPost, formatDate } from '@/lib/wordpress';
import styles from './BlogPost.module.scss';
import { TiArrowLeftThick } from 'react-icons/ti';
import ShareButtons from '@/components/ShareButtons/ShareButtons';

const ui = {
  en: { back: 'Back to blog' },
  ru: { back: 'Назад к блогу' },
};

type Lang = 'ru' | 'en';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const title = post.title.rendered;
  const description = post.excerpt.rendered.replace(/<[^>]*>/g, '').trim();
  const url = `https://impossibleweb.pro/${lang}/blog/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `https://impossibleweb.pro/en/blog/${slug}`,
        ru: `https://impossibleweb.pro/ru/blog/${slug}`,
        'x-default': `https://impossibleweb.pro/en/blog/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      siteName: 'impossibleWEB',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const l = (lang as Lang) in ui ? (lang as Lang) : 'en';
  const t = ui[l];

  const post = await getPost(slug);
  if (!post) notFound();

  // Извлекаем первую картинку из content если featured_media = 0
  const imageMatch = post.content.rendered.match(/<img[^>]+src="([^"]+)"/);
  const imageUrl = imageMatch ? imageMatch[1] : null;

  // Убираем первую картинку из контента чтобы не дублировать
  const contentWithoutFirstImage = post.content.rendered.replace(
    /<figure[^>]*>[\s\S]*?<\/figure>/,
    '',
  );

  return (
    <>
      <article className={styles.article}>
        <div className={styles.container}>
          <Link href={`/${l}/blog`} className={styles.back}>
            <TiArrowLeftThick className={styles.backIcon} />
            {t.back}
          </Link>

          <div className={styles.articleBlockCenter}>
            <div className={styles.articleBlock}>
              <h1
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />

              <p className={styles.postDate}>{formatDate(post.date, lang)}</p>

              {imageUrl ? (
                <div className={styles.imageWrapper}>
                  <img
                    src={imageUrl}
                    alt={post.title.rendered}
                    title={post.title.rendered}
                    className={styles.image}
                    fetchPriority='high'
                  />
                </div>
              ) : (
                <div className={styles.imageWrapper}>
                  <img src='/images/logo-for-blog.png' className={styles.image} />{' '}
                </div>
              )}

              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: contentWithoutFirstImage }}
              />
            </div>
          </div>
          <ShareButtons title={post.title.rendered} lang={lang} />
        </div>
      </article>
    </>
  );
}
