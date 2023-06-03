const textHider = (text, maxText) => {
  return text.length <= maxText ? text : `${text.slice(0, maxText)}...`;
};

export default textHider;
