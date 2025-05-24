function ReverseCharacters(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(ReverseCharacters("javascript")); 
console.log(ReverseCharacters("elyts"));     
console.log(ReverseCharacters("abc564"));
console.log(ReverseCharacters("dahaF"));
