const expect = require('chai').expect
const bubbleSort = require('../bubbleSort')

describe('Bubble Sort', function() {
  it('it can sort an array of numbers', function(){
    var initial = [6,4,2,8,11];
    var sorted = bubbleSort(initial);

    var expected = [2,4,6,8,11];

    expect(sorted[0]).to.equal(expected[0]);
    expect(sorted[1]).to.equal(expected[1]);
    expect(sorted[2]).to.equal(expected[2]);
    expect(sorted[3]).to.equal(expected[3]);
    expect(sorted[4]).to.equal(expected[4]);
  })
  it('it can sort an array of letters', function(){
    var initial = ['c','a','z','g','t'];
    var sorted = bubbleSort(initial);

    var expected = ['a','c','g','t','z'];

    expect(sorted[0]).to.equal(expected[0]);
    expect(sorted[1]).to.equal(expected[1]);
    expect(sorted[2]).to.equal(expected[2]);
    expect(sorted[3]).to.equal(expected[3]);
    expect(sorted[4]).to.equal(expected[4]);
  })
})
