const Months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-inputs").value);
    let birthMonth, birthDate, birthyear;

    let birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    if (
        birthDetails.year > currentYear ||
        (birthDetails.month > currentMonth &&
            birthDetails.year === currentYear) ||
        (birthDetails.date > currentDate &&
            birthDetails.month === currentMonth &&
            birthDetails.year === currentYear)
    ) {
        document.getElementById("alert").innerHTML = " Not Born Yet❌❌";

        setTimeout(function() {
            document.getElementById("alert").innerHTML = "";
            displayResult("--", "--", "--")
        }, 2000);

        displayResult("🔅", "🔅", "🔅");
        return;
    } else {
        document.getElementById("alert").innerHTML = "";
    }

    birthyear = currentYear - birthDetails.year;

    if (currentMonth >= birthDetails.month) {
        birthMonth = currentMonth - birthDetails.month;
    } else {
        birthyear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if (currentDate >= birthDetails.date) {
        birthDate = currentDate - birthDetails.date;
    } else {
        birthMonth--;
        let days = Months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;

        if (birthMonth < 0) {
            birthMonth = 11;
            birthyear--;
        }
    }

    displayResult(birthDate, birthMonth, birthyear);
}

function displayResult(bDate, bMonth, bYear) {
    document.getElementById("years").textContent = bYear;
    document.getElementById("Months").textContent = bMonth;
    document.getElementById("Days").textContent = bDate;
}
setTimeout(function(){
    document.getElementById("years").textContent = "__";
    document.getElementById("Months").textContent = "__";
    document.getElementById("Days").textContent = "__";

}, 3000);

function leapChecker(year) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        Months[1] = 29;
    } else {
        Months[1] = 28;
    }
}

window.onload = function() {
    const nameElement = document.getElementById("name");
    const name = "Martins";
    const displayDuration = 3000;

    function displayName() {
        nameElement.innerHTML = name;
        setTimeout(function() {
            nameElement.innerHTML = "";
            setTimeout(displayName, delayBetweenAppearances);
        }, displayDuration);
    }

    setTimeout(displayName, delayBetweenAppearances);
};

