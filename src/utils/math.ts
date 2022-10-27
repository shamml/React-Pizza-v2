export const add = (a: number, b: number) => a + b;

import('./math').then((math) => console.log(math.add(16, 26)));
