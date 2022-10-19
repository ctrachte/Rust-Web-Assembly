import("./node_modules/rust_web_assembly/rust_web_assembly").then((js) => {
  console.log(js)
    js.greet("WebAssembly with npm");
  });