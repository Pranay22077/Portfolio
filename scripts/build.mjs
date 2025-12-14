#!/usr/bin/env node

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, '..');

function tryBuild() {
  console.log('🚀 Starting build process...');
  
  // Change to project directory
  process.chdir(root);
  
  // Build approaches in order of preference
  const buildApproaches = [
    // Approach 1: Direct vite.js call
    () => {
      const viteJs = resolve(root, 'node_modules', 'vite', 'bin', 'vite.js');
      if (fs.existsSync(viteJs)) {
        console.log('📦 Using direct vite.js call');
        return `node "${viteJs}" build`;
      }
      return null;
    },
    
    // Approach 2: Standard vite binary
    () => {
      const viteBin = resolve(root, 'node_modules', '.bin', 'vite');
      if (fs.existsSync(viteBin) || fs.existsSync(viteBin + '.cmd')) {
        console.log('📦 Using vite binary');
        return `"${viteBin}" build`;
      }
      return null;
    },
    
    // Approach 3: npx fallback
    () => {
      console.log('📦 Using npx fallback');
      return 'npx vite build';
    },
    
    // Approach 4: Direct node execution
    () => {
      console.log('📦 Using direct node execution');
      return 'node node_modules/vite/bin/vite.js build';
    }
  ];
  
  for (const approach of buildApproaches) {
    try {
      const command = approach();
      if (command) {
        console.log(`🔧 Executing: ${command}`);
        
        execSync(command, {
          stdio: 'inherit',
          cwd: root,
          env: { 
            ...process.env, 
            NODE_ENV: 'production',
            FORCE_COLOR: '1'
          },
          timeout: 300000 // 5 minutes timeout
        });
        
        console.log('✅ Build completed successfully!');
        return;
      }
    } catch (error) {
      console.warn(`⚠️  Approach failed: ${error.message}`);
      continue;
    }
  }
  
  throw new Error('All build approaches failed');
}

try {
  tryBuild();
} catch (error) {
  console.error('❌ Build failed:', error.message);
  console.error('💡 Try running: npm install && npm run build');
  process.exit(1);
}