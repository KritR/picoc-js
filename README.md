# picoc-js

This is Picoc recompiled to WASM and distributed as a npm package.

![npm shield version](https://img.shields.io/npm/v/picoc-js?style=flat-square)
![npm shield size](https://img.shields.io/bundlephobia/minzip/picoc-js?style=flat-square)

## Overview

Original Repo: https://gitlab.com/zsaleeba/picoc/

PicoC is a very small C interpreter for scripting. It was originally written
as a script language for a UAV's on-board flight system. It's also very
suitable for other robotic, embedded and non-embedded applications.

The core C source code is around 3500 lines of code. It's not intended to be
a complete implementation of ISO C but it has all the essentials. When
compiled it only takes a few k of code space and is also very sparing of
data space. This means it can work well in small embedded devices. It's also
a fun example of how to create a very small language implementation while
still keeping the code readable.

picoc is now feature frozen. Since it's important that it remain small it's
intended that no more major features will be added from now on. It's been
tested on x86-32, x86-64, powerpc, arm, ultrasparc, HP-PA and blackfin
processors and is easy to port to new targets.

## Installation

```
npm i picoc-js
```

or

```
yarn add picoc-js
```

## Example Usage

```
import {runC} from 'picoc-js';

const cprog = `
#include <stdio.h>
int main() {
   // printf() displays the string inside quotation
   printf("Hello, World!\n");
   return 0;
}
`;

runC(cprog, (output) => { console.log("StdOut: " + output);});
```

## Building Project

Make sure [emscripten](https://emscripten.org/docs/getting_started/index.html) is installed and sourced.
Then you can simply run:

```
yarn build
```

Should build the latest version and compile it into bundle.js
