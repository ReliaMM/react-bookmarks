 [ { parser: { requireEnsure: false } },
        { test: /\.(js|mjs|jsx|ts|tsx)$/,
          enforce: 'pre',
          use:
           [ { options:
                { formatter:
                   '/Users/mty/AilerM/react-bookmarks/node_modules/_react-dev-utils@9.0.1@react-dev-utils/eslintFormatter.js',
                  eslintPath:
                   '/Users/mty/AilerM/react-bookmarks/node_modules/_eslint@5.16.0@eslint/lib/api.js',
                  baseConfig:
                   { extends:
                      [ '/Users/mty/AilerM/react-bookmarks/node_modules/_eslint-config-react-app@4.0.1@eslint-config-react-app/index.js' ] },
                  ignore: false,
                  useEslintrc: false },
               loader:
                '/Users/mty/AilerM/react-bookmarks/node_modules/_eslint-loader@2.1.2@eslint-loader/index.js' } ],
          include: '/Users/mty/AilerM/react-bookmarks/src' },
        { oneOf:
           [ { test: [ /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/ ],
               loader:
                '/Users/mty/AilerM/react-bookmarks/node_modules/_url-loader@1.1.2@url-loader/dist/cjs.js',
               options: { limit: 10000, name: 'static/media/[name].[hash:8].[ext]' } },
             { test: /\.(js|mjs|jsx|ts|tsx)$/,
               include: '/Users/mty/AilerM/react-bookmarks/src',
               loader:
                '/Users/mty/AilerM/react-bookmarks/node_modules/_babel-loader@8.0.5@babel-loader/lib/index.js',
               options:
                { customize:
                   '/Users/mty/AilerM/react-bookmarks/node_modules/_babel-preset-react-app@9.0.0@babel-preset-react-app/webpack-overrides.js',
                  babelrc: false,
                  configFile: false,
                  presets:
                   [ '/Users/mty/AilerM/react-bookmarks/node_modules/_babel-preset-react-app@9.0.0@babel-preset-react-app/index.js' ],
                  cacheIdentifier:
                   'development:babel-plugin-named-asset-import@0.3.2:babel-preset-react-app@9.0.0:react-dev-utils@9.0.1:react-scripts@3.0.1',
                  plugins:
                   [ [ '/Users/mty/AilerM/react-bookmarks/node_modules/_babel-plugin-named-asset-import@0.3.2@babel-plugin-named-asset-import/index.js',
                       { loaderMap:
                          { svg: { ReactComponent: '@svgr/webpack?-svgo,+ref![path]' } } } ],
                     [ 'import',
                       { libraryName: 'antd', libraryDirectory: 'es', style: true },
                       'fix-import-imports' ] ],
                  cacheDirectory: true,
                  cacheCompression: false,
                  compact: false } },
             { test: /\.(js|mjs)$/,
               exclude: /@babel(?:\/|\\{1,2})runtime/,
               loader:
                '/Users/mty/AilerM/react-bookmarks/node_modules/_babel-loader@8.0.5@babel-loader/lib/index.js',
               options:
                { babelrc: false,
                  configFile: false,
                  compact: false,
                  presets:
                   [ [ '/Users/mty/AilerM/react-bookmarks/node_modules/_babel-preset-react-app@9.0.0@babel-preset-react-app/dependencies.js',
                       { helpers: true } ] ],
                  cacheDirectory: true,
                  cacheCompression: false,
                  cacheIdentifier:
                   'development:babel-plugin-named-asset-import@0.3.2:babel-preset-react-app@9.0.0:react-dev-utils@9.0.1:react-scripts@3.0.1',
                  sourceMaps: false } },
             { test: /\.css$/,
               exclude: /\.module\.css$/,
               use:
                [ '/Users/mty/AilerM/react-bookmarks/node_modules/_style-loader@0.23.1@style-loader/index.js',
                  { loader:
                     '/Users/mty/AilerM/react-bookmarks/node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js',
                    options: { importLoaders: 1, sourceMap: false } },
                  { loader:
                     '/Users/mty/AilerM/react-bookmarks/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                    options:
                     { ident: 'postcss',
                       plugins: [Function: plugins],
                       sourceMap: false } } ],
               sideEffects: true },
             { test: /\.module\.css$/,
               use:
                [ '/Users/mty/AilerM/react-bookmarks/node_modules/_style-loader@0.23.1@style-loader/index.js',
                  { loader:
                     '/Users/mty/AilerM/react-bookmarks/node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js',
                    options:
                     { importLoaders: 1,
                       sourceMap: false,
                       modules: true,
                       getLocalIdent: [Function: getLocalIdent] } },
                  { loader:
                     '/Users/mty/AilerM/react-bookmarks/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                    options:
                     { ident: 'postcss',
                       plugins: [Function: plugins],
                       sourceMap: false } } ] },
             { test: /\.(scss|sass)$/,
               exclude: /\.module\.(scss|sass)$/,
               use:
                [ '/Users/mty/AilerM/react-bookmarks/node_modules/_style-loader@0.23.1@style-loader/index.js',
                  { loader:
                     '/Users/mty/AilerM/react-bookmarks/node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js',
                    options: { importLoaders: 2, sourceMap: false } },
                  { loader:
                     '/Users/mty/AilerM/react-bookmarks/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                    options:
                     { ident: 'postcss',
                       plugins: [Function: plugins],
                       sourceMap: false } },
                  { loader:
                     '/Users/mty/AilerM/react-bookmarks/node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js',
                    options: { sourceMap: false } } ],
               sideEffects: true },
             { test: /\.module\.(scss|sass)$/,
               use:
                [ '/Users/mty/AilerM/react-bookmarks/node_modules/_style-loader@0.23.1@style-loader/index.js',
                  { loader:
                     '/Users/mty/AilerM/react-bookmarks/node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js',
                    options:
                     { importLoaders: 2,
                       sourceMap: false,
                       modules: true,
                       getLocalIdent: [Function: getLocalIdent] } },
                  { loader:
                     '/Users/mty/AilerM/react-bookmarks/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                    options:
                     { ident: 'postcss',
                       plugins: [Function: plugins],
                       sourceMap: false } },
                  { loader:
                     '/Users/mty/AilerM/react-bookmarks/node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js',
                    options: { sourceMap: false } } ] },
             { test: /\.less$/,
               exclude: /\.module\.less$/,
               use:
                [ '/Users/mty/AilerM/react-bookmarks/node_modules/_style-loader@0.23.1@style-loader/index.js',
                  { loader:
                     '/Users/mty/AilerM/react-bookmarks/node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js',
                    options: { importLoaders: 2 } },
                  { loader:
                     '/Users/mty/AilerM/react-bookmarks/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                    options:
                     { ident: 'postcss',
                       plugins: [Function: plugins],
                       sourceMap: false } },
                  { loader:
                     '/Users/mty/AilerM/react-bookmarks/node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js',
                    options:
                     { javascriptEnabled: true,
                       modifyVars: { '@primary-color': '#1DA57A' },
                       source: false } } ],
               sideEffects: false },
             { test: /\.module\.less$/,
               use:
                [ '/Users/mty/AilerM/react-bookmarks/node_modules/_style-loader@0.23.1@style-loader/index.js',
                  { loader:
                     '/Users/mty/AilerM/react-bookmarks/node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js',
                    options:
                     { importLoaders: 2,
                       modules: true,
                       localIdentName: '[path][name]__[local]--[hash:base64:5]' } },
                  { loader:
                     '/Users/mty/AilerM/react-bookmarks/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                    options:
                     { ident: 'postcss',
                       plugins: [Function: plugins],
                       sourceMap: false } },
                  { loader:
                     '/Users/mty/AilerM/react-bookmarks/node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js',
                    options:
                     { javascriptEnabled: true,
                       modifyVars: { '@primary-color': '#1DA57A' },
                       source: false } } ] },
             { loader:
                '/Users/mty/AilerM/react-bookmarks/node_modules/_file-loader@3.0.1@file-loader/dist/cjs.js',
               exclude: [ /\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/ ],
               options: { name: 'static/media/[name].[hash:8].[ext]' } } ] } ] },
  plugins:
   [ HtmlWebpackPlugin {
       options:
        { template: '/Users/mty/AilerM/react-bookmarks/public/index.html',
          templateContent: false,
          templateParameters: [Function: templateParametersGenerator],
          filename: 'index.html',
          hash: false,
          inject: true,
          compile: true,
          favicon: false,
          minify: undefined,
          cache: true,
          showErrors: true,
          chunks: 'all',
          excludeChunks: [],
          chunksSortMode: 'auto',
          meta: {},
          title: 'Webpack App',
          xhtml: false },
       childCompilerHash: undefined,
       childCompilationOutputName: undefined,
       assetJson: undefined,
       hash: undefined,
       version: 4 },
     InterpolateHtmlPlugin {
       htmlWebpackPlugin:
        { [Function: HtmlWebpackPlugin]
          version: 4,
          getHooks: [Function: getHtmlWebpackPluginHooks],
          createHtmlTagObject: [Function: createHtmlTag