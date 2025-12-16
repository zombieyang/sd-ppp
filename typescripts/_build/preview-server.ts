import http from "http";
import fs from "fs";
import path from "path";
import url from "url";

const PORT = Number(process.env.PREVIEW_PORT || 5173);
const projectRoot = path.resolve(__dirname, "../..");
const baseDir = path.join(projectRoot, "plugins", "photoshop");

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url || "/");
  let pathname = decodeURIComponent(parsed.pathname || "/");

  if (pathname === "/" || pathname === "") {
    pathname = "/preview.html";
  }

  const filePath = path.join(baseDir, pathname);
  if (!filePath.startsWith(baseDir)) {
    res.statusCode = 403;
    return res.end("Forbidden");
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.statusCode = 404;
      return res.end("Not Found");
    }
    if (stats.isDirectory()) {
      res.statusCode = 403;
      return res.end("Forbidden");
    }
    const ext = path.extname(filePath).toLowerCase();
    const type =
      ext === ".html"
        ? "text/html"
        : ext === ".js"
        ? "application/javascript"
        : ext === ".css"
        ? "text/css"
        : ext === ".svg"
        ? "image/svg+xml"
        : "application/octet-stream";
    res.setHeader("Content-Type", type);
    res.setHeader("Cache-Control", "no-cache");
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`[preview] http://localhost:${PORT}/`);
});
