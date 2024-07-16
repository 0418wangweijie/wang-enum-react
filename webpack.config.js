const path = require('path');

module.exports = {
  entry: './src/index.js', // 修改为你的入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'wang-enum-react',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: 'react',
  },
};
