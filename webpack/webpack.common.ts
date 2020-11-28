import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ForkTsCheckerPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { join, resolve } from 'path';
import webpack from 'webpack';

const context = resolve(__dirname, '..');

const config: webpack.Configuration = {
	context,
	entry: join(context, 'src/index.tsx'),
	output: {
		filename: '[name].[contenthash].js',
		chunkFilename: '[name].[contenthash].chunk.js',
		publicPath: '/',
		path: join(context, 'build'),
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/i,
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
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new ForkTsCheckerPlugin({ async: false }),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: join(context, 'public/index.html'),
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

export default config;
