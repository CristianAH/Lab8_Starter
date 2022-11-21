# Lab 8 - Starter

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

(1) Within a Github action that runs whenever code is pushed to ensure that any new code meets the standards set by the organization and be bug free before being able to use the code for development/production.

2.  Would you use an end to end test to check if a function is returning the correct output?

Yes

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No since we are not able to take into account external factors that may affect sending the message.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes because we are able to quantify the test message to determine whether it exceeds the max message length.