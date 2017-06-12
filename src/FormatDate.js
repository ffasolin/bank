function FormatDate() {}

FormatDate.prototype.getStyledDate = function() {
  var date = new Date();
  return `${date.getDate()}/0${date.getMonth() + 1}/${date.getFullYear()}`;
};

module.exports = FormatDate;
