// 6. Communist Censorship

// Given the array of strings 
// X = ['Man', 'I','Love','The','Restart','Bootcamp'], 
// replace every letter of the word Bootcamp with *, 
// so the output would be ['Man', 'I','Love','The','Turing','********']. 
// Then make your algorithm work for any word of your choice.

var x = ['Man', 'I','Love','The','Restart','Bootcamp'];
for(var i = 0; i < x.length; i++){
    if(x[i] == 'Restart'){
    x[i] = ('Turing');    
    }
    if(x[i] == 'Bootcamp'){
    x[i] = ('********');    
    }
}
console.log(x);