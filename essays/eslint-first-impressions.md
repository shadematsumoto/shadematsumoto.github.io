---
layout: essay
type: essay
title: "Conflicting Feelings on ESLint: Upholding Coding Standards"
# All dates must be YYYY-MM-DD format!
date: 2025-02-13
published: false
labels:
  - Software Engineering
  - ESLint
  - Typescript
---

![ESLint Typescript Logo](../img/eslint-typescript.png)

## Personal Coding Standards Before ESLint

Before I was introduced to ESLint or any other enforced coding standard, I had already developed a habit of meticulously formatting my code. I always aimed for consistency and readability, following my own self-imposed guidelines to make sure my code looked polished. As a bit of a perfectionist when it comes to programming, I enjoyed this process—there was a sense of satisfaction in refining my code until it felt just right. However, this approach had its drawbacks: I often found myself manually scanning through my work, unsure if I had missed subtle inconsistencies or potential issues.

## How ESLint Changed My Coding Approach

ESLint changed this experience for me. Instead of relying solely on my own judgment, I now had an automated tool pointing out areas that needed attention. It was like having a second set of eyes, catching things I might have overlooked. I found that ESLint provided a sense of reassurance, ensuring that my code met a widely accepted standard rather than just my personal preferences. Beyond just formatting, these coding standards also gave me deeper insights into how the language was meant to be used. For instance, in TypeScript, I quickly realized how important explicit typing is—ESLint discourages the use of broad types like any, reinforcing the language’s intent to promote type safety.

## Frustrations with ESLint's Strict Rules

That said, my experience with ESLint hasn’t been without frustrations. One of the biggest challenges is dealing with contradicting or overly strict errors. Sometimes, I have a specific way I want my code to be formatted for better readability, but ESLint enforces its own rules. I try to add a new line for clarity—ESLint flags an error. I add an extra return statement—another error appears. It often feels like an endless game of whack-a-mole: fixing one issue only for another to pop up. While this can be frustrating, I’ve learned to approach it differently. Rather than blindly fixing errors, I take the time to understand why ESLint flags certain issues. In doing so, I’ve deepened my understanding of programming principles, which has helped me apply better practices across my entire codebase.

## Conclusion

Ultimately, while I do find fixing ESLint errors difficult at times, I recognize its value, especially in collaborative environments. A standardized coding style makes it easier for multiple developers to read, understand, and contribute to a codebase without unnecessary confusion. In a tech company where hundreds of developers may be working on the same code, adhering to a unified standard is critical. While I may not always agree with every rule ESLint enforces, I accept that consistency is more important than personal preferences.

*This essay was grammar checked with ChatGPT.*
