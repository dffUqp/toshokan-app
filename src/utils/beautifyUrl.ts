export const beautifyUrl = (url: string) => {
  return url.replaceAll(' ', '-').replaceAll(':', '').replaceAll('/', '');
};
