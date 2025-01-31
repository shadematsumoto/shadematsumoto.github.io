---
layout: essay
type: essay
title: "Smart Questions, Good Answers"
date: 2025-01-30
published: false
labels:
  - Good Questions
  - Good Answers
  - StackOverflow
---

![RTFM](../img/question-cat.jpg)

## You Experience a Problem...

When faced with a problem, what is the first question that comes to mind? There are many ways to solve an issue, but the way you seek an answer matters just as much as the question itself. Eric Steven Raymond and Rick Moen explore this concept in their classic article, ["How To Ask Questions The Smart Way."](http://www.catb.org/~esr/faqs/smart-questions.html) They discuss the best ways to seek help and the steps you should take before reaching out to others.

Initially, I agreed with their points, but reflecting on my experiences with programming and research, I began to question: *Why am I asking this question to others?* While the world is full of brilliant minds, we also have access to a vast network of knowledge—the internet. Almost every problem has been encountered before. Stack Overflow is an essential database of past information, but it may not always be the best resource for modern questions.

## The Importance of Research

With millions of questions on Stack Overflow, it’s likely that someone has already asked the same question you have. In the early days of online forums, asking new questions was necessary because certain issues had not yet been addressed. However, after two decades of accumulated knowledge, the likelihood of finding an existing solution has increased significantly. Taking the time to research thoroughly before asking a question benefits both you and the larger programming community by preventing redundant inquiries.

### Example: A Well-Structured Question

Consider the following [Stack Overflow question](https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge) about deep merging objects in JavaScript:

> Both Object.assign and Object spread only do a shallow merge.
>
> An example of the problem:
>
> ```
> // No object nesting
> const x = { a: 1 }
> const y = { b: 1 }
> const z = { ...x, ...y } // { a: 1, b: 1 }
> ```
> 
> The output is what you'd expect. However if I try this:
>
> ```
> // Object nesting
> const x = { a: { a: 1 } }
> const y = { a: { b: 1 } }
> const z = { ...x, ...y } // { a: { b: 1 } }
> ```
> 
> Instead of
>
> ```
> { a: { a: 1, b: 1 } }
> ```
> 
> you get
>
> ```
> { a: { b: 1 } }
> ```
> 
> x is completely overwritten because the spread syntax only goes one level deep. This is the same with Object.assign().
>
> Is there a way to do this?

This question is effective because it clearly states the problem, provides a minimal reproducible example, and demonstrates prior research. The asker understands the limitations of `Object.assign` and spread syntax but seeks a deeper solution. 

The top-rated answer offers a well-documented ES6 solution using recursion:

> I know this is a bit of an old issue but the easiest solution in ES2015/ES6 I could come up with was actually quite simple, using Object.assign(),
>
> Hopefully this helps:
> 
> ```
> /**
>  * Simple object check.
>  * @param item
>  * @returns {boolean}
>  */
> export function isObject(item) {
>   return (item && typeof item === 'object' && !Array.isArray(item));
> }
>
> /**
>  * Deep merge two objects.
>  * @param target
>  * @param ...sources
>  */
> export function mergeDeep(target, ...sources) {
>   if (!sources.length) return target;
>   const source = sources.shift();
>
>   if (isObject(target) && isObject(source)) {
>     for (const key in source) {
>       if (isObject(source[key])) {
>         if (!target[key]) Object.assign(target, { [key]: {} });
>         mergeDeep(target[key], source[key]);
>       } else {
>         Object.assign(target, { [key]: source[key] });
>       }
>     }
>   }
>
>   return mergeDeep(target, ...sources);
> }
> ```
> 
> Example usage:
> 
> ```
> mergeDeep(this, { a: { b: { c: 123 } } });
> // or
> const merged = mergeDeep({a: 1}, { b : { c: { d: { e: 12345}}}});  
> console.dir(merged); // { a: 1, b: { c: { d: [Object] } } }
> You'll find an immutable version of this in the answer below.
> ```
> 
> Note that this will lead to infinite recursion on circular references. There's some great answers on here on how to detect circular references if you think you'd face this issue.

This response is valuable because it is written in pure JavaScript (without dependencies) and remains relevant despite its age. However, with modern AI tools available, one could argue that even well-structured questions like this may not always be necessary, as AI can often generate solutions instantly.

## When Good Questions Are Essential

While research is crucial, there are cases where asking a well-formed question is unavoidable. However, some questions demonstrate a lack of preliminary research. Consider this Stack Overflow post:

> How can one send an email to 100,000 users on a weekly basis in PHP? This includes mail to subscribers using the following providers:
> 
> * AOL
> * G-Mail
> * Hotmail
> * Yahoo
> 
> It is important that all e-mail actually be delivered, to the extent that it is possible. Obviously, just sending the mail conventionally would do nothing but create problems.
> 
> Is there a library for PHP that makes this simpler?

The [question](https://stackoverflow.com/questions/3905734/how-to-send-100-000-emails-weekly) asks for a method to send mass emails while ensuring deliverability. Although this is a unique and ambitious request, the asker did not conduct basic research on email infrastructure. A simple Google search would reveal that handling mass email campaigns requires dedicated services like SendGrid or Amazon SES. While a user did offer a hypothetical solution, the best advice was ultimately to outsource the task to a specialized service. Here is the answer as a reference that gave a very short real answer, expected for the question (although it was followed up with an extensive possibility of an absurd option):

> Short answer: While it's technically possible to send 100k e-mails each week yourself, the simplest, easiest and cheapest solution is to outsource this to one of the companies that specialize in it (I did say "cheapest": there's no limit to the amount of development time (and therefore money) that you can sink into this when trying to DIY).

## Conclusion

The modern era is defined by vast, well-documented knowledge available on the internet. With the rise of AI and search engines, the way we approach questions and answers has changed significantly. Before posting on forums like Stack Overflow, take the time to research thoroughly—chances are, your question has already been answered. This not only improves your own problem-solving skills but also helps maintain the quality of online communities.

That said, asking questions remains an important skill. The key is to ask *new* and *thoughtful* questions that genuinely contribute to the conversation. If a question has already been answered well, there's no need to ask it again—just find and use the existing information. And when in doubt, tools like ChatGPT can serve as an excellent resource for general knowledge and troubleshooting. 

So, before you ask, research. And if you must ask, make it a great question.

*This essay used ChatGPT to suggest Markdown applications and polishing.*
