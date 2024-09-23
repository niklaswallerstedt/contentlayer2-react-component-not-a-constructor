import type { MDXComponents } from 'mdx/types';
import type { ImageProps } from 'next/image';
import Image from 'next/image';

export const customComponents: MDXComponents = {
  Image: (props) => (
    <Image
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
      {...(props as ImageProps)}
    />
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...customComponents,
    ...components,
  };
}
