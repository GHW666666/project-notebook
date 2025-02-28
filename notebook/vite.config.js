import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), createStyleImportPlugin({
    libs: [
      {
        libraryName: 'zarm',
        esModule: true,
        resolveStyle: name => `zarm/es/${name}/style/css`
      }
    ]
  })],
  css:{
    modules:{ //css模块化配置
      localsConvention: 'dashesOnly'
    }
  },
  resolve: {
    alias: {
      //__dirname 是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
      '@': path.resolve(__dirname, './src'),
      'utils':path.resolve(__dirname,'./src/utils')
    }
  },
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:3000/api',
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    } //代理配置
  }
  
})