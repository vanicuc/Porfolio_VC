import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// export default defineConfig({
  
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:5000",
//         changeOrigin: true,
//         secure: false
//       },
//       "/img": {
//         target: "http://localhost:5000",
//       },
//     },
//   },
// })

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})







// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": "http://localhost:5000"
//     }
//   }
// })


