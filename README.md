# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

If the input array is already sorted, we get the best case which is $\Theta(n)$

If the input array is reverse sorted, we get the worst case time complexity $\Theta(n^2)$

Assuming for the average case the input array is about halfway sorted, the algorithm would have to sort half of the input elements or n/2.
That would mean it would take $\Theta((n/2)^2)$ as it goes through each element and only having to sort half of them.
Since asymtotical constants are ignored, the average case of insertion sort is $\Theta(n^2)$

I looked at the Wikipedia insertion sort page [here](https://en.wikipedia.org/wiki/Insertion_sort#:~:text=The%20outer%20loop%20runs%20over,A%5B-1%5D%20fails) for a review understanding

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.


