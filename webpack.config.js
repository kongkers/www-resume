import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const browserConfig = {
  entry: './src/ui/index.tsx',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist', 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.ui.json',
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.json$/i,
        type: 'json',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }

    ]
  },
  resolve: {
    extensions: ['', '.tsx', '.ts', '.js', '.css', '.json'],
    // Typescript now requires the extension when using file imports. Typescript understands
    // that .js also means .ts, but webpack does not. To fix this we need to use the extensionAlias
    // To tell Webpack that .js also means .ts
    // See: https://webpack.js.org/configuration/resolve/#resolveextensionalias
    extensionAlias: {
      '.js': ['.ts', '.tsx', '.js'],
    },
    fallback: {
      path: false,
      util: false,
      crypto: false,
      fs: false,
      assert: false,
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
}

export default [
  browserConfig,
]
