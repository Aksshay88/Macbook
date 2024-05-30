This is the components readme where more comp will be added 

# Installation
<img src="">

# 3D Card Effect
  A card perspective effect, hover over the card to elevate card elements.</br>
`Card` `Background` `Special`

## Install dependencies

```bash
npm i framer-motion clsx tailwind-merge
```

## Add util file

// utils/cn.ts

``` bash
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```
Now create a Component/ui/3d-card.tsx

Copy and paste the code and in the component put the main code that has been given the official website 

# Tracing Beam

<img src="">



