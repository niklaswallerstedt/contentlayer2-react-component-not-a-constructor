import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer2/source-files';

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [defineDocumentType(() => ({
    name: 'BlogPost',
    filePathPattern: 'blog/**/*.md',
    contentType: 'mdx',
    description: 'A blog post',
    fields: {
      title: { type: 'string', required: true },
      description: { type: 'string', required: true },
      type: { type: 'string', required: true },
    },
    computedFields: {
      slug: {
        type: 'string',
        resolve: (doc) => {
          const slug = doc._raw.sourceFileName
            .replace(/\.(?<fileType>md|mdx)$/, '');
          return slug;
        },
      },
    },
  }))],
});
