#!/bin/bash

# setup-mf-project.sh
echo "🚀 Module Federation 프로젝트 설정을 시작합니다..."

# 메인 프로젝트 디렉토리 생성
mkdir -p mf-project
cd mf-project

# Host App (React) 설정
echo "📦 Host App (React) 설정 중..."
mkdir -p host-app
cd host-app

# package.json 생성
echo '{
  "name": "host-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@originjs/vite-plugin-federation": "^1.3.5",
    "@types/react": "^18.2.64",
    "@types/react-dom": "^18.2.21",
    "@typescript-eslint/eslint-plugin": "^7.1.1",
    "@typescript-eslint/parser": "^7.1.1",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "typescript": "^5.2.2",
    "vite": "^5.1.6"
  }
}' > package.json

# vite.config.ts 생성
echo 'import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host_app",
      remotes: {
        remote_app: "http://localhost:5001/assets/remoteEntry.js",
        remote_vue: "http://localhost:5002/remoteEntry.js",
      },
      shared: {
        react: { 
          singleton: true,
          requiredVersion: "^18.2.0"
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.2.0"
        }
      }
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5000,
    strictPort: true,
    cors: true
  }
});' > vite.config.ts

# App.tsx 생성
mkdir -p src
echo 'import React, { Suspense, useEffect, useRef } from "react";

const RemoteReactApp = React.lazy(() => import("remote_app/App"));

function VueWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const appInstanceRef = useRef<any>(null);

  useEffect(() => {
    const loadVueApp = async () => {
      try {
        const { mount } = await import("remote_vue/App");
        if (containerRef.current) {
          appInstanceRef.current = mount(containerRef.current);
        }
      } catch (error) {
        console.error("Failed to load Vue app:", error);
      }
    };

    loadVueApp();

    return () => {
      if (appInstanceRef.current) {
        appInstanceRef.current.unmount();
      }
    };
  }, []);

  return <div ref={containerRef} />;
}

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Host Application</h1>
      <div style={{ marginTop: "20px" }}>
        <Suspense fallback={<div>Loading React Remote App...</div>}>
          <RemoteReactApp />
        </Suspense>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Suspense fallback={<div>Loading Vue Remote App...</div>}>
          <VueWrapper />
        </Suspense>
      </div>
    </div>
  );
}

export default App;' > src/App.tsx

# Vue Remote App 설정
cd ..
echo "📦 Vue Remote App 설정 중..."
mkdir -p remote-vue
cd remote-vue

# package.json 생성
echo '{
  "name": "remote-vue",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
  "dependencies": {
    "core-js": "^3.36.0",
    "vue": "^3.4.21"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "~5.0.8",
    "@vue/cli-service": "~5.0.8",
    "@vue/compiler-sfc": "^3.4.21",
    "css-loader": "^6.11.0",
    "postcss": "^8.4.35",
    "postcss-loader": "^6.2.1",
    "postcss-preset-env": "^9.5.0",
    "style-loader": "^3.3.4",
    "vue-loader": "^17.4.2",
    "vue-style-loader": "^4.1.3",
    "webpack": "^5.90.3"
  },
  "packageManager": "yarn@3.3.1"
}' > package.json

# vue.config.js 생성
echo "const { defineConfig } = require('@vue/cli-service')
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = defineConfig({
  publicPath: 'http://localhost:5002/',
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'remote_vue',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/bootstrap.js'
        },
        shared: {
          vue: {
            singleton: true,
            requiredVersion: '^3.4.21'
          }
        }
      })
    ]
  },
  devServer: {
    port: 5002,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})" > vue.config.js

# babel.config.js 생성
echo "module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}" > babel.config.js

# postcss.config.js 생성
echo "module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true
      }
    }
  }
}" > postcss.config.js

# src 디렉토리 및 파일 생성
mkdir -p src
echo '<template>
  <div class="vue-container">
    <h2>Vue Remote App</h2>
    <p>This is a Vue 3 component loaded remotely</p>
    <button @click="count++">Count is: {{ count }}</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
.vue-container {
  border: 2px solid green;
  padding: 20px;
  margin: 10px;
  font-family: Arial, sans-serif;
}
</style>' > src/App.vue

# bootstrap.js 생성
echo "import { createApp } from 'vue'
import App from './App.vue'

const mount = (el) => {
  const app = createApp(App)
  app.mount(el)
  return app
}

export { mount }" > src/bootstrap.js

# main.js 생성
echo "import('./bootstrap').then(({ mount }) => {
  mount('#app')
})" > src/main.js

# public/index.html 생성
mkdir -p public
echo '<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Vue Remote App</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>' > public/index.html

# .yarnrc.yml 생성
echo 'nodeLinker: node-modules
enableGlobalCache: true' > .yarnrc.yml

# Yarn Berry 설정
yarn set version berry
yarn set version 3.3.1

echo "🎉 설정이 완료되었습니다!"
echo "
실행 방법:
1. Vue Remote App 실행:
   cd remote-vue
   yarn install
   yarn serve

2. Host App 실행:
   cd ../host-app
   yarn install
   yarn dev
"