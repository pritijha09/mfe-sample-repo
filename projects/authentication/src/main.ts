// Pre-load the Angular compiler module globally before any other code runs
import * as compiler from '@angular/compiler';
Object.assign(window, { ngCompiler: compiler });

import { initFederation } from '@angular-architects/native-federation';

initFederation()
  .then(() => import('./bootstrap'))
  .catch((err) => console.error('Failed to init federation:', err));
