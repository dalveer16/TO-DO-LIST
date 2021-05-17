module.exports.getDate = getDate;
function getDate() {
  let today = new Date();
  var option = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = today.toLocaleDateString("en-us", option);
  return day;
}
module.exports.getDay= getDay;
function getDay() {
  let today = new Date();
  var option = {
    weekday: "long",
  };
  let day = today.toLocaleDateString("en-us", option);
  return day;
}
