import { join, parse } from "path";
import { createInterface } from "readline";
import pkg from "fs-extra";

// TODO automate the docs process from the unity repo
// 1. build the unity repo and generate the XML docs using doxygen (no easy command line tool) into /path-to/unity-sdk/Documentation/xml/
// 2. install moxygen and run `moxygen --anchors --classes --output docs/unity/%s.md --templates scripts/moxygen/template/cpp /path-to/unity-sdk/Documentation/xml/` from the root of docs
// 3. run this script to fix the docs

const { readdir, createReadStream, writeFile, readFile, remove } = pkg;
// This script is not part of faast.js, but rather a tool to rewrite some parts
// of the generated docs from api-generator and api-documenter so they work with
// the website generated by docusaurus.

const outDir = "./docs/unity";
const inDir = outDir;

pkg.ensureDirSync(outDir);

async function main() {
  const docFiles = await readdir(inDir);
  for (const docFile of docFiles) {
    try {
      const { name: id, ext } = parse(docFile);
      if (ext !== ".md" || id === "index") {
        continue;
      }

      const docPath = join(inDir, docFile);
      const docPathOut = join(outDir, docFile);
      const input = createReadStream(docPath);
      const output = [];
      const lines = createInterface({
        input,
        crlfDelay: Infinity,
      });

      let title = "";
      lines.on("line", (line) => {
        let skip = false;
        if (!title) {
          const titleLine = line.match(/## (.*)/);
          if (titleLine) {
            title = titleLine[1];
          }
        }

        const homeLink = line.match(/\[Home\]\(.\/index\.md\) &gt; (.*)/);
        if (homeLink) {
          //skip the breadcrumb line alltogether
          return;
        }
        // See issue #4. api-documenter expects \| to escape table
        // column delimiters, but docusaurus uses a markdown processor
        // that doesn't support this. Replace with an escape sequence
        // that renders |.
        if (line.startsWith("|")) {
          line = line.replace(/\\\|/g, "&#124;");
        }
        if (line.includes("<b>")) {
          line = line.replace(/<b>/g, "**");
        }
        if (line.includes("</b>")) {
          line = line.replace(/<\/b>/g, "**");
        }
        if (line.includes("<!-- -->")) {
          line = line.replace(/<!-- -->/g, "");
        }

        // remove namespaces
        if (line.includes("Web3sdkio::")) {
          line = line.replace(/Web3sdkio::/g, "");
        }

        output.push(line);
      });

      await new Promise((resolve) => lines.once("close", resolve));
      input.close();

      await writeFile(docPathOut.replace("Web3sdkio::", ""), output.join("\n"));
      if (docPath.includes("Web3sdkio::")) {
        await remove(docPath);
      }
    } catch (err) {
      console.error(`Could not process ${docFile}: ${err}`);
    }
  }
}

main();
