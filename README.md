README
======

Frontend for Watchdog (previously NewsdiffHK) project.

Install
-------

The server depends on packages. The serving scripts needs to build into bundle before running. Run these commands.

```bash
npm install
npm run build
```

Run
---

To start the server:

```bash
npm run start
```

The server will prompt you to enter the API_BASE_URL. To suppress the prompt, you may also add API_BASE_URL to the environment like this:

```bash
API_BASE_URL=http://api.server.com:3000/api npm run start
```

Replace `http://api.server.com:3000` with the appropriate host and port number.
