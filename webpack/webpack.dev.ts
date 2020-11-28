import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import { merge } from 'webpack-merge';
import common from './webpack.common';

const config = merge(common, {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		hot: true,
		port: 3000,
		open: true,
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, '../build'),
		stats: 'minimal',
		overlay: true,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
});

export default config;
