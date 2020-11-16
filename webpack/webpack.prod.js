const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new webpack.optimize.SplitChunksPlugin(),
		new webpack.optimize.AggressiveMergingPlugin(),
	],
	optimization: {
		splitChunks: {
			chunks: 'all',

			// Idk I saw this on internet and it just works
			maxInitialRequests: Infinity,
			minSize: 0,
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name(module) {
						const [, packageName] = module.context.match(
							/[\\/]node_modules[\\/](.*?)([\\/]|$)/
						);

						return `npm.${packageName.replace('@', '')}`;
					},
				},
			},
		},
	},
});
