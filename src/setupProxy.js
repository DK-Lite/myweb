const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://34.97.26.13:3050',
      changeOrigin: true,
    })
  );
};

// module.exports = function(app){
//   app.use('/api', createProxyMiddleware(
//     {target: process.env.REACT_APP_API_URL, changeOrigin: true,}));
  
// }
