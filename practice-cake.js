function maxNum(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}


const jimMarks = 84;
const dellaMarks = 99;
const chinkuMarks = 100;

const winnerMark = maxNum(jimMarks, dellaMarks, chinkuMarks);

if (winnerMark == jimMarks) {
    console.log("Jim will get the cake!");

}
else if (winnerMark == dellaMarks) {
    console.log("Della will get the cake!");

}

else {
    console.log("Chinku will get the cake!");

}


/* if (jimMarks > dellaMarks && jimMarks > chinkuMarks) {

    console.log("Jim will get the cake!");

}
else if (dellaMarks > jimMarks && dellaMarks > chinkuMarks) {

    console.log("Della will get the cake!");

}
else {
    console.log("Chinku will get the cake!");

} */
