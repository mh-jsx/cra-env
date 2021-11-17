// • filtered the values (check undefined, null, empty string)
// • return concatenated query string

export const GetValidatedQueryStrings = (query) => {
  let string = "";
  const keys = Object.keys(query);

  keys.forEach((key, index) => {
    if (query[key] !== "" && query[key] !== null && query[key] !== undefined) {
      string = string.concat(`${key}=${query[key]}&`);
    }
  });

  let queryString =
    string && string !== "" && `?${string.substring(0, string.length - 1)}`;

  return queryString;
};
