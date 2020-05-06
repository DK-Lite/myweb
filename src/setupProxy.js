const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    process.env.REACT_APP_API_URL_PREFIX,
    createProxyMiddleware({
      target: process.env.REACT_APP_API_URL,
      changeOrigin: true,
    })
  );
};

// module.exports = function(app){
//   app.use('/api', createProxyMiddleware(
//     {target: process.env.REACT_APP_API_URL, changeOrigin: true,}));
  
// }