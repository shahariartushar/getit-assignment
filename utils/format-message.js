module.exports = formatErrorMessage = (data) => {
  //console.log(data);
  var errorString = JSON.stringify(data);
  var errorMessage =
    "Error occured. Reason(s)- " +
    errorString
      .replaceAll("{", "")
      .replaceAll("}", "")
      .replaceAll(",", " && ")
      .replaceAll(":", " : ")
      .replaceAll('"', "");

  return errorMessage;
};
