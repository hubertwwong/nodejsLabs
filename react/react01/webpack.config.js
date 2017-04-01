var webpack = require('webpack');
var path = require('path');

var BASE_PREFIX_DIR = 'src/client';
var BUILD_DIR = path.resolve(__dirname, BASE_PREFIX_DIR + '/public');
var APP_DIR = path.resolve(__dirname, BASE_PREFIX_DIR + '/app');
var APP_COMP_DIR = path.resolve(__dirname, BASE_PREFIX_DIR + '/app/components');
var APP_ACTIONS_DIR = path.resolve(__dirname, BASE_PREFIX_DIR + '/app/actions');
var APP_REDUCERS_DIR = path.resolve(__dirname, BASE_PREFIX_DIR + '/app/reducers');
var APP_CONTAINERS_DIR = path.resolve(__dirname, BASE_PREFIX_DIR + '/app/containers');

var config = {
  entry: APP_DIR + '/index.jsx',
	loaders : [
		{
			test : /\.jsx?/,
			include : [
				APP_DIR,
				APP_COMP_DIR,
				APP_ACTIONS_DIR,
				APP_REDUERS_DIR,
				APP_CONTAINERS_DIR
			],
			loader : 'babel'
		}
	],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;