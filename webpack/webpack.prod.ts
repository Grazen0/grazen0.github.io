import webpack from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';

const config = merge(common, {
	mode: 'production',
	plugins: [new webpack.optimize.SplitChunksPlugin()],
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
});

export default config;
