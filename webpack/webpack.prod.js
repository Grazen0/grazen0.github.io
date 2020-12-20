const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const config = merge(common, {
	mode: 'production',
	plugins: [new webpack.optimize.SplitChunksPlugin()],
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
});

module.exports = config;
