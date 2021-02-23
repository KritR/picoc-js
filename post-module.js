function runc(cstr) {
  FS.writeFile("file.c", cstr);
  callMain(["file.c"]);
  return FS.readFile("file.c");
}

Module['runc'] = runc;
