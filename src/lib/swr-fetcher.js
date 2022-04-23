export const swrFetcher = (...args) =>
  fetch(...args).then((response) => response.json());
