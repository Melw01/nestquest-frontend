# React + Vite

Steps to setup nestquest-frontend
1. Navigate to https://nodejs.org/en/download/package-manager

    # installs nvm (Node Version Manager)
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

    # download and install Node.js
    nvm install 20

    # verifies the right Node.js version is in the environment
    node -v # should print `v20.13.1`

    # verifies the right NPM version is in the environment
    npm -v # should print `10.5.2`

2. Create and setup project 
    # create project
    npm create vite@latest nestquest-frontend

    # when prompted, select React as framework and JavaScript as variant

    # navigate into the project folder
    cd nestquest-frontend

    # install npm
    npm install

    # run locally
    npm run dev

    # change port if needed: add section below in vite.config.js
    server: {
        port: 3000
    }

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
