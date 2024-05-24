const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
    for(let i = 1; i <= 5; i++){
        showCalendar(currentMonth, currentYear, i);
    }
    
});

function showCalendar(month, year, itemNumber) {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();
    var elmentName = "days" + itemNumber;
    const daysElement = document.getElementById(elmentName);
    elmentName = "month-year"+itemNumber;
    const monthYearElement = document.getElementById(elmentName);

    daysElement.innerHTML = "";
    monthYearElement.innerHTML = `${monthNames[month]} ${year}`;

    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement("div");
        daysElement.appendChild(emptyDiv);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.textContent = i;
        daysElement.appendChild(dayDiv);
    }
}

function prevMonth() {
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
    showCalendar(currentMonth, currentYear);
}

function nextMonth() {
    currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
    currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
    showCalendar(currentMonth, currentYear);
}