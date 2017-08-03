---
layout: post
title:  "TIL - [] === [] // false. What?"
date:   2017-08-03 09:26:23 +0000
categories: posts til
---

Javascript is weird. Today I learned that the result of `[] === []` is not `true` as you might suspect but is in fact `false`. To add to the strange, `[] == ![]` equals `true`. What?

Turns out what is happening when you do `[] === []` is that under the hood, this comparison really looks like `new Array() === new Array()`. When you see it like that, it becomes a bit clearer why it returns `false`. The `new` keyword is creating a new instance of an array object for each of the two `[]` (array literals). So when asking whether the two are the same with the strict equality `===` comparator, they aren't, they're two separate instances of an array object.

In the case of `[] == ![]` resulting in `true`, what's happening here is we're trying to compare an object to a boolean (`![]` is equal to `false`). So Javascript uses coercion on the values on both the left and right of the comparator until they are the same type. Essentially:

```
=> []==![]

=> []==false // Type conversion by the statement itself

=> []==0 // To number of right operand

=> ""==0 // To Primitive call for Array which will in this case convert to empty string

=> 0==0 // To number call of "" which is 0

=> true
```

(the above snippet is courtesy of [Stack Overflow](https://stackoverflow.com/a/45444600/4969010))

So as you can see, both `[]` and `![]` get coerced to 0, making `[] == ![]` equal `true`. If we were to use the strict equals comparator (`===`), coercion wouldn't occur and we'd get `false`. There's an argument for never using `==` but that's not for this post!

Little bits of weirdness like this are nice ways to learn a little more about Javascript and I'd encourage anyone trying to learn how Javascript works along with all its caveats to open up the console and just play around with stuff.