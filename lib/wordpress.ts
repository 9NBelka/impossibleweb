const WP_API_BASE = 'https://blog.impossibleweb.pro';

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  categories: number[];
  image_url?: string;
}

export interface WPMediaItem {
  source_url: string;
  alt_text: string;
}

export async function getPosts(perPage = 10): Promise<WPPost[]> {
  try {
    const url = `${WP_API_BASE}/?rest_route=/wp/v2/posts&per_page=${perPage}&_fields=id,slug,date,title,excerpt,content,featured_media,categories`;

    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return [];

    const data: WPPost[] = await res.json();

    // Вытаскиваем первую картинку из content для каждого поста
    return data.map((post) => {
      const match = post.content.rendered.match(/<img[^>]+src="([^"]+)"/);
      return {
        ...post,
        image_url: match ? match[1] : undefined,
      };
    });
  } catch (error) {
    console.error('WP fetch failed:', error);
    return [];
  }
}

export async function getPost(slug: string): Promise<WPPost | null> {
  try {
    const decoded = decodeURIComponent(slug);
    const url = `${WP_API_BASE}/?rest_route=/wp/v2/posts&slug=${decoded}&_fields=id,slug,date,title,content,excerpt,featured_media`;

    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;

    const posts: WPPost[] = await res.json();
    return posts[0] ?? null;
  } catch (error) {
    console.error('WP getPost failed:', error);
    return null;
  }
}

export async function getMediaUrl(mediaId: number): Promise<string | null> {
  if (!mediaId) return null;
  try {
    const url = `${WP_API_BASE}/?rest_route=/wp/v2/media/${mediaId}&_fields=source_url,alt_text`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const media: WPMediaItem = await res.json();
    return media.source_url ?? null;
  } catch (error) {
    console.error('WP getMediaUrl failed:', error);
    return null;
  }
}

export function formatDate(dateStr: string, lang: string): string {
  return new Date(dateStr).toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function getExcerpt(html: string, maxLength = 200): string {
  const text = html.replace(/<[^>]*>/g, '').trim();
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '...';
}
