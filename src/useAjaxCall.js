function waitFor(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export async function mySlowAjaxCall(param) {
  console.log('i am about to start');
  await waitFor(2000);
  console.log('i am done');
  return param * 2;
}

let prevParam = null;
let prevResult = null;
let currPromise = null;

export function useMySlowAjaxCall(param) {
  if (currPromise) {
    throw currPromise;
  }

  if (param !== prevParam) {
    prevParam = param;
    currPromise = new Promise(async (resolve) => {
      const result = await mySlowAjaxCall(param);
      prevResult = result;
      currPromise = null;
      resolve();
    })
    throw currPromise;
  }

  return prevResult;
}