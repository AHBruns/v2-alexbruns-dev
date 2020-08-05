function addSeparators(arr, sep) {
  const newArr = arr.flatMap((x) => {
    return [x, sep];
  });
  newArr.pop();
  return newArr;
}
