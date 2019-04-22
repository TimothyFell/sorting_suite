function mergeSort(a) {
  // return original array if length < or = to 1
  if (a.length === 1 || a.length === 0) {
    return a
  }

  // split array into two parts based upon midpoint
  var mid = Math.floor(a.length/2);
  var left = a.slice(0,mid);
  var right = a.slice(mid);

  // return merged array that recursively sorts the two parts
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right) {
  // compare indices and concatenate results
  var merged = []
  var leftIndex = 0
  var rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex])
      leftIndex++
    } else {
      merged.push(right[rightIndex])
      rightIndex++
    }
  }

  return merged.
  concat(left.slice(leftIndex)).
  concat(right.slice(rightIndex))
}

module.exports = mergeSort
