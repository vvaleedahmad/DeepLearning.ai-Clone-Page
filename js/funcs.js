const intC = document.querySelectorAll('.intermediate');
const bgC = document.querySelectorAll('.beginner');
const adC = document.querySelectorAll('.advanced');
const btb = document.getElementById('begb');
const allb = document.getElementById('allb');
const itb = document.getElementById('intb');
const adb = document.getElementById('advb');

allb.style.setProperty('background-color', 'rgb(38, 89, 209)', 'important');
allb.style.setProperty('color', 'white', 'important');

function rmI() {
    intC.forEach(function (element) {
        element.style.setProperty('display', 'none', 'important');
    })
    bgC.forEach(function (element) {
        element.style.setProperty('display', 'flex', 'important');
    })
    adC.forEach(function (element) {
        element.style.setProperty('display', 'none', 'important');
    })

    btb.style.setProperty('background-color', 'rgb(38, 89, 209)', 'important');
    btb.style.setProperty('color', 'white', 'important');
    itb.style.setProperty('background-color', 'white', 'important');
    itb.style.setProperty('color', 'black', 'important');
    allb.style.setProperty('background-color', 'white', 'important');
    allb.style.setProperty('color', 'black', 'important');
    adb.style.setProperty('background-color', 'white', 'important');
    adb.style.setProperty('color', 'black', 'important');
}
function bmI() {
    intC.forEach(function (element) {
        element.style.setProperty('display', 'flex', 'important');
    })
    bgC.forEach(function (element) {
        element.style.setProperty('display', 'none', 'important');
    })
    adC.forEach(function (element) {
        element.style.setProperty('display', 'none', 'important');
    })

    itb.style.setProperty('background-color', 'rgb(38, 89, 209)', 'important');
    itb.style.setProperty('color', 'white', 'important');
    btb.style.setProperty('background-color', 'white', 'important');
    btb.style.setProperty('color', 'black', 'important');
    allb.style.setProperty('background-color', 'white', 'important');
    allb.style.setProperty('color', 'black', 'important');
    adb.style.setProperty('background-color', 'white', 'important');
    adb.style.setProperty('color', 'black', 'important');
}
function allS() {
    intC.forEach(function (element) {
        element.style.setProperty('display', 'flex', 'important');
    })
    bgC.forEach(function (element) {
        element.style.setProperty('display', 'flex', 'important');
    })
    adC.forEach(function (element) {
        element.style.setProperty('display', 'flex', 'important');
    })

    allb.style.setProperty('background-color', 'rgb(38, 89, 209)', 'important');
    allb.style.setProperty('color', 'white', 'important');
    itb.style.setProperty('background-color', 'white', 'important');
    itb.style.setProperty('color', 'black', 'important');
    btb.style.setProperty('background-color', 'white', 'important');
    btb.style.setProperty('color', 'black', 'important');
    adb.style.setProperty('background-color', 'white', 'important');
    adb.style.setProperty('color', 'black', 'important');
}
function adI() {
    adC.forEach(function (element) {
        element.style.setProperty('display', 'flex', 'important');
    })
    bgC.forEach(function (element) {
        element.style.setProperty('display', 'none', 'important');
    })
    intC.forEach(function (element) {
        element.style.setProperty('display', 'none', 'important');
    })

    adb.style.setProperty('background-color', 'rgb(38, 89, 209)', 'important');
    adb.style.setProperty('color', 'white', 'important');
    allb.style.setProperty('background-color', 'white', 'important');
    allb.style.setProperty('color', 'black', 'important');
    itb.style.setProperty('background-color', 'white', 'important');
    itb.style.setProperty('color', 'black', 'important');
    btb.style.setProperty('background-color', 'white', 'important');
    btb.style.setProperty('color', 'black', 'important');
}