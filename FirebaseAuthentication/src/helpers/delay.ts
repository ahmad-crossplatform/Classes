/**
 * Delaying the process for some time.
 * @param milisec number of miliseconds to wait
 */
export const Delay = async (milisec: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milisec);
  });
};
