---
layout: post
title:  "TIL - The Javascript spread operator"
date:   2018-02-14 15:23:23 +0000
categories: posts til
---

### The Javascript spread operator
The spread operator is one of those recent additions to Javascript that I've heard people mention and seen written on blogs but never actually got chance to use. I've looked it up a couple of times but as is usually the case with this kind of the thing, the docs just go straight over my head. It's difficult to see what something is for without context or a use case. Yesterday I came across a use case in one of my projects. I was setting up event listeners on some form elements but the elements were in the form of a `NodeList`. I've written about using `Array.from` before to solve this issue and change the `NodeList` to an `Array` but of of curiosity I had a look around to see if anyone had any other solutions other than the more hackier feeling ones I've seen in the past. I came across somebody suggesting using the spread operator and by having the context around why I might use it, it suddenly made sense what this new feature could do.

It helps me to think of the spread operator almost like the expand operator. It takes a collection of stuff and expands (spreads) it out. Here is how I used spread in my example:

```
const inputs = document.querySelectorAll('input'); // returns a NodeList
[...inputs].map(input => {
	Helpers.addEvent(input, 'focus', function() {
		handleFocus(input);
	});
});
```

The key bit to look at here is `[...inputs]`. The square brackets mean that whatever is inside of them is going to be turned in to an array, which is what I need to map over. The spread operator (`...`) inside of the square brackets expands the `NodeList`, going over each item one by one, with each item in the list being inserted as an item in the array. That's pretty much it.

Once you understand that the spread operator is just a tool for expanding values you can start to see where it could be used. Take this example from MDN:

```
var parts = ['shoulders', 'knees']; 
var lyrics = ['head', ...parts, 'and', 'toes']; 
// ["head", "shoulders", "knees", "and", "toes"]
```

You can see how the spread operator has expanded the `parts` array and slotted each of the items in to the `lyrics` array. Without the spread operator you might do something like this:

```
var parts = ['shoulders', 'knees']; 
var lyrics = ['head'];
parts.forEach(function(value) {
	lyrics.push(value);
});
lyrics.push('and', 'toes');
// ["head", "shoulders", "knees", "and", "toes"]
```

Which is much more convoluted and imperative.