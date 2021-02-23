import PicocModule from './picoc';

export function runC(cprog) {
   const pc = PicocModule();
   pc.onRuntimeInitialized = () => {
      pc.runc(cprog);
   };
}

