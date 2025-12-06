// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The base property MUST match your GitHub repository name
export default defineConfig({
  base: "/NexInnovation_Website_React/", // <-- FIX: Check the spelling!
  plugins: [react()],
});