module.exports = function( eleventyConfig ) {
	eleventyConfig.setTemplateFormats( 'html,md,liquid' );
	eleventyConfig.setQuietMode( true );

	eleventyConfig.addPassthroughCopy( './src/assets/' );
	eleventyConfig.addPassthroughCopy( './src/robots.txt' );

	eleventyConfig.addShortcode( 'year', () => `${ new Date().getFullYear() }`);

	eleventyConfig.addFilter( 'dump', function( anything ) {
		console.log( 'dump:', anything );
	} );

	eleventyConfig.setBrowserSyncConfig( {
		...eleventyConfig.browserSyncConfig
		,ui: false
		,ghostMode: false
		,logLevel: 'silent'
	} );
};
