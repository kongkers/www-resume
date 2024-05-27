import { glob } from 'glob';
import path from 'path';
import nconf from 'nconf';

const PROJECT_ROOT = process.cwd();
const BUILD_DIR = path.join(PROJECT_ROOT, 'build');
const len = BUILD_DIR.length;

function removeProjectRoot(cssFile: string): string {
  const APP_PATH = nconf.get('APP_PATH');
  return `${APP_PATH}${cssFile.slice(len)}`;
}

export async function getCssFiles() {
  const BASE_CSS_FILES = [
    '/public/bundle.css',
  ];
  const cssFiles = await glob(`${BUILD_DIR}/**/*.css`)
  return BASE_CSS_FILES.concat(cssFiles.map(removeProjectRoot));
}

