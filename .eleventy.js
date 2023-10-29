const Image = require("@11ty/eleventy-img")

module.exports = (config) => {
  config.addPassthroughCopy({ "src/assets/images": "assets/images" });

  config.addShortcode("image", async (src, alt, sizes) => {
    const metadata = await Image(src, {
      widths: [512, 768, 1024, 2048],
      formats: ["jpg"],
      outputDir: "_site/assets/images/",
      urlPath: "/assets/images/"
    });

    const attributes = {
      alt: alt || "",
      sizes,
      loading: "lazy",
      decoding: "async",
    }

    return Image.generateHTML(metadata, attributes);
  });

  return {
    dir: {
      input: "src",
    },
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
