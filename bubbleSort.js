// def sort
//   return cards if cards.length <= 1
//   flip = true
//   while flip do
//     flip = false
//     0.upto(cards.length - 2) do |i|
//       if cards[i].card_id > cards[i + 1].card_id
//         cards[i], cards[i + 1] = cards[i + 1], cards[i]
//         flip = true
//       end
//     end
//   end
//   cards
// end

function bubbleSort(a) {
  sa = Array.from(a);
  var flip;
  do {
    flip = false;
    for (var i = 1; i < sa.length; ++i) {
      if (sa[i - 1] > sa[i]) {
        [ sa[i], sa[i - 1] ] = [ sa[i - 1], sa[i] ];
        flip = true;
      }
    }
  } while (flip == true)
  return sa;
}

module.exports = bubbleSort
