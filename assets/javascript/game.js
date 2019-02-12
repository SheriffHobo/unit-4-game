// Variables for storing the various numbers
let totNumber = 0;
console.log(totNumber);
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

$(function () {

    displayTarScore();
    genCrysScores();
    displayTotScore();
    displayWins();
    displayLosses();

    $('#main').on('click', 'img', function () {
        totNumber += parseInt($(this).attr('data-value'));
        console.log(totNumber);
    });

    function displayTarScore() {
        $('#tarnum').text(tarScore);
    };

    function displayTotScore() {
        $('#totnumber').text(totNumber);
    };

    function displayWins() {
        $('#wincount').text(winCount);
    };

    function displayLosses() {
        $('#losscount').text(lossCount);
    };
    
    function genCrysScores() {
        for (let i = 0; i < 4; i++) {
            let score = (Math.floor(Math.random() * (12 - 1)) + 1);
            crystals[i].value = score;
            $('#' + crystals[i].id).attr('data-value', crystals[i].value);
        }
        return true;
    };

    if (totNumber === tarScore) {
        alert('Well done! You win that round!');
        winCount++;
        genTarScore();
        genCrysScores();
        $(totNumber).val('');
    } else {
        (totNumber > tarScore); {
            alert('Too much! You lost that round!');
            lossCount++;
            genTarScore();
            genCrysScores();
            $(totNumber).val('');
        };
    };
});

function genTarScore() {
    return Math.floor(Math.random() * (120 - 19)) + 19;
};