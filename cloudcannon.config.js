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
      url: '/[slug]',
      _enabled_editors: [
        "visual"
      ]
    },
  },
   _editables: {
    text: {
      italic: true
    },
    block: {
      format: "p h3",
      undo: true,
      redo: true
    },
    content: {
      blockquote: true,
      bold: true,
      format: "p h1 h2 h3 h4 h5 h6 pre address div",
      italic: true,
      strike: true,
      subscript: true,
      superscript: true,
      underline: true,
      link: true,
      bulletedlist: true,
      indent: true,
      numberedlist: true,
      outdent: true,
      code: true,
      embed: true,
      horizontalrule: true,
      image: true,
      table: true,
      undo: true,
      redo: true,
      removeformat: true,
      copyformatting: true,
      left: "align-left",
      center: "align-center",
      right: "align-right",
      justify: "align-justify",
      image_size_attributes: true,
      snippet: true
    }
  }
};
