const fs = require('fs');


fs.readFile('./json_sample.log', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    //   console.log(data.split("\n"));
    data = data.split("\n");

    let ans = [] // answer
    // "complete-request"
    let pattern = "complete-request"

    //flags - k v x i c d
    let flags = process.argv
    console.log(flags, " this is all argvs")
    if ("-k" in flags) {
        console.log("got it")
    }

    //flag ends 
    for (let i = 0; i < data.length - 1; i++) {
        let elem = data[i]   // big obj

        if (elem[0] == '{' && elem[elem.length - 1] == "}") {
            let obj = JSON.parse(elem)

            for (let key in obj) {

                let value = obj[key] + ""

                if (key.includes(pattern) == true || value.includes(pattern) == true) {
                    ans.push({ body: elem, "line": (i + 1) })
                }
            }

        }
        else {
            ans.push(`Invalid JSON on line number ${i + 1}`)
            break;   // exit
        }
    }

    console.log(ans)

})













// const moment = require("moment")

// function calsub(exp, months, cost) {

//     let [day, month, year] = exp.split("/")
//     console.log(day, month, year)

//     // add 1 month to current date
//     month += 1
//     let first_expiry_day = moment(year + month + day, "YYYYMMDD");

//     let exp1 = moment(`${year}${month}01`, "YYYYMMDD")
//     let exp2 = moment(`${year}${month}15`, "YYYYMMDD")

//     let diff1 = Math.abs(exp1.diff(first_expiry_day)) / (24 * 60 * 1000);
//     let diff2 = Math.abs(exp2.diff(first_expiry_day)) / (24 * 60 * 1000);

//     console.log(diff1, diff2)

//     total = (months - 1) * cost

//     // find if 1 or 15 is closer to 1 month expiry day
//     //  date2.diff(date1);
//     // moment(year + month + day, "YYYYMMDD")

//     // return {
//     //     newexp, cost
//     // }
// }

// let ans = calsub("19/06/2022", 1, 1000)
// // console.log(ans)
// // ans = calsub("3/06/2022", 3, 400)
// // console.log(ans)