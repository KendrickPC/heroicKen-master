### Feed Reader Testing With Jasmine
##### Test-Driven Development 
### The purpose is to use Jasmine to write a number of tests against pre-existing application. I am testing the underlying business logic of the application as well as the event handling and DOM manipulation.

## Install Jasmine 2.0
	<!-- https://jasmine.github.io/ -->
	When allFeeds variable is undefined with an empty array, the results return a spec failure of "Expected 0 not to be 0.""

- Run local server with python -m SimpleHTTPServer 8000
- Open web browser to localhost:8000
- Run Jasmine test

## Code Cleaned Up With 
<!-- https://dirtymarkup.com/ -->

### Helpful Links:

	how to write a Jasmine test for a webpage that has HTML and JavaScript or jQuery?
<!-- http://stackoverflow.com/questions/15729407/how-to-write-a-jasmine-test-for-a-webpage-that-has-html-and-javascript-or-jquery -->
	hasClass implementation in Jasmine 2.0
<!-- http://stackoverflow.com/questions/20268128/how-to-test-if-an-element-has-class-using-protractor -->
<!-- http://stackoverflow.com/questions/32615713/tobetrue-vs-tobetruthy-vs-tobetrue -->
	before and after async specs in Jasmine 2.0
<!-- https://github.com/jasmine/jasmine/issues/526 -->
	how to reuse beforeEach and afterEach in Jasmine 2.0
<!-- http://stackoverflow.com/questions/17317839/how-to-reuse-beforeeach-aftereach-in-jasmine-js -->

	How I got "not.toBeLessThan(1)"
<!-- http://stackoverflow.com/questions/24090270/how-can-i-test-that-a-value-is-greater-than-or-equal-to-in-jasmine -->

<!-- Google Cloud Platform Error Throwback -->

    [x]	at stack (http://www.everydaykenneth.com/codingprojects/feedReaderTesting/jasmine/lib/jasmine-2.1.2/jasmine.js:1442:17)
    at buildExpectationResult (http://www.everydaykenneth.com/codingprojects/feedReaderTesting/jasmine/lib/jasmine-2.1.2/jasmine.js:1419:14)
    at Spec.expectationResultFactory (http://www.everydaykenneth.com/codingprojects/feedReaderTesting/jasmine/lib/jasmine-2.1.2/jasmine.js:533:18)
    at Spec.addExpectationResult (http://www.everydaykenneth.com/codingprojects/feedReaderTesting/jasmine/lib/jasmine-2.1.2/jasmine.js:293:34)
    at Expectation.addExpectationResult (http://www.everydaykenneth.com/codingprojects/feedReaderTesting/jasmine/lib/jasmine-2.1.2/jasmine.js:477:21)
    at Expectation.toEqual (http://www.everydaykenneth.com/codingprojects/feedReaderTesting/jasmine/lib/jasmine-2.1.2/jasmine.js:1371:12)
    at http://www.everydaykenneth.com/codingprojects/feedReaderTesting/jasmine/spec/feedreader.js:102:47
    at Object.success (http://www.everydaykenneth.com/codingprojects/feedReaderTesting/js/app.js:65:17)
    at j (http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js:2:26860)
    at Object.fireWith [as resolveWith] (http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js:2:27673)