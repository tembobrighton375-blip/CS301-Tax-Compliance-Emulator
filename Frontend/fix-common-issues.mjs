#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = __dirname;

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && !file.includes('node_modules')) {
      walkDir(filePath, callback);
    } else {
      callback(filePath);
    }
  });
}

function fixCommonIssues(content) {
  // Fix: import * from "react" -> import React from "react"
  content = content.replace(/import\s+\*\s+from\s+["']react["']/g, 'import React from "react"');
  
  // Fix: import * from "@x/y" -> import * as X from "@x/y"
  // Actually for shadcn components, let's keep the * import since it's used as namespace
  content = content.replace(/import\s+\*\s+from\s+["']([^"']*@[^"']*?)["']/g, 'import * as components from "$1"');
  
  return content;
}

function processFile(filePath) {
  const ext = path.extname(filePath);
  
  if (!['.jsx', '.js'].includes(ext)) {
    return false;
  }
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixCommonIssues(content);
    
    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

console.log('Fixing common conversion issues...\n');

let filesFixed = 0;
walkDir(path.join(projectRoot, 'src'), (filePath) => {
  if (processFile(filePath)) {
    filesFixed++;
    console.log(`Fixed: ${path.relative(projectRoot, filePath)}`);
  }
});

console.log(`\n✓ Fix complete! Fixed ${filesFixed} files.`);
