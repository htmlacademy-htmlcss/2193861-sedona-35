module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass");

  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/js");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
