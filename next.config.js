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
	// Ensure fonts are served with proper headers
	async headers() {
		return [
			{
				source: '/fonts/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
					{
						key: 'Access-Control-Allow-Origin',
						value: '*',
					},
				],
			},
		];
	},
};
