# Project Overview

The OpenCV RecycleVision project aims to leverage computer vision and machine learning techniques to enhance recycling efficiency and accuracy. By automatically identifying and sorting recyclable materials, this project seeks to reduce waste, improve recycling rates, and streamline waste management processes.

# Development Environment and Set Up

This guide describes how to set up the develpment environment, using *Windows Subsystem for Linux (WSL)*, *Docker*, *Node.js*, and *GitHub*, for cross-platform development and containerization.

> NOTE: This guide assumes you are on Windows. Linux/macOS support will be added later.

## 1. Install WSL (Ubuntu)
1. Open *PowerShell as Administrator*
2. Run the command:
```powershell 
wsl --install
```
3. Restart your machine if prompted
4. Use the default Ubuntu distribution
5. When prompted, create a Linux user account

You can open Ubuntu anytime from the Start menu by typing Ubuntu, or by running the terminal and using the command `wsl`.

## 2. Install Docker in WSL
Follow the [Docker Desktop WSL Guide](https://docs.docker.com/desktop/features/wsl/)
1. Install Docker Desktop for Windows
2. In Docker Desktop > Settings > General, enusre **Use WSL 2 based engine** is enabled
3. In Ubuntu (WSL), run:

```
sudo apt install apt-transport-https ca-certificates curl software-properties-common lsb-release -y
```
4. Add Docker's GPG key:
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```
5. Add Docker repository:
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] \
  https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
6. Install Docker engine:
```
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io -y
```
7. (Optional) Allow your user to run Docker without `sudo`:
```
sudo usermod -aG docker $USER
```
8. Restart Ubuntu:
```
exit
wsl
```
9. Test Docker:
```
docker run hello-world
```

## 3. Install Node.js in WSL
1. Use nvm (Node Version Manager):
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```
2. (Optional) load nvm immediately:
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
3. Install LTS version of Node.js
```
nvm install --lts
nvm use --lts
nvm alias default lts/*
```
4. (Optional) Verify Installation:
```
node -v
npm -v
```

## 4. Configure Git + SSH
1. Set your email/username:
```
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```
2. Generate SSH Key:
```
ssh-keygen -t ed25519 -C "your.email@example.com"
```
3. Start SSH agent + add key:
```
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```
4. Copy public key + add to GitHub
```
cat ~/.ssh/id_ed25519.pub
```
5. Add the public key to GitHub:
```
GitHub → Settings → SSH and GPG keys → New SSH key
```

## 5. Clone the Repository
1. Run the code to clone git repo into WSL:
```
cd ~ 
mkdir recyclevision
cd recyclevision
git clone git@github.com:mmurata22/recyclevision.git
```

From here, you can open the project in VS Code, run npm install, npm start, or manage the repo via GitHub Desktop by adding the folder via File > Add Local Repository.