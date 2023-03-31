// this is a closure problem 

// NOT WORKING 

// function toggler(...params) {
//     console.log(params)
//     let index = 0
//     return function (index) {

//         console.log(index, params[index++])
//     }
// }

//WORKING

function toggler(...params) {
    console.log(params)
    let index = 0
    return function () {

        console.log(index, params[index++])
    }
}

const toggle = toggler(1, 2, 3)

toggle()
// 1
toggle()
// 2
toggle()
//3 