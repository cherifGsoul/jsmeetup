var stealTools = require("steal-tools");

/*stealTools.export({
  system: {
    main: "app",
    config: __dirname + "/package.json!npm"
  },
  outputs: {
    
	'+cjs': {},
	'+amd': {},
	'+global-js': {},
	'+global-css': {}
	
  }
});*/

var buildPromise = stealTools.build({
  config: __dirname + "/package.json!npm"
},{
  minify: true
});