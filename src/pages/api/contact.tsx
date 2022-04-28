import fs from "fs";

const filename = "/public/contact.html";

export default async function api(req, res) {
  res.setHeader("content-type", "text/html; charset=utf-8");
  res.write(await fs.readFileSync(filename, "utf-8"));
  res.end();
}
