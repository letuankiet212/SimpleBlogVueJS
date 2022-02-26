export const toDateString = (dateNeedFormat, type_request) => {
  const date = new Date(dateNeedFormat);
  let result = '';
  switch (type_request) {
    case 'date':
      result = date.toLocaleDateString();
      break;
  }
  return result;
};
