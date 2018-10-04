var countTo=prompt ('how high should we count even numbers?');

var sure=confirm('Are you sure you want to count to '+ countTo + '?');

var x =12;
if (x % 2 === 0) {
    console.log('is even');
}

else {
    console.log('is odd');
}

for (var i=0; i < 100; i++) {
    var remainder = i % 2;
    if (remainder === 0) {
        console.log(i,'is even');
        
    }
}
