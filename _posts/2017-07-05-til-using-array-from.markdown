---
layout: post
title:  "TIL - Using Array.from"
date:   2017-07-05 09:26:23 +0000
categories: posts til
---

This is my first attempt at writing post based on something I have learned today (or recently), hence the name TIL. These posts are intended to be short tidbits of learnings and stuff I've picked up, partly for my own benefit and hopefully for others too!

### Using Array.from
I have come up against an issue a few times when trying to do something with what I thought was an array but actually turned out to be array like `NodeList`. When working with DOM elements, using something like `querySelectorAll('.elements')` will return an object of the type `NodeList` rather than of the type `Array`. Some browsers don't play too well with this when you use functions on the `NodeList`. For example until last year using `forEach` on a `NodeList` in Chrome wouldn't work, because `NodeLists` weren't iterable like `Arrays` are. There are some hacky solutions to converting array like objects to real Arrays but `Array.from` makes it simple, readable and concise.

Let's say we have a `NodeList` called `myNodeList`. Simply do `Array.from(myNodeList)` and you'll be returned an `Array`.

As browser support for doing things like using `forEach` on a `NodeList` improves, that particular use case will become less common, however you can still use it in cases such as turning a string into an array of characters, e.g. `Array.from('Hello')` would become `["H", "e", "l", "l", "o"]`