module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      user : 'root',
      host : '191.101.78.119',
      ref  : 'origin/main',
      repo : 'git@github.com:jnerydesigner/next-deploy-app.git',
      path : '/root/next-deploy-app',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && npm run build && pm2 reload ecosystem.config.js -env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes',
    }
  }
};
