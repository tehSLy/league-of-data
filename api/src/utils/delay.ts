export function delay<T>(ms: number, resolveWith?: T) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(resolveWith);
    }, ms);
  });
}
