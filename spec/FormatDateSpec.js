const FormatDate = require('../src/FormatDate.js');

describe('FormatDate', function() {
  var date;

  it('is defined', function() {
    expect(FormatDate).toBeDefined();
  });

  it('has getStyledDate prototype defined', function() {
    date = new FormatDate;
    expect(date.getStyledDate).toBeDefined();
  });
});
