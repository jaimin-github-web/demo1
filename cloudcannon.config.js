module.exports = {
  collections_config: {
    posts: {
      path: "src/_posts",
      output: true,
      url: "/posts/{category|slugify}/[slug]",
      icon: "event_available"
    },
    pages: {
      name: 'Pages',
      path: 'src/pages',
      glob: ['**/*.md', './src/pages/*.astro'],
      parser: 'frontmatter',
      output: true,
      url: '/[slug]'
    },
  }
};