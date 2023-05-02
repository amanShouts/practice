const express = require("express")
const cors = require("cors")
const crypto = require('crypto');
const app = express()

app.use(express.json())
app.use(cors())

const urlLimit = 7
let urlDb = {}

// youube/dwwejnewdew.ewewbewwe - ytezgc1 ( org - shrotned )
//  ytezgc1 - youube/dwwejnewdew.ewewbewwe (shortned - org )

//DECODE 
app.post("/decode", (req, res) => {
    let url = req.body.url
    console.log("1", url)
    let ans = dencodeUrl(url)

    console.log("ans -> ", ans)

    res.send({ "Decoded url is : ": ans })
})

function dencodeUrl(url) {
    console.group(urlDb)

    if (urlDb[url] != undefined)
        return urlDb[url]
    else
        return ""
}


//ENCODE -------

app.post("/encode", (req, res) => {
    let url = req.body.url
    console.log("2", url)
    let ans = encodeUrl(url)
    ans = "https://apnaShortner/" + ans

    urlDb = { ...urlDb, [ans]: url }

    res.send({
        "Encoded url is : ": ans
    })
})

function encodeUrl(url) {

    //check this 
    console.log("magic -> ", Math.random().toString(36).slice(2))

    let encodedUrl = ""
    for (let i = 0; i < urlLimit; i++) {

        let characterInteger = Math.random() * 121
        if ((characterInteger >= 65 && characterInteger <= 89) || (characterInteger >= 97 && characterInteger <= 121) || (characterInteger >= 48 && characterInteger <= 56)) {
            var chr = String.fromCharCode(characterInteger);
            encodedUrl += chr
            console.log(chr)
        }
        else {
            i = i - 1;
            continue;
        }
    }

    return encodedUrl
}


// GENERAL TEST
app.get("/", (req, res) => {
    res.send("You have hit Home page")
})


//Server 

app.listen(8080, (err) => {
    if (err)
        console.log("Server Error", err)
    console.log("Server has started :)")
})
