const johnScores = [1000,120,103];
//1000 score was 89, changed for john to win
const mikeScores = [116,94,123];
const johnAverage = (johnScores[0] + johnScores[1] + johnScores[2]) / 3;
const mikeAverage = (mikeScores[0] + mikeScores[1] + mikeScores[2]) / 3;
if(johnAverage > mikeAverage) {
    console.log(`John's team is the winner in score average with an average score of ${johnAverage}!`);
}
else {
    console.log(`Mike's team is the winner in score average with an average score of ${mikeAverage}!`);
}