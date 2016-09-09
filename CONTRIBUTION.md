
## 1. Install dependencies

You have to install all npm dependencies before starting to develop

```
npm install
```

## 2. Development

Make sure you have `gulp-cli` installed ([getting started with Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)) and then you can run this command to launch the watcher.

```
gulp start
```

You can run a tiny http server inside the project directory with `python -m SimpleHTTPServer` and open the *Demo* page at `http://localhost:8000/demo`

## 3. Building

Build the library file inside the `./dist` folder.

```bash
gulp build
```
