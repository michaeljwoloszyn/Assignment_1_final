$(document).ready(() => {

    $("#setButton").click(function () {
        localStorage.setItem('CDate', $('#cd').val());
        localStorage.setItem('ADate', $('#ad').val());
        localStorage.setItem('Time', $('#t').val());
        localStorage.setItem('OHIP', $('#o').val());
        localStorage.setItem('Email', $('#e').val());
        localStorage.setItem('Phone', $('#p').val());
    });

    $("#fillButton").click(function () {
        var cur_date = JSON.stringify(localStorage.getItem('CDate'));
        var app_date = JSON.stringify(localStorage.getItem('ADate'));
        var app_time = JSON.stringify(localStorage.getItem('Time'));
        var app_ohip = JSON.stringify(localStorage.getItem('OHIP'));
        var pat_email = JSON.stringify(localStorage.getItem('Email'));
        var pat_phone = JSON.stringify(localStorage.getItem('Phone'));
        var row = "<tr><td>" + cur_date + "</td><td>" + app_date + "</td><td>" + app_time + "</td><td>" + app_ohip + "</td><td>" + pat_email + "</td><td>" + pat_phone + "</td></tr>";
        $("#appTable tbody:last").append(row);
    });

    $("#clearButton").click(function () {
        localStorage.clear();
        $('#appTable tbody tr:last-child').remove();
    });

});
