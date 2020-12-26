module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.jsx',
            '.js',
            '.json'
          ],
          alias: {
            '@components': './src/components',
            '@routes': './src/routes',
            '@pages': './src/pages',
            '@services': './src/services',
            '@utils': './src/utils',
            '@theme': './src/theme',
            '@images': './src/assets/images',
            '@store': './src/store'
          }
        }
      ],
      [
        "@babel/plugin-proposal-decorators",
        {
           "legacy": true
        }
     ]
    ]  
  };
};
