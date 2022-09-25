module.exports = function (argv = process.argv) {
  const args = argv.slice(2);
  const flags = {};
  
  const allFlags = args.filter(x => x.startsWith("-"));
  
  for (const flag of allFlags) {
    if (flag.startsWith("--") && flag.includes("=")) {
      const [, name, value] = flag.match(/--([a-zA-Z]{0,})=([a-zA-Z0-9]{0,})/)
      
      flags[name] = value;
    } else {
      const name = flag.replace(/-/g, "")
      flags[name] = true;
    }
    
    args.splice(args.indexOf(flag), 1);
  }
  
  return { args, flags };
}