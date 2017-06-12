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

  it('returns date as dd/mm/yyyy', function() {
    date = new FormatDate;
    expect(date.getStyledDate()).toBe('12/06/2017');
  });
});
