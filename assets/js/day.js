weekday();

function weekday() {
    var d = new Date();

    if (d.getDay() == 0)
        document.getElementById("Sunday").classList.add('OpeningDay');

    if (d.getDay() == 1)
        document.getElementById("Monday").classList.add('OpeningDay');

    if (d.getDay() == 2)
        document.getElementById("Tuesday").classList.add('OpeningDay');

    if (d.getDay() == 3)
        document.getElementById("Wednesday").classList.add('OpeningDay');

    if (d.getDay() == 4)
        document.getElementById("Thursday").classList.add('OpeningDay');

    if (d.getDay() == 5)
        document.getElementById("Friday").classList.add('OpeningDay');

    if (d.getDay() == 6)
        document.getElementById("Saturday").classList.add('OpeningDay');                  
}

function ClearFields() {

    document.getElementById("textfield1").value = "";
    document.getElementById("textfield2").value = "";
}