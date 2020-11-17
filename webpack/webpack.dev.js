const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		hot: true,
		port: 3000,
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, '../build'),
		stats: 'minimal',
		overlay: true,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
});
