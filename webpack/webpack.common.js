const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/** @type {webpack.Configuration} */
module.exports = {
	context: path.resolve(__dirname, '..'),
	entry: path.resolve(__dirname, '../src/index.tsx'),
	output: {
		filename: '[name].[contenthash].js',
		chunkFilename: '[name].[contenthash].chunk.js',
		publicPath: '/',
		path: path.resolve(__dirname, '../build'),
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							presets: ['@babel/env', '@babel/react', '@babel/typescript'],
							plugins: [
								['@babel/plugin-transform-runtime', { regenerator: true }],
							],
						},
					},
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
						},
					},
				],
			},
			{
				test: /\.(s[ac]|c)ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpe?g|webp|svg|gif|mp4|webm|mp3|ogg|wav)$/,
				loader: 'file-loader',
				options: {
					name: 'assets/[contenthash].[ext]',
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new ForkTsCheckerPlugin({ async: false }),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: 'public/',
				},
			],
		}),
	],
};
