"use strict";

function extend(d, s) {
  for ( var prop in s) {
    d[prop] = s[prop];
  }
}

var destObj = {

};

var baseObj = {
  age: 120
};


var srcObj = Object.create(baseObj);
srcObj.name = "john";

extend(destObj, srcObj);

console.dir(destObj);
