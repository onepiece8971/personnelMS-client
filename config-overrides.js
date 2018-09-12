const {injectBabelPlugin} = require('react-app-rewired');
const rewireLess          = require('react-app-rewire-less');
const rewireSass          = require('react-app-rewire-scss');

module.exports = function override (config, env) {
  config = injectBabelPlugin('react-hot-loader/babel', config);
  config = injectBabelPlugin(['import', {libraryName: 'antd', style: true}], config);
//  config = rewireLess(config, env);
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
//    modifyVars: {'@primary-color': '#1DA57A'},
  })(config, env);
  config = rewireSass(config, env);
  return config;
}