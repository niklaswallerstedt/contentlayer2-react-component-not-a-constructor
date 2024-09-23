import { customComponents } from '@/mdx-components';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { notFound } from 'next/navigation';
import { findBlogPost, listBlogPosts } from '@/lib/content/blog-post';
import type { BlogPost } from '@/lib/content/blog-post';

export default function Page({ params: { slug } }: { params: { slug: string } }) {
  const post = getPost(slug);

  if (!post) {
    return notFound();
  }

  return <BlogPostContent post={post} />;
}

type BlogPostProps = {
  post: BlogPost;
};

function BlogPostContent({ post }: BlogPostProps) {
  const MDXContent = useMDXComponent(post.body.code);

  console.log('post', post);

  return (
    <article className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="prose text-3xl font-bold tracking-tight text-gray-900 lg:prose-xl sm:text-4xl">
            {post.title}
          </h2>
          <p className="prose mt-2 pb-10 text-lg leading-8 text-neutral-600 lg:prose-xl xl:text-xl">
            {post.description}
          </p>
          <div className="prose lg:prose-xl [&>*:last-child]:mb-0 [&>*]:mb-3">
            <MDXContent components={customComponents} />
          </div>
        </div>
      </div>
    </article>
  );
}

function getPost(slug: string) {
  const post = findBlogPost((p) => p.slug === slug);

  if (!post) {
    console.error(`Post not found for slug: ${slug}`);
    return null;
  }

  return post;
}
