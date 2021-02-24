Module['noInitialRun'] = true;
const __dirname = "";
Module['print'] = (a) => { 
  let f = Module['consoleWrite'] || console.log.bind(console);
  f(a);
}
