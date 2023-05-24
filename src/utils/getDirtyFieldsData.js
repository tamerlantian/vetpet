const getDirtyFieldsData = (formData, dirtyFields) => {
  dirtyFields = Object.keys(dirtyFields);
  const fieldSelector = Object.entries(formData).filter((formField) =>
    dirtyFields.includes(formField[0])
  );
  return Object.fromEntries(fieldSelector);
};

export default getDirtyFieldsData