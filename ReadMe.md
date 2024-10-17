## Overview
Here is a simple repository to highlight the issues using playwright in shared packages using npm workspaces:

Here is the breakdown of the workspace:
* `packages/app-1` A simple typescript library, which has a single test using playwright

* `packages/shared` A simple typescript library, which exports a simple function, used by `packages/app-1`

## Reproducing the problem
1. Clean repository
🚨 Note, when switching branches, make sure to clean the repo and re-install dependencies with the following commands:
```
# From root of the repo
[me@machine playwright-shared] npm clean
...

[me@machine playwright-shared] npm install
...
```

2. Install dependencies
```
# from root of the repo
[me@machine playwright-shared] npm install 
```

2. Run the tests
```
# from root of the repo
[me@machine playwright-shared] npm run test
```

🚨 Note how the tests work from the terminal, but the playwright test explorer in vscode gets the following error:
```
Error: Requiring @playwright/test second time, 
First:
Error: 
    at Object.<anonymous> (c:\Projects\Github\playwright-shared\node_modules\playwright\lib\index.js:69:33)
    at Module._compile (node:internal/modules/cjs/loader:1469:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
    at Object.i.<computed>.ut._extensions.<computed> [as .js] (c:\Projects\Github\playwright-shared\node_modules\playwright\lib\utilsBundleImpl.js:16:1010)
    at Module.load (node:internal/modules/cjs/loader:1288:32)
    at Function.Module._load (node:internal/modules/cjs/loader:1104:12)
    at Module.require (node:internal/modules/cjs/loader:1311:19)
    at require (node:internal/modules/helpers:179:18)
    at Object.<anonymous> (c:\Projects\Github\playwright-shared\node_modules\playwright\test.js:17:13)
    at Module._compile (node:internal/modules/cjs/loader:1469:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
    at Object.i.<computed>.ut._extensions.<computed> [as .js] (c:\Projects\Github\playwright-shared\node_modules\playwright\lib\utilsBundleImpl.js:16:1010)
    at Module.load (node:internal/modules/cjs/loader:1288:32)
    at Function.Module._load (node:internal/modules/cjs/loader:1104:12)
    at Module.require (node:internal/modules/cjs/loader:1311:19)
    at require (node:internal/modules/helpers:179:18)
    at Object.<anonymous> (c:\Projects\Github\playwright-shared\node_modules@playwright\test\index.js:17:18)
    at Module._compile (node:internal/modules/cjs/loader:1469:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
    at Object.i.<computed>.ut._extensions.<computed> [as .js] (c:\Projects\Github\playwright-shared\node_modules\playwright\lib\utilsBundleImpl.js:16:1010)
    at Module.load (node:internal/modules/cjs/loader:1288:32)
    at Function.Module._load (node:internal/modules/cjs/loader:1104:12)
    at Module.require (node:internal/modules/cjs/loader:1311:19)
    at require (node:internal/modules/helpers:179:18)
    at Object.<anonymous> (c:\Projects\Github\playwright-shared\packages\app-1\playwright.config.ts:1:1)
    at Module._compile (node:internal/modules/cjs/loader:1469:14)
    at Module.f._compile (c:\Projects\Github\playwright-shared\node_modules\playwright\lib\utilsBundleImpl.js:16:994)
    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
    at Object.i.<computed>.ut._extensions.<computed> [as .ts] (c:\Projects\Github\playwright-shared\node_modules\playwright\lib\utilsBundleImpl.js:16:1010)
    at Module.load (node:internal/modules/cjs/loader:1288:32)
    at Function.Module._load (node:internal/modules/cjs/loader:1104:12)
    at Module.require (node:internal/modules/cjs/loader:1311:19)
    at require (node:internal/modules/helpers:179:18)
    at requireOrImport (c:\Projects\Github\playwright-shared\node_modules\playwright\lib\transform\transform.js:231:18)
    at loadUserConfig (c:\Projects\Github\playwright-shared\node_modules\playwright\lib\common\configLoader.js:94:83)
    at loadConfig (c:\Projects\Github\playwright-shared\node_modules\playwright\lib\common\configLoader.js:105:28)
    at deserializeConfig (c:\Projects\Github\playwright-shared\node_modules\playwright\lib\common\configLoader.js:91:10)
    at LoaderMain.loadTestFile (c:\Projects\Github\playwright-shared\node_modules\playwright\lib\loader\loaderMain.js:43:20)
    at process.<anonymous> (c:\Projects\Github\playwright-shared\node_modules\playwright\lib\common\process.js:95:22)


Second: 
    at Object.<anonymous> (c:\Projects\Github\playwright-shared\node_modules\@playwright\test\index.js:17:18)
    at Object.<anonymous> (c:\Projects\Github\playwright-shared\packages\app-1\playwright.config.ts:1:1)
    at Object.<anonymous> (C:\Projects\Github\playwright-shared\node_modules\playwright\lib\index.js:64:11)
    at Object.<anonymous> (C:\Projects\Github\playwright-shared\node_modules\playwright\test.js:17:13)
    at Object.<anonymous> (C:\Projects\Github\playwright-shared\node_modules\@playwright\test\index.js:17:18)
    at Object.<anonymous> (C:\Projects\Github\playwright-shared\packages\shared\dist\src\sum.js:1:1)
    at Object.<anonymous> (C:\Projects\Github\playwright-shared\packages\shared\dist\src\index.js:1:1)
    at Object.<anonymous> (c:\Projects\Github\playwright-shared\packages\app-1\tests\example.test.ts:3:1)
```

## Extra information
* Doctor output:
```
Liam.Lamb in playwright-shared on  master is 📦 v1.0.0 via  
❯ npm doctor 
Connecting to the registry
Ok

Checking npm version
Ok
current: v10.9.0, latest: v10.9.0

Checking node version
Ok
current: v20.18.0, recommended: v20.18.0

Checking configured npm registry
Ok
using default registry (https://registry.npmjs.org/)

Checking for git executable in PATH
Ok
C:\Program Files\Git\cmd\git.EXE

Checking for global bin folder in PATH
Ok
C:\Program Files\nodejs
```

* Workspace packages:
```
Liam.Lamb in playwright-shared on  master is 📦 v1.0.0 via  
❯ npm ls --workspaces
playwright-shared@1.0.0 C:\Projects\Github\playwright-shared
├─┬ app-1@1.0.0 -> .\packages\app-1
│ └── shared@1.0.0 deduped -> .\packages\shared
└── shared@1.0.0 -> .\packages\shared
```