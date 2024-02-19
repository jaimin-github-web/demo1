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
    // Populates the sidebar navigation and provides metadata for the editor
  collections_config: {
    people: {
      // Reads the contents of each file in this directory
      path: 'content/people',

      // The URL template for items in this collection
      url: '/people/{department|slugify}/[slug]/',

      // Tells CloudCannon this collection produces output files
      output: true

      // CloudCannon collection-level configuration
      name: 'Personnel',
      _enabled_editors: ['data']
    },
    posts: {
      // Reads the contents of each file in this directory
      path: '_posts',

      // How to parse the files in this collection
      parser: 'front-matter',

      // The URL function for items in this collection
      url: (filePath, parsed, { filters }) => {
        const year = new Date(parsed.date).getFullYear();
        const slug = filters.slugify(parsed.title || '');
        return `/posts/${year}/${slug}/`;
      },

      // Tells CloudCannon this collection produces output files
      output: true
    },
    pages: {
      // Tells CloudCannon to navigate to this path for this collection
      path: '',

      // Reads the contents of each file for this pattern (takes priority over path)
      glob: ['**/*.md', './src/pages/*.html'],

      // Tells CloudCannon to only show successfully parsed files for this collection
      // Useful for excluding other collections when using '' as path
      filter: 'strict',

      // Tells CloudCannon this collection produces output files
      output: true
    },
    data: {
      // Reads the contents of each file in this directory
      path: 'data',

      // How to parse the files in this collection
      parser: (filePath, raw, { parsers, filters }) => {
        const parsed = parsers['front-matter'].parse(raw);
        const slug = filters.slugify(parsed.title || '');
        return { ...data, slug };
      }
    }
  },

  // Generates the data for select and multiselect inputs matching these names
  data_config: {
    authors: {
      // Reads the contents of this file
      path: 'data/authors.csv'
    },
    offices: {
      // Reads the contents of each file in this directory
      path: 'data/offices',
      parser: 'json'
    }
  }
  }
};
