# WORKFLOW.md

# AI Workflow Comparison

## Overview

This exercise compared two different AI-assisted development workflows while building the same React Settings Form with validation. The goal was to understand how prompt quality affects the correctness, maintainability, accessibility, and overall quality of the generated code.

## Round One: Vague Prompt

The first implementation was generated using a simple prompt:

> "Build a settings form in React."

The AI produced a basic form with input fields and a submit button, but several important requirements were missing. Validation was incomplete, accessibility features such as proper labels and ARIA attributes were absent, and there were no automated tests. Password confirmation logic was either missing or unreliable, and the generated code required significant manual review before it could be considered production-ready.

## Round Two: Structured Prompt

The second implementation used a detailed prompt that specified the project stack, file location, validation rules, accessibility requirements, responsive design expectations, and a verification step. The AI was instructed to implement the feature, write automated tests, and explain any assumptions made.

The resulting code was much closer to the expected outcome. Validation handled required fields, email format, password length, and password confirmation correctly. Inputs were properly labelled, accessibility considerations were included, and the generated tests verified the expected behaviour.

## Comparison

The structured workflow produced noticeably higher-quality code than the vague workflow. Because the requirements were clearly defined, the AI made fewer assumptions and generated a more complete implementation. The code required less manual correction, was easier to review, and included automated tests that improved confidence in the final result.

## AI Mistake Identified

One issue identified during review was that the generated validation logic initially accepted passwords containing only whitespace. This was corrected by trimming the input before checking its length and comparing it with the confirmation password. This highlighted the importance of reviewing AI-generated code instead of accepting it without verification.

## Lessons Learned

This exercise demonstrated that effective AI-assisted software development depends on providing clear specifications, reviewing generated code carefully, testing the implementation, and verifying that all requirements have been met. Using AI effectively is not simply generating code—it is guiding the AI with precise instructions, validating the output, and making informed engineering decisions before committing the changes.
