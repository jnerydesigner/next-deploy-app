#!/bin/bash
# Navigate to your project jenkins/workspace/ directory
cd /var/lib/jenkins/workspace/NextDeploy
# Copy files using rsync
cp -r * /root/next-deploy-app/
# Navigate to your project directory
cd /root/next-deploy-app/

# Find the process ID (PID) using port 3000
PID=$(lsof -t -i:3040)

# If the PID is not empty, kill the process
if [ -n "$PID" ]; then
  su -c "kill -9 $PID" -s /bin/bash root
fi

# Navigate to your project directory
cd /root/next-deploy-app/
# stop pm2 process
pm2 stop ecosystem.config.js

# install node dependency
npm ci

# Build Porject
npm run build

# start pm2 process
pm2 start ecosystem.config.js
# Find the process ID (PID) using port 3000
PID=$(lsof -t -i:3040)
# You may want to check if the process is still running after the deploy
if [ -n "$PID" ]; then
  echo "The process is still running with PID $PID."
else
  echo "Deployment successful.  process running on port 3000."
fi