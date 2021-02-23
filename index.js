import PicocModule from 'picoc-js';

export function runC(cprog) {
   const pc = PicocModule();
   pc.onRuntimeInitialized = () => {
      pc.runc(cprog);
   };
}

