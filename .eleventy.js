module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addPassthroughCopy('js')
  eleventyConfig.addPassthroughCopy({ 'static/robots.txt': '/robots.txt' })
  eleventyConfig.addPassthroughCopy({ 'static/feeds': '/feeds' })
  return {
    passthroughFileCopy: true
  }
}