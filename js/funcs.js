const intC = document.querySelectorAll('.intermediate');
const bgC = document.querySelectorAll('.beginner');
const adC = document.querySelectorAll('.advanced');
const btb = document.getElementById('begb');
const allb = document.getElementById('allb');
const itb = document.getElementById('intb');
const adb = document.getElementById('advb');

allb.style.setProperty('background-color', 'rgb(38, 89, 209)', 'important');
allb.style.setProperty('color', 'white', 'important');

function showC(currentC, otherC) {
    if (Array.isArray(currentC)) {
        currentC.forEach(function (subArray) {
            subArray.forEach(function (element) {
                element.style.setProperty('display', 'flex', 'important');
            })
        })
    }
    else {
        currentC.forEach(function (element) {
            element.style.setProperty('display', 'flex', 'important');
        })
    }
    otherC.forEach(function (subArray) {
        subArray.forEach(function (element) {
            element.style.setProperty('display', 'none', 'important');
        })
    })
}
function selB(currentB, otherB) {
    currentB.style.setProperty('background-color', 'rgb(38, 89, 209)', 'important');
    currentB.style.setProperty('color', 'white', 'important');
    otherB.forEach(function (element) {
        element.style.setProperty('background-color', 'white', 'important');
        element.style.setProperty('color', 'black', 'important');
    })
}
function rmI() {
    showC(bgC, [intC, adC]);
    selB(btb, [itb, allb, adb]);
}
function bmI() {
    showC(intC, [bgC, adC]);
    selB(itb, [btb, allb, adb]);
}
function allS() {
    showC([intC, bgC, adC], []);
    selB(allb, [btb, itb, adb]);
}
function adI() {
    showC(adC, [bgC, intC]);
    selB(adb, [btb, allb, itb]);
}