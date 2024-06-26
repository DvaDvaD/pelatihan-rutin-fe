export const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, delay);
  });
};
