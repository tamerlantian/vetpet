export const uppercaseFirstLetter = (text) => {
  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
};

export default uppercaseFirstLetter;
