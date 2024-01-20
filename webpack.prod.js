const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  // Adicione aqui configurações específicas de produção, se necessário
});
