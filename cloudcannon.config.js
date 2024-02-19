module.exports = {
  collections_config: {
    posts: {
      path: "content/posts",
      output: true,
      url: "/posts/{category|slugify}/[slug].html",
      icon: "event_available"
    }
  }
};