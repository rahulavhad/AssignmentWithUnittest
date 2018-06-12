(function(){
    'use strict';
    angular.module('myApp',[]).
        controller('homecontroller',homecontroller);

    function homecontroller(){

        var self = this;
        self.inputStr = '';
    }

    homecontroller.prototype.getLongSubString = function(){

        var self =  this;
        var splitString = self.inputStr.split(' ');
        self.resultLargestString = splitString.reduce((total,item)=>{
            if(item.length > total.length){
                total ={...total,item,length:item.length}
                console.log(total);
            }
            return total
        },{item : '',length:0});
    }
})()
