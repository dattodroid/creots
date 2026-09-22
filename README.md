> [!CAUTION]
> This extension was created for educational purposes and has undergone no testing. It is neither supported nor endorsed by PTC.

# CreoJS TypeScript Starter Project

Tested with **Creo Parametric 12.4.4.0** and **TypeScript 6**.

### Setup

1. Generate the `creojs` type definitions using: https://github.com/dattodroid/creojs-dts

   Then place the generated package in the `types/` directory.

2. Copy `browser.creojs` and `creojs.js` from:

   ```text
   <CREO_PARAMETRIC>\Common Files\apps\creojs\creojsweb
   ```

   into the `libs/` directory.

   Alternatively, reference these files directly from their original location in `index.html`.

3. Update all paths in **creo_js_app.conf** and **config.pro**.

   `js_path` and `js_permitted_dirs` are required because this project uses Creo.JS modules.

### Build

```bash
npm run build
```

### Test

* Open `index.html` in the Creo Embedded Browser.

### Debug

* From Chrome running on the same machine as Creo, open:

```text
devtools://devtools/bundled/inspector.html?v8only=true&ws=127.0.0.1:8888/debug
```

The debugging port can be configured in **creo_js_app.conf** using the `webserver_port` option.
