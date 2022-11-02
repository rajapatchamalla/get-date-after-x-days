function Days(x) {
  const addDays = require("date-fns/addDays");
  let result = addDays(new Date(2020, 7, 22), x);
  return result.getDate();
}

module.exports = Days;
