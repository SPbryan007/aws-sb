module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    
    //url: '/', // Note: The administration will be accessible from the root of the domain (ex: http://yourfrontend.com/)
    serveAdminPanel: true, // http://yourbackend.com will not serve any static admin files
    autoOpen:false,
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'b2d76f12c3e7d6982d950fa72c929333'),
    },
  },
  
});
