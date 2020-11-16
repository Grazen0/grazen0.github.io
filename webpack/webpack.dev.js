const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		hot: true,
		port: 3000,
		contentBase: path.join(__dirname, '../build'),
		stats: 'minimal',
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
});
