const mocha = require('mocha');
const assert = require('assert');

//Describe test
describe('some demo test', function(){
   
    //condition test 
    if('adds two number together', function(){
        assert(2 + 3 === 5);
        console.log("here");
    });
});