function init(shipit) {
  require('ghost-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: './',
      deployTo: '/opt/downloadcount/',
      ignores: ['.git', 'node_modules'],
      sharedLinks: [{
        name: 'node_modules',
        type: 'directory'
      }, {
        name: 'config.production.json',
        type: 'file'
      }]
    },
    staging: {
      servers: process.env.USER + '@' + process.env.SERVER
    }
  });
}
module.exports = init;