describe('find largest sub-string',function(){

    beforeEach(module('myApp'));

    /** Controller Intialization */
    describe('homecontroller',function(){
        var resultLargestString = {
            item : "jumped",
            length: 6
        }
        beforeEach(inject(function($controller){

            myCtrl = $controller('homecontroller');
        }));

        /** Testing the functionality of getLongSubString */
        it('Testing the function getLongSubString',function(){
            myCtrl.inputStr = "The cow jumped over the moon"
            myCtrl.getLongSubString();
            expect(myCtrl.resultLargestString).toEqual(resultLargestString);
        })

        /** Return Type checking of input string length */
        it('Testing String should return number ',function(){
            myCtrl.inputStr = "The cow jumped over the moon"
            myCtrl.getLongSubString();
            expect(myCtrl.resultLargestString.length).toBeCloseTo(resultLargestString.length);
        })

        /** Type checking of input String */
        it('Testing for checking input variable should be string',function(){
            myCtrl.inputStr = "The cow jumped over the moon"
            expect(myCtrl.inputStr).toEqual(jasmine.any(String));
        })
    })
})
