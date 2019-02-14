
$(function () {

    // Variables for storing the various numbers
let totNumber = 0;
// console.log(totNumber);
let winCount = 0;
let lossCount = 0;
let tarScore = genTarScore();
let crystals = [{
    name: 'blue',
    value: 0,
    id: 'bluec'
},
{
    name: 'green',
    value: 0,
    id: 'greenc'
},
{
    name: 'pink',
    value: 0,
    id: 'pinkc'
},
{
    name: 'purple',
    value: 0,
    id: 'purpc'
}];

    displayTarScore();
    genCrysScores();
    displayWins();
    displayLosses();

    $('#main').on('click', 'img', function () {
        totNumber += parseInt($(this).attr('data-value'));
        displayTotScore();
        checkWinCondition();
        // console.log('First', totNumber);
    });

    function displayTarScore() {
        $('#tarnum').text(tarScore);
    };

    function displayTotScore() {
        $('#totnumber').text(totNumber);
        console.log(totNumber);
    };

    function displayWins() {
        $('.wincount').text(winCount);
    };

    function displayLosses() {
        $('.losscount').text(lossCount);
    };

    function genCrysScores() {
        for (let i = 0; i < 4; i++) {
            let score = (Math.floor(Math.random() * (12 - 1)) + 1);
            crystals[i].value = score;
            $('#' + crystals[i].id).attr('data-value', crystals[i].value);
        }
        return true;
    };

    function genTarScore() {
        return Math.floor(Math.random() * (120 - 19)) + 19;
    };

    function checkWinCondition() {
        if (totNumber === tarScore) {
            winCount++;
            displayWins();
            console.log(winCount);
            tarScore = genTarScore();
            displayTarScore();
            genCrysScores();
            totNumber = 0;
            $('#totnumber').html(totNumber);
            alert('Well done! You win that round!');
        } else if (totNumber > tarScore) {
            lossCount++;
            displayLosses();
            console.log(lossCount);
            tarScore = genTarScore();
            displayTarScore();
            genTarScore();
            genCrysScores();
            totNumber = 0;
            $('#totnumber').html(totNumber);
            alert('Too much! You lost that round!');
        };
    };
});

