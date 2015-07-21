import { formattedDate } from '../../../helpers/formatted-date';
import { module, test } from 'qunit';

module('Unit | Helper | formatted date');

test('it works', function(assert) {
  var date = new Date(2015, 1, 1, 0, 0);
  var result = formattedDate(date, 'LL');
  assert.equal(result, 'February 1, 2015');
});
