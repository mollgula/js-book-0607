function sum(rangeForm,rangeTo = 10) {
    var total = 0;
    for (var counter = rangeForm; counter <= rangeTo; counter++ ) {
        total += counter;
    }
    window.alert(total);
} 
sum(1)
3undefined