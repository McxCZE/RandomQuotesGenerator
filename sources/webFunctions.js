//helperFn
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max);
};

//mainFn
$.fn.generateMain = function () {
    $.getJSON("sources/quotesCollection.json", function (jsonResponse) {
        var sayingHtml = "";

        var jsonResponseQuote = jsonResponse.Quote;
        var jsonResponsePerson = jsonResponse.Person;

        var indexQuote = generateRandomInteger(jsonResponseQuote[0].quotes.length);
        var indexPerson = generateRandomInteger(jsonResponsePerson[0].people.length);

        sayingHtml += `<div class='quote'>${jsonResponseQuote[0].quotes[indexQuote]}.</div>`;
        sayingHtml += `<div class='person'>${jsonResponsePerson[0].people[indexPerson]}.</div>`;
        $('#dynamicDiv').html(sayingHtml);
    })
        .done(function () {
            console.log("generováno");
        })
        .fail(function () {
            console.log("fpiči");
        });
};