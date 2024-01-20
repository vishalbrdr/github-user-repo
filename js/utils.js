function formatDate(datestring) {
  let options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(datestring);

  const fDate = new Intl.DateTimeFormat(undefined, options).format(date);
  return fDate;
}
