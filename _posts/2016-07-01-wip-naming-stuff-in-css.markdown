---
layout: post
title:  "WIP - Naming stuff in CSS"
date:   2016-07-01 13:24:23 +0000
categories: posts css sass
---

Naming stuff in CSS is easy. If you forget about reusability, DRY (don't repeat yourself), OOCSS (object orientated CSS), component based CSS, and reusable patterns, then it really is easy. Class names such as `.homepage-article-big`, `.homepage-article-big-alt` and `.homepage-article-big-alt-2` mean you can add classes and tailor them till your hearts content without ever really considering what a good name might constitute. If you do care about all those things I mentioned, and you probably should if you want to build a scalable and future proof design system, then naming stuff in CSS isn't easy, it's really really hard.

Of course this is nothing new and it's a well documented issue with plenty of articles, discussions, methodologies and techniques devised to help with it. One of the biggest helps I have come across in recent years is the BEM methodology. I won't go in to it in detail here because it has already been explained in numerous articles but if you haven't heard of it I would recommend starting with [Harry Robert's article on the subject](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/). In summary, BEM gives you a structured way to name your CSS classes. Most importantly it forces you to think about what type of class something is. Is it a block, a top level class that will encompass other classes, e.g. ".human"? Is it an element, a child of the block, e.g. ".human__eye"? Or is it a modifier, something that is a variation of the element, e.g. ".human__eye--blue"? Thinking in this way, or in the way of any of the other methodologies such as OOCSS (and they can all work together, mostly) means that your class names are probably pretty good and you're avoiding code like this

```
.about-section {}
.homepage.about-section {}
.contact-page.about-section {}
.contact-page.about-section-alt {}
```

The above code will do a job, but it's not reusable, it's hard to maintain, and it's probably going to break at some point.

The issue I have come across on multiple projects and for some time now is what to name things that are similar, but not similar enough to be the same block or component. For example I might have a class called '.card' which has some padding, a border radius and a box shadow. This is all fine because I can add those styles to my `.card` class like so

```
.card {
	padding:20px;
	box-shadow: 1px 1px 1px #000;
	border-radius:2px;
}
```

If I then have a component very much like `.card` but need less padding I have to identify that somehow. You could add a class like `.card--small` which adds a modifier on to the card class to signify that it is small. Then your CSS would look something like

```
.card--small {
	padding:10px;
}
```

This variation of `.card` might also require some extra margin, a border, and a transition. This is the point at which our variation of `.card`, though very similar in looks, is starting to become a different thing in code. You could continue to use modifiers in a few different ways. The first of which is to name the modifier based on what the modification is doing like

```
.card--margin {
	margin:10px;
}

.card--border {
	border:1px solid red;
}

.card--has-transition {
	transition: all 0.2s;
}
```

This method becomes an issue for me most noticeably when using media queries. If I don't want my card to have a border at less than 600px then at less than 600px my `.card--border` class makes no sense. 

The second way to continue to use modifiers is to not reference the modification directly but do something like this

```
.card--alt {
	margin:10px;
	border:1px solid red;
	transition: all 0.2s;
}
```

This works fine until you have another component similar to `.card` but not quite the same. What do you name that? `.card--alt-2`? It's very convoluted.

You could use a hierarchical based naming system such as

```
.card--primary {
	padding:10px;
}

.card--secondary {
	margin:10px;
	border:1px solid red;
	transition: all 0.2s;
}

.card--tertiary {
	more styles for your other variant of card
}
```

This isn't too bad in my opinion but typing out "quaternary" isn't fun and I don't even know the name for the fifth item in that hierarchical naming system. The other issue with this is that it is a lie. `.card--secondary` is of not less importance or less deserving of a primary label than `.card--primary`. The hierarchical labeling isn't actually a representation of the components it is being used on.

Finally, you could relate the class to the context in which it is being used like this

```
.card--product {
	padding:10px;
}

.card--article-list {
	margin:10px;
	border:1px solid red;
	transition: all 0.2s;
}
```

This works up until the point where your `.card--product` class is required away from a product page (or component). At which point you have to consider renaming the class, or copying the styles within it in to a newly named class, which goes against the DRY principle.

TALK ABOUT MY PARTICULAR PROBLEM WITH NAMING STUFF IN A REUSBALE WAY BUT TOO RELATED TO CONTENT - MAKES IT NOT REUSABLE

So this brings me to the point of this post, a proposed solution. As a developer what I would like the following from my class names;
- They are not a representation of the styles within it (such as `.card--margin`), because styles can change.
- They do not follow a hierarchical naming system, because this adds a layer of meaning that won't always truly represent the class
- They can be extended upon without convoluted naming (such as `.card--alt-2`)
- They can be uniquely identified in a meaningful way. Words are meaningful to me and can be shared, codes and numbers cannot
- They can be reused anywhere and are not tied to context

The idea I have been using to satisfy these requirements is something I'll call "INSERT GREAT NAME HERE" naming. The idea is to give your class names a theme that is unrelated to the code itself and any context it may be used in. For example, say I'm working on a website for a fashion retailer, I could take my card component and call it `.card-athens`. Athens is obviously a city and has nothing directly to do with fashion and it has nothing to do with the styles that I put inside of that element. But it allows me to give the component a name that I can reference, and that others can reference. It attaches meaning to the class, without attaching too much meaning or context. I can reuse `.card-athens` anywhere within the site, regardless of context and it makes sense. I can also extend this class quite easily for when I have similar components that are different in code. According to Google and the World Atlas, there are 4,416 cities in the world. That's a lot of names you have at your disposable (though you probably, definitely, shouldn't have 4,416 card components, but that's another post), you can create 4,416 card components that are all different and have a different identifier but which are much more meaningful to humans than numbers or an ID code.

Let's get in to some examples of SHOW EXAMPLES OF MY IDEAS AND WORK AND THEN GO IN TO IN THE WILD EXAMPLES WITH BBC AND LOTTE JACKSON

TALK ABOUT THE SOLUTION

MENTION THE BBC AND LOTTE JACKSON 

ADD HEADINGS AND ALSO PADDING TO THE CODE SNIPPETS

### "A field guide to web accessibility" - Derek Featherstone [@feather](https://twitter.com/feather)
