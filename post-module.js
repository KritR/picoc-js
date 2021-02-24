function runc(cstr, consoleWrite) {
  Module['consoleWrite'] = consoleWrite;
  FS.writeFile("file.c", cstr);
  callMain(["file.c"]);
  return FS.readFile("file.c");
}

Module['runc'] = runc;
