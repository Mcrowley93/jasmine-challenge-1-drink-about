describe ("My whatCanIDrink function", function() {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    beforeEach(function() {
        drink = new whatCanIDrink();
    });
    
    describe ("Checks age", function() {
        // Specs are defined by calling the global Jasmine function it
        it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(whatCanIDrink).toBeDefined();
        });
        
        it("should return drink beer when called as whatCanIDrink(20)", function() {
            var result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer");
        });
        
        it("should return drink whiskey when called as whatCanIDrink(100)", function() {
            var result = whatCanIDrink(100)
            expect(result).toBe("Drink Whiskey");
        });
        
        it("should be unable to return a drink when called as whatCanIDrink(-1)", function() {
            var result = whatCanIDrink(-1)
            expect(result).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });
       
    });
});