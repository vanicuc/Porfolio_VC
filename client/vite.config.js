import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false
      },
      "/img": {
        target: "http://localhost:5000",
      },
    },
  },
})
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": "http://localhost:5000"
//     }
//   }
// })



// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import viteTsconfigPaths from 'vite-tsconfig-paths';
// import svgrPlugin from 'vite-plugin-svgr';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react({
//     jsxRuntime: 'classic' // Add this line
//   }), viteTsconfigPaths(), svgrPlugin()],
// });