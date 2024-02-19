// Global CloudCannon configuration
  _inputs: {
    title: {
      type: 'text',
      comment: 'The title of your page.'
    }
  },
  _select_data: {
    colors: ['Red', 'Green', 'Blue']
  },

  // Read from ./src instead of .
  source: 'src',

  // Write to ./output/_cloudcannon/info.json instead of ./_cloudcannon/info.json
  output: 'output'