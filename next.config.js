module.exports = {
	webpack(config) {
		config.module.rules = [
			...config.module.rules,
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader',
			},
		];

		return config;
	},
};
