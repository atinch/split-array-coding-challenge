const parametersValid = (array, size) => {
  const lenghtParameterValid = size >= 1;
  const arrayParameterValid = !!array && Array.isArray(array);
  return lenghtParameterValid && arrayParameterValid;
};

export const groupArrayElements = (array, size) => {
  if (!parametersValid(array, size)) throw "invalid parameters";

  // used minus rounding for proper results
  let lengthPerItem = -Math.round(-array.length / size);
  //if size is too big, lengthPerItem will be 0, prevent this by:
  if (lengthPerItem < 1) lengthPerItem = 1;
  let result = [];
  //fill result except last item
  while (result.length < size - 1) {
    const newItem = array.splice(0, lengthPerItem);
    result.push(newItem);
  }

  //add reminder item
  result.push(array);

  return result;
};
