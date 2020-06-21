// import moment from "moment";


export function diffDays(date1, date2) {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays
}

export function addBusinessDays(date, days) {

    for (let i = 0; i < days; i++) {
        //if its a sunday
        if (date.getDay() == 0) {
            date.setTime(date.getTime() + 86400000);
        }

        //if its a saturday
        if (date.getDay() == 6) {
            date.setTime(date.getTime() + 2 * 86400000);
        }

        date.setTime(date.getTime() + 86400000);
    }
    //if its a sunday
    if (date.getDay() == 0) {
        date.setTime(date.getTime() + 86400000);
    }
    //if its a saturday
    if (date.getDay() == 6) {
        date.setTime(date.getTime() + 2 * 86400000);
    }
    return date
}


// export function getWeekendsOfMonth(month, year) {

//     let pivot = moment().month(month).year(year).startOf('month')
//     const end = moment().month(month).year(year).endOf('month')
//     let dates = {}
//     const disabled = { disabled: true }

//     while (pivot.isBefore(end)) {
//         const d = new Date(pivot)
//         if (d.getDay() == 0 || d.getDay() == 6) {
//             dates[pivot.format("YYYY-MM-DD")] = disabled
//         }
//         if (d.getDay() == 0) {
//             pivot.add(6, 'days')
//         } else {
//             pivot.add(1, 'days')
//         }

//     }

//     return dates
// }

export function formatDate(date) {
    return (date.getDate() < 10 ? "0" : "") + date.getDate() + "-" + (date.getMonth() < 9 ? "0" : "") + parseInt(date.getMonth() + 1) + "-" + date.getFullYear()
}

export function formatDateReverse(date) {
    var d = new Date(date)
    return (d.getFullYear() + "-" + (d.getMonth() < 9 ? "0" : "") + parseInt(d.getMonth() + 1) + "-" + (d.getDate() < 10 ? "0" : "") + d.getDate())
}
