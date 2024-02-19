module.exports = {
  collections_config: {
    posts: {
      path: "src/_posts",
      output: true,
      url: "/posts/{category|slugify}/[slug]",
      icon: "event_available"
    },
    pages: {
      // Tells CloudCannon to navigate to this path for this collection
      path: 'pages',
      output: true,
      url: "/[...blog]/{category|slugify}/[slug].astro"

      // Reads the contents of each file for this pattern (takes priority over path)
      glob: ['**/*.md', './src/pages/*.astro'],

      // Tells CloudCannon to only show successfully parsed files for this collection
      // Useful for excluding other collections when using '' as path
      filter: 'strict',

      // Tells CloudCannon this collection produces output files
      output: true
    }
  }
};