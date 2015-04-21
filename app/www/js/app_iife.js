var x=0, y=0, funcs = [];

for(; x<5; x++) {
  (function() {
    var t = x;
    funcs.push(function() {
      console.log(t);
    });
  })();
}

for(; x<5; x++) {
  funcs.push(log(x));
}

for(;y<5;y++) {
  funcs[y]();
}
