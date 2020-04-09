
'use strict';
var TEXT_LENGTH = 100;

var buttonOpen = document.querySelector('.write-us');
var wrapperForm = document.querySelector('.wrapper-form');
var setup = wrapperForm.querySelector('.modal-close');
var buttonSend = wrapperForm.querySelector('.send');
var formFeedback = wrapperForm.querySelector('.write-us-form');
var userName = wrapperForm.querySelector('[name=name]');
var email = wrapperForm.querySelector('[name=email]');
var feedback = wrapperForm.querySelector('[name=feedback]');

function removeText() {
    userName.value = '';
    email.value = '';
    feedback.value = '';
}
function openPopup(date) {
    date.classList.remove('cut-down');
    removeText();
}
function closePopup(date) {
    date.classList.add('cut-down');
    removeText();
}
buttonOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup(wrapperForm);
});

setup.addEventListener('click', function (evt) {
    evt.preventDefault();
    closePopup(wrapperForm);
});
window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        closePopup(wrapperForm);
    }
});

function changeBorder(element) {
    element.style.borderColor = '#e74246';
}
function returnBorder(element) {
    element.style.borderColor = '';
}

// содержать 2 массива
function checkOutUserName(evt) {
    var target = evt.target;
    var wordsArray = target.value.split(' ');

    if (wordsArray.length <= 2 && wordsArray[1] == '') {
        target.setCustomValidity('введите имя и фамилию');
        changeBorder(evt.target);
        return;
    }
    returnBorder(evt.target);
    target.setCustomValidity('');
}

userName.addEventListener('input', checkOutUserName);

// содержать знак @
function checkOutMailHandler(evt) {
    var target = evt.target;
    var wordsArray = target.value.split('');
    var tagArray = target.value.split(' ');
    var hashCount = 0;

    for (var i = 0; i < tagArray.length; i++) {
        var oneTag = tagArray[i];

        for (var i = 0; i < oneTag.length; i++) {
            var x = oneTag[i];
            if (oneTag[i] === '@') {
                hashCount += 1;
            }
        }
    }
    if (wordsArray.length != 0 && hashCount == 0) {
        target.setCustomValidity('почта должна содержать знак @');
        changeBorder(evt.target);
        return;
    }
    returnBorder(evt.target);
    target.setCustomValidity('');
}

email.addEventListener('input', checkOutMailHandler);

 // превышает 100 символов
function checkOutTextsHandler(evt) {
    var target = evt.target;
    var text = target.value;

    if (text.length > TEXT_LENGTH ) {
        target.setCustomValidity('длина собщениея превышает 100 символов');
        changeBorder(evt.target);
        return; 
    }
    returnBorder(evt.target);
    target.setCustomValidity('');
}

feedback.addEventListener('input', checkOutTextsHandler);

formFeedback.addEventListener('submit', function (evt) {

    if (!userName.value || !email.value || !feedback.value) {
        evt.preventDefault();
        wrapperForm.classList.remove('form-error');
        wrapperForm.offsetWidth == wrapperForm.offsetWidth;
        // повторение анимации
        wrapperForm.classList.add('form-error');
        return;
    } 
});