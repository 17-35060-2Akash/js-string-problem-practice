function reverseString(text) {
    let reverseStringNew = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reverseStringNew = reverseStringNew + element;
        console.log(reverseStringNew);

    }
    return reverseStringNew;
}


let text = 'I am a good Boy';
console.log('The reverse output:', reverseString(text));