---
layout: post
title:  "Vanilla Javascript toggle attribute helper"
date:   2017-08-15 09:26:23 +0000
categories: posts
---

Recently when needing to toggle the state of a data attribute using plain vanilla Javascript I found that though there was some articles and helper functions out there for toggling classes, there wasn't any for data attributes, which I imagine are quite common. This is a very straightforward piece of code (more straightforward than toggling classes) but is really useful and it's handy not to have to write these things from scratch every time so hopefully people can find this and use it.

### toggleAttribute
```
function toggleAttribute (el, attr, val) {
	if (el.hasAttribute(attr) && el.getAttribute(attr) === val) {
		el.removeAttribute(attr);
	} else {
		el.setAttribute(attr, val);
	}
};
```
Here's an example of how you might call that function

```
toggleAttribute(document.querySelector('.my-element'), 'data-gonna-toggle', 'true');
```

That will result in the element with a class of `.my-element` having the attribute `data-gonna-toggle` toggle between the value being `true` or simply empty. 

This could be expanded further to toggle between two values, e.g. true and false. Though if true doesn't exist you should be able to assume that the value is false, so a better example would be toggling between something non boolean such as "red" and "blue". The function doesn't currently cater for this as currently it just removes the attribute rather than replacing it with a different value but it may be something I look to do in the future.