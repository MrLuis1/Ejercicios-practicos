let dimension1 = 1
let dimension2 = 7
let total = '';
let space = 3;

for (let i = dimension1; i <= (dimension2); i += 2){
        for (let j = 0; j < space; j++){
            total += ' ';
    }
    space--;
    for (let j = 0; j < i; j++){
            total += '*';
    }
    total += '\n'
}
space = 1;
for (let i = dimension2-2; i >= (dimension1); i -= 2){
        for (let j = 0; j < space; j++){
            total += ' ';
    }
    space++;
    for (let j = 0; j < i; j++){
            total += '*';
    }
    total += '\n'
}
console.log(total);