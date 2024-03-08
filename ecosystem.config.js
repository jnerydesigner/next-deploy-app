module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      user : 'jander.webmaster@gmail.com',
      host : '191.101.78.119',
      ref  : 'origin/main',
      repo : 'git@github.com:jnerydesigner/next-deploy-app.git',
      path : '/home/root',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && npm run build && pm2 reload ecosystem.config.js',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes',
    }
  }
};
