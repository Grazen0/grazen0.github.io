const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_PATH = path.resolve(__dirname, 'build');

/** @type {webpack.Configuration} */
module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.jsx'),
	output: {
		filename: '[name].[contenthash:8].js',
		publicPath: '/',
		path: BUILD_PATH,
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	devServer: {
		hot: true,
		port: 3000,
		contentBase: BUILD_PATH,
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
			{
				test: /\.(png|jpe?g|webp|svg|gif)$/,
				loader: 'file-loader',
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({ template: 'index.html' }),
		new webpack.HotModuleReplacementPlugin(),
	],
};
