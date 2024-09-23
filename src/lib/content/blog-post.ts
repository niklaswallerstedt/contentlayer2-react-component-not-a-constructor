import 'server-only';

import { allBlogPosts } from 'contentlayer/generated';
import type { BlogPost } from 'contentlayer/generated';
import {
  findEntity,
  getEntityBySlug,
  listEntities,
} from '@/lib/content/entity';

/**
 * Fetches a blog post by its slug.
 */
export const getBlogPost = getEntityBySlug<BlogPost>(allBlogPosts);

/**
 * Finds a blog post based on the provided predicate function.
 */
export const findBlogPost = findEntity<BlogPost>(allBlogPosts);

/**
 * Lists all blog posts or filters them based on the provided filter function.
 */
export const listBlogPosts = listEntities<BlogPost>(allBlogPosts);

export type { BlogPost };
