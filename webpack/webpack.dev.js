const webpack = require('webpack');
const { resolve } = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const config = merge(common, {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		inline: true,
		port: 3000,
		open: true,
		historyApiFallback: true,
		contentBase: [
			resolve(__dirname, '../build'),
			resolve(__dirname, '../public'),
		],
		stats: 'minimal',
		overlay: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
	],
});

module.exports = config;
