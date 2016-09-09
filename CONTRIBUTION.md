
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


## 4. Release
When the development process is finished you are ready to prepare the deploy. First you have to bump the release version by running one of these:

**PATCH RELEASE**
```gulp bump```


**MINOR RELEASE**
```gulp bump --minor```


**MAJOR RELEASE**
```gulp bump --major```

Then you have to generate the changelog by running this command:

```gulp changelog```


Yeah! You are ready to push and release. Use the latest changelog inside the github release description.
