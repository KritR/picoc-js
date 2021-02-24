import PicocModule from './picoc';

export function runC(cprog, consoleWrite=null) {
   const pc = PicocModule();
   pc.onRuntimeInitialized = () => {
      pc.runc(cprog, consoleWrite);
   };
}

