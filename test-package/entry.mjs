// Note, we are consuming a cjs module from within an esm module.
// This `mjs` file should be bundled according to the `vite.config.js` and
// should not cause an issue.
import stream from "./stream.js";

export default stream;
