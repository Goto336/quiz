/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var finalAnswer = "TBD";
        var q1Input = $("#question1").val();
        var q2Input = $("#question2").val();
        var q3Input = $("#question3").val();
        var q4Input = $("#question4").val();
        var q1Value = getQ1Value(q1Input)
        var q2Value = getQ2Value(q2Input)
        var q3Value = getQ3Value(q3Input)
        var q4Value = getQ4Value(q4Input)
        var company= workCompany(q1Value, q2Value, q3Value,q4Value);
        var techCompany= whichWorkCompany(q1Value, q2Value, q3Value,q4Value);
        
        $("#company").text(company);
         $("#company").append(techCompany);
    });

});

function getQ1Value(input){
    input = input.toLowerCase()
    if (input === "amazing") {
        return 7;
    } else if (input === "goodish") {
        return 5;
    } else if (input === "eh") {
        return 3;
    } else {
        return 1;
    }
}

function getQ2Value(input){
    input = input.toLowerCase()
    if (input === "yes") {
        return 7;
    } else if (input === "one year left") {
        return 5;
    } else if (input === "few years left") {
        return 3;
    } else {
        return 1;
    }
}

function getQ3Value(input){
    input = input.toLowerCase()
    if (input === "yes") {
        return 7;
    } else if (input === "if I have too") {
        return 5;
    } else if (input === "sometimes") {
        return 3;
    } else {
        return 1;
    }
}

function getQ4Value(input){
    input = input.toLowerCase()
    if (input === "yes") {
        return 7;
    } else if (input === "if I have too") {
        return 5;
    } else if (input === "sometimes") {
        return 3;
    } else {
        return 1;
    }
}

 function workCompany(q1Value,q2Value, q3Value, q4Value){
     var sum = q1Value + q2Value + q3Value +q4Value;
    if (sum > 19) {
        return "You'll work at Google!";
    } else if (sum > 15) {
        return "You'll work at Amazon"
    } else if (sum > 10) {
        return "You'll work at Facebook"
    } else if (sum > 4) {
        return "You'll work at Snapchat"
    } else {
        return "You'll work at CodeNation"
    }
 }
 
function whichWorkCompany(q1Value,q2Value, q3Value, q4Value){
     var sum = q1Value + q2Value + q3Value +q4Value;
    if (sum > 19) {
        return "<img src='http://i.dailymail.co.uk/i/pix/2015/09/01/18/2BE1E88B00000578-3218613-image-m-5_1441127035222.jpg'>";
    } else if (sum > 15) {
        return "<img src='http://g-ec2.images-amazon.com/images/G/01/social/api-share/amazon_logo_500500._V323939215_.png'>";
    } else if (sum > 10) {
        return "<img src='https://www.facebook.com/images/fb_icon_325x325.png'>";
    } else if (sum > 4) {
        return "<img src='https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2017/1-snapchat.jpg'>";
    } else {
        return "<img src='https://mms.businesswire.com/media/20181031005146/en/687557/23/CN_Logo_Black-01.jpg'>";
    }
 }