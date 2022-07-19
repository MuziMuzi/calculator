'use strict'
var gNumStr = ''            // the first inputed number and then reseted and being the second inputed number
var gCurrRes = 0          // the result!
var gActionStr
var gActionHappened = false
var gOperators = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '*': function (x, y) { return x * y },
    '%': function (x, y) { return x % y },
    '**': function (x, y) { return x ** y },
    '/': function (x, y) { return x / y },
}


function renderScreen(number) {
    var elH2 = document.querySelector('h2')
    elH2.innerText = number
}
function deleteDigit() {
    gNumStr = gNumStr.slice(0, -1)
    console.log(gNumStr)
}
function addDigit(elDigit) {
    gNumStr += elDigit.innerText
    console.log('gActionStr', gActionStr)
    console.log('gCurrRes', gCurrRes)
    console.log('gNumStr', gNumStr)
    renderScreen(gNumStr)



}
function addAction(elAction) {
    if (gCurrRes !== 0) {
        if (gActionStr) {
            gCurrRes = gOperators[gActionStr](gCurrRes, +gNumStr)
        }
    } else {
        gCurrRes = +gNumStr
    }
    renderScreen(gCurrRes)
    gActionStr = elAction.innerText
    gActionHappened = true
    gNumStr = ''
    console.log('gActionStr', gActionStr)
    console.log('gCurrRes', gCurrRes)
    console.log('gNumStr', gNumStr)
}

function calculate() {
    gCurrRes = gOperators[gActionStr](gCurrRes, +gNumStr)
    gActionStr = null
    renderScreen(gCurrRes)
    gNumStr = ''
    console.log('gActionStr', gActionStr)
    console.log('gCurrRes', gCurrRes)
    console.log('gNumStr', gNumStr)
}


function resetAll() {
    gNumStr = ''
    gCurrRes = 0
    gActionStr = null
    gActionHappened = false
}