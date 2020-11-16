const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {webpack.Configuration} */
module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.jsx'),
	output: {
		filename: '[name].[contenthash:8].js',
		path: path.resolve(__dirname, 'build'),
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
			},
			{
				test: /\.(s[ac]|c)ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({ template: 'index.html' }),
	],
};
