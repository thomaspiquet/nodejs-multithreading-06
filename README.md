# NodeJS Multithreading 06

Kill Worker

### Environment :
```
NodeJS minimal version: v12.x.x LTS (Erbium)
NodeJS recommended version: Latest LTS version
Dev Language: TypeScript (ES6)
Run Language: JavaScript
```
See [Latest NodeJS LTS version](https://nodejs.org/)

### How to run

#### First

Install packages

```
npm run i
```

#### Then

To run in Development
```
npm run start:dev
```

To run in Production
```
npm run start
```

## Explanations

You can also manually kill a thread

### Main Thread Side

```ts
setTimeout(() => {
  console.log(`[Main] Try to kill worker`);
  myWorker.terminate();
}, 3000);
```

After 3 000 milliseconds, main thread will try to kill his worker.

## Next Chapter

Multithreading 07 - Example : Prime Number
https://github.com/thomaspiquet/nodejs-multithreading-07