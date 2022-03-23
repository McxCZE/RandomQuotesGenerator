//#region - GenerateFuntions

//#region - Hlavní stránka
$.fn.generateMain = function () {
    // $('#mainApp').load("subPages/main.html", function (responseTxt, statusTxt, jqXHR) {
    //     if (statusTxt == "success") {
            $.getJSON("sources/quotesCollection.json", function (jsonResponse) {
                    var _sayingHtml = "";
                    var _jsonResponseQuote = jsonResponse.Quote;
                    var _jsonResponsePerson = jsonResponse.Person;
                    _sayingHtml += `<h1>${_jsonResponseQuote[0].saying[0]}.</h1>`;
                    _sayingHtml += `<h3>${_jsonResponsePerson[0].person[0]}.</h3>`;
                    $('#dynamicDiv').html(_sayingHtml);
                })
                .done(function () {
                    console.log("done");
                })
                .fail(function () {
                    console.log("error");
                })
                .always(function () {
                    console.log("complete");
                });
        // };
        // if (statusTxt == "error") { alert("Error: " + jqXHR.status + " " + jqXHR.statusText) };
    // });
}