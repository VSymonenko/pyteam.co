# PWA

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run end-to-end tests
```
npm run test:e2e
```

### Run unit tests
```
npm run test:unit
```

## Configuration

**Win 10**

* install vue cli 3

  `npm install -g @vue/cli`

* Configuration local dev host

  1. Press `win+r`.
  2. Enter `notepad`.
  3. Open nodepad as administrator. Press `ctrl+shift+enter`.
  4. Open file **hosts**. Press `ctrl+o` and paste string `%SystemRoot%\system32\drivers\etc` in address bar. Select **all files** and choose file **hosts**, click **open** or press `enter`.
  5. Append string `127.0.0.1       local.pyteam.co` in end file.
  6. Save file `ctrl+s`.

* Configuration e2e test selenium-webdriver

  Install [JAVA JDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html)

  Edit **path**
  1. Press `win+r`.
  2. Enter `sysdm.cpl`.
  3. Go to `Advanced` tab.
  4. Open `Environment Variables`.
  5. Append string `C:\Program Files\Java\{current jdk version}\bin` to `path` variable.

## TODO: