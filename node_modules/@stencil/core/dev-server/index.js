function _interopDefault(e) {
 return e && "object" == typeof e && "default" in e ? e.default : e;
}

function emitMessageToClient(e, r, t, s) {
 if ("buildFinish" === t) {
  r.isActivelyBuilding = !1, r.lastBuildResults = Object.assign({}, s);
  const t = {
   buildResults: Object.assign({}, s)
  };
  e.send(t);
 } else if ("buildStart" === t) r.isActivelyBuilding = !0; else if ("buildLog" === t) {
  const r = {
   buildLog: Object.assign({}, s)
  };
  e.send(r);
 }
}

async function openInBrowser(e) {
 await open(e.url);
}

var isDocker_1, isWsl_1, open;

const child_process = require("child_process"), child_process__default = _interopDefault(child_process), path = _interopDefault(require("path")), util = _interopDefault(require("util")), fs = _interopDefault(require("fs")), url = _interopDefault(require("url")), os = _interopDefault(require("os")), backslashRegExp = /\\/g, getEncodedRootLength = e => {
 if (!e) return 0;
 const r = e.charCodeAt(0);
 if (47 === r || 92 === r) {
  if (e.charCodeAt(1) !== r) return 1;
  const t = e.indexOf(47 === r ? "/" : "\\", 2);
  return t < 0 ? e.length : t + 1;
 }
 if (isVolumeCharacter(r) && 58 === e.charCodeAt(1)) {
  const r = e.charCodeAt(2);
  if (47 === r || 92 === r) return 3;
  if (2 === e.length) return 2;
 }
 const t = e.indexOf("://");
 if (-1 !== t) {
  const r = t + "://".length, s = e.indexOf("/", r);
  if (-1 !== s) {
   const o = e.slice(0, t), i = e.slice(r, s);
   if ("file" === o && ("" === i || "localhost" === i) && isVolumeCharacter(e.charCodeAt(s + 1))) {
    const r = getFileUrlVolumeSeparatorEnd(e, s + 2);
    if (-1 !== r) {
     if (47 === e.charCodeAt(r)) return ~(r + 1);
     if (r === e.length) return ~r;
    }
   }
   return ~(s + 1);
  }
  return ~e.length;
 }
 return 0;
}, isVolumeCharacter = e => e >= 97 && e <= 122 || e >= 65 && e <= 90, getFileUrlVolumeSeparatorEnd = (e, r) => {
 const t = e.charCodeAt(r);
 if (58 === t) return r + 1;
 if (37 === t && 51 === e.charCodeAt(r + 1)) {
  const t = e.charCodeAt(r + 2);
  if (97 === t || 65 === t) return r + 3;
 }
 return -1;
};

let isDocker;

isDocker_1 = () => (void 0 === isDocker && (isDocker = function e() {
 try {
  return fs.statSync("/.dockerenv"), !0;
 } catch (e) {
  return !1;
 }
}() || function r() {
 try {
  return fs.readFileSync("/proc/self/cgroup", "utf8").includes("docker");
 } catch (e) {
  return !1;
 }
}()), isDocker), isWsl_1 = function createCommonjsModule(e, r, t) {
 return e(t = {
  path: r,
  exports: {},
  require: function(e, r) {
   return function s() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
   }(null == r && t.path);
  }
 }, t.exports), t.exports;
}((function(e) {
 const r = () => {
  if ("linux" !== process.platform) return !1;
  if (os.release().toLowerCase().includes("microsoft")) return !isDocker_1();
  try {
   return !!fs.readFileSync("/proc/version", "utf8").toLowerCase().includes("microsoft") && !isDocker_1();
  } catch (e) {
   return !1;
  }
 };
 process.env.__IS_WSL_TEST__ ? e.exports = r : e.exports = r();
}));

const {promisify} = util, pAccess = promisify(fs.access), pExecFile = promisify(child_process__default.execFile), localXdgOpenPath = path.join(__dirname, "xdg-open");

open = async (e, r) => {
 if ("string" != typeof e) throw new TypeError("Expected a `target`");
 let t;
 r = {
  wait: !1,
  background: !1,
  url: !1,
  allowNonzeroExitCode: !1,
  ...r
 };
 let s = [];
 const o = [], i = {};
 if (Array.isArray(r.app) && (s = r.app.slice(1), r.app = r.app[0]), r.url && (e = new url.URL(e).href, 
 isWsl_1 && (e = e.replace(/&/g, "^&"))), "darwin" === process.platform) t = "open", 
 r.wait && o.push("--wait-apps"), r.background && o.push("--background"), r.app && o.push("-a", r.app); else if ("win32" === process.platform || isWsl_1 && !isDocker_1()) {
  if (t = "cmd" + (isWsl_1 ? ".exe" : ""), o.push("/s", "/c", "start", '""', "/b"), 
  isWsl_1 || (e = `"${e}"`, i.windowsVerbatimArguments = !0, r.app && (r.app = `"${r.app}"`)), 
  r.wait && o.push("/wait"), r.app) {
   if (isWsl_1 && r.app.startsWith("/mnt/")) {
    const e = await (async e => {
     const {stdout: r} = await pExecFile("wslpath", [ "-w", e ]);
     return r.trim();
    })(r.app);
    r.app = e;
   }
   o.push(r.app);
  }
  s.length > 0 && o.push(...s);
 } else {
  if (r.app) t = r.app; else {
   const e = !__dirname || "/" === __dirname;
   let r = !1;
   try {
    await pAccess(localXdgOpenPath, fs.constants.X_OK), r = !0;
   } catch (e) {}
   t = process.versions.electron || "android" === process.platform || e || !r ? "xdg-open" : localXdgOpenPath;
  }
  s.length > 0 && o.push(...s), r.wait || (i.stdio = "ignore", i.detached = !0);
 }
 o.push(e), "darwin" === process.platform && s.length > 0 && o.push("--args", ...s);
 const n = child_process__default.spawn(t, o, i);
 return r.wait ? new Promise((e, t) => {
  n.once("error", t), n.once("close", s => {
   r.allowNonzeroExitCode && s > 0 ? t(new Error("Exited with code " + s)) : e(n);
  });
 }) : (n.unref(), n);
}, exports.openInBrowser = openInBrowser, exports.start = async function start(e, r, t) {
 let s = null;
 const o = Object.assign({}, e), i = r.createTimeSpan("starting dev server", !0);
 try {
  o.devServerDir = __dirname;
  const e = require.resolve(path.join(o.devServerDir, "server-worker.js")), n = {
   execArgv: process.execArgv.filter(e => !/^--(debug|inspect)/.test(e)),
   env: process.env,
   cwd: process.cwd(),
   stdio: [ "pipe", "pipe", "pipe", "ipc" ]
  }, l = child_process.fork(e, [], n), a = {
   isActivelyBuilding: !1,
   lastBuildResults: null
  }, c = await function n(e, r, t, s, o) {
   let i = !1;
   return new Promise((n, l) => (s.stdout.on("data", e => {
    r.debug("dev server: " + e);
   }), s.stderr.on("data", e => {
    r.error(`dev server error: ${e}, hasStarted: ${i}`), i || l("dev server error: " + e);
   }), s.on("message", async a => {
    if (a.serverStarted) a.serverStarted.error ? l(a.serverStarted.error) : (i = !0, 
    e.openBrowser && a.serverStarted.initialLoadUrl && openInBrowser({
     url: a.serverStarted.initialLoadUrl
    }), n(a.serverStarted)); else if (a.requestBuildResults) if (null != o.lastBuildResults) {
     const e = {
      buildResults: Object.assign({}, o.lastBuildResults),
      isActivelyBuilding: o.isActivelyBuilding
     };
     delete e.buildResults.hmr, s.send(e);
    } else {
     const e = {
      isActivelyBuilding: !0
     };
     s.send(e);
    } else if (a.compilerRequestPath && t && t.request) {
     const e = {
      resolveId: a.resolveId,
      compilerRequestResults: await t.request({
       path: a.compilerRequestPath
      })
     };
     s.send(e);
    } else if (a.error) {
     if (a.error.message) if ("string" == typeof a.error.message) r.error(a.error.message); else try {
      r.error(JSON.stringify(a.error.message));
     } catch (e) {
      console.error(e);
     }
     r.debug(a.error);
    } else if (a.requestLog) {
     const e = a.requestLog;
     let t;
     return t = e.status >= 400 ? r.red(e.method) : e.status >= 300 ? r.magenta(e.method) : r.cyan(e.method), 
     void r.info(r.dim(`${t} ${e.url}`));
    }
   }), s.send({
    startServer: e
   }), e));
  }(o, r, t, l, a);
  let u = null;
  t && (u = t.on((e, r) => {
   emitMessageToClient(l, a, e, r);
  })), path.isAbsolute(c.root) || (c.root = path.join(process.cwd(), c.root)), c.root = (e => {
   if ("string" != typeof e) throw new Error("invalid path to normalize");
   const r = (e => {
    if (!Array.isArray(e) || 0 === e.length) return [];
    const r = [ e[0] ];
    for (let t = 1; t < e.length; t++) {
     const s = e[t];
     if (s && "." !== s) {
      if (".." === s) if (r.length > 1) {
       if (".." !== r[r.length - 1]) {
        r.pop();
        continue;
       }
      } else if (r[0]) continue;
      r.push(s);
     }
    }
    return r;
   })(((e, r) => {
    const t = e.substring(0, r), s = e.substring(r).split("/"), o = s.length;
    return o > 0 && !s[o - 1] && s.pop(), [ t, ...s ];
   })(e = (e => e.replace(backslashRegExp, "/"))(e.trim()), (e => {
    const r = getEncodedRootLength(e);
    return r < 0 ? ~r : r;
   })(e))), t = r[0], s = r[1], o = t + r.slice(1).join("/");
   return "" === o ? "." : "" === t && s && e.includes("/") && !s.startsWith(".") && !s.startsWith("@") ? "./" + o : o;
  })(c.root), s = {
   address: c.address,
   basePath: c.basePath,
   browserUrl: c.browserUrl,
   port: c.port,
   protocol: c.protocol,
   root: c.root,
   close() {
    try {
     l && l.kill("SIGINT"), u && (u(), u = null);
    } catch (e) {}
    return r.debug("dev server closed, port " + c.port), Promise.resolve();
   },
   emit(e, r) {
    emitMessageToClient(l, a, e, r);
   }
  }, i.finish("dev server started: " + c.browserUrl);
 } catch (e) {
  console.error("dev server error: " + e);
 }
 return s;
};