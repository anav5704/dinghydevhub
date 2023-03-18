module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/styles.css');
    eleventyConfig.addPassthroughCopy('./img');
    eleventyConfig.addPassthroughCopy('./src/script.js');
    eleventyConfig.addPassthroughCopy('./src/admin');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}
