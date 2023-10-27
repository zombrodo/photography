module.exports = (config) => {
  config.addPassthroughCopy({ "src/assets/images": "assets/images" });

  return {
    dir: {
      input: "src",
    },
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
