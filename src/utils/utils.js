export const removeProperty = (object, id) => {
  const newObj = { ...object };
  console.log(object, id);
  delete newObj[id];
  return newObj;
};
