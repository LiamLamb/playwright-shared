## Overview
Here is a simple repository to highlight the issues using playwright in shared packages using npm workspaces:

Here is the breakdown of the workspace:
* `packages/app-1` A simple typescript library, which has a single test using playwright

* `packages/shared` A simple typescript library, which exports a simple function, used by `packages/app-1`

## Reproducing the problem
There are two branches in the repository, each of which will have its own `ReadMe` explaining what to expect:
* `main`, which has a vanilla playwright configuration; it is only used in a single package of the workspace (`app-1`).
* `shared-fixture`, which demonstrates the issue exporting fixtures from a shared package in a workspace.

🚨 Note, when switching branches, make sure to clean the repo and re-install dependencies with the following commands:
```
# From root of the repo
[me@machine playwright-shared] npm clean
...

[me@machine playwright-shared] npm install
...
```

## Getting started
1. Install dependencies
```
# from root of the repo
[me@machine playwright-shared] npm install 
```

2. Run the tests
```
# from root of the repo
[me@machine playwright-shared] npm run test
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
│ ├── @playwright/test@1.48.1
│ └── shared@1.0.0 deduped -> .\packages\shared
└── shared@1.0.0 -> .\packages\shared
```