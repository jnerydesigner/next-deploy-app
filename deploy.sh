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