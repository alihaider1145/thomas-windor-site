module.exports = function (eleventyConfig) {
  // Copy assets folder to output
  eleventyConfig.addPassthroughCopy('src/assets');

  // Create paintings collection
  eleventyConfig.addCollection('paintings', function (collectionApi) {
    return collectionApi.getFilteredByGlob('src/assets/paintings/*.md');
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
    },
  };
};
