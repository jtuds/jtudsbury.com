---
layout: post
title:  "Know your history to know your present"
date:   2018-05-02 09:26:23 +0000
categories: posts til
---

Dev filled with buzzwords and concepts and stuff
Can be confusing and feel like there's much to leanr
Boil it down a bit
Look at where the term comes from and why and it gives context to its current usage

Saga = turning long lived transactions into a series (saga) of transactions
- means resources for LLT aren't held for as long and everything is executed partially

- Mention the redux=saga docs has background

As a web developer you are constantly bombarded with buzzwords, new concepts, and ideas. It's hard to not feel overwhelmed sometimes with all of the different things there are to know. It's even harder when the very names of these things don't even seem to make sense. I often find myself looking at a new concept, technique or tool and before I can even begin to learn about it I sit confused about what it even is or does and often because of how it is named.

This most recently happened to me when experimenting with Redux and more specifically Redux-Saga. In an effort to work out what it was and why I might want or need to use it, I headed to the docs, and though they're good, in-depth docs, I still struggled to really understand what the tool was for, and more so why on Earth it was called "Saga". I find that I understand concepts better when I fully understand why they exist and the thinking behind them. I'm sure I could have started to play around with Redux-Saga and I'd find situations where it helped me achieve some goal, but it'd forever nag me that I didn't quite understand the full context of it. So I decided to find out exactly why it was called "Saga"...

A quick bit of searching led me to discover the phrase was originally coined by Hector Garcaa-Molrna in a paper written at Princeton University, aptly named "Sagas". This felt like a good start. It's not just a random name but somebody decided to name it after this for a reason. I looked at the abstract and introduction to the paper, he explains an issue with "long-lived transactions" in that they can hog database resources and prevent shorter transactions from executing in good time. Based on this he proposes a pattern, called a saga, in which these long-lived transactions can be executed as a sequence of transactions, interleaved with other shorter transactions, meaning the shorter ones have many more opportunities to complete without having to wait as long to do so.

To make that a big simpler, you can think about what a saga is. One definition is, "a long, involved story, account, or series of incidents.". So a saga applied to this context is just a way to imagine a resource heavy operation being broken up into a series of related operations. Each individual one taking less time to complete than if they were one complete whole, but still, when applied together, tell the whole story.

So now this kind of makes sense to me. A saga is just a useful name somebody gave to the concept of breaking down long-lived transactions. Armed with this knowledge, when I read back the documentation on Redux-Saga it made a lot more sense now I had some wider context. It doesn't seem to me like the original definition directly maps to how it is applied in Redux, but I can see why the name is the same. As far as I can see, Redux-Saga is a set of tools for managing long term processes and side effects.

Take another example: using `super()` in ES6. As a frontend developer, Javascript is my main programming language and in the last couple of years I have focused on learning about the prototypal nature of it. Couple that with no computer science background and I don't automatically have some of the obvious programming concepts nailed down. So when I first saw `super()` when using React, sure I could work out the general idea of what it was doing just by where in the class it was required and if I look up the Javascript docs there is an ok explanation, but why is it called super? What exactly is going on?. Could I not call `super()` sometimes? If not, when not? And why? Taking the approach I did with React-Saga, I did some quick searching and found that super just refers to "superclasses", or "base classes", or "parent classes". There isn't anything super about it. You could equally call it `callTheParentClassHere()`. That'd make more sense to me, but it's not quite as succinct, so doing some quick research helps to clear everything up.

You don't always need to fully grasp a concept or tool in order to apply it or use it. But when you do have a good grasp, you're better equipped to understand the nuances of how and when to apply it. I've found that knowing your history is a great way to help you understand the present.