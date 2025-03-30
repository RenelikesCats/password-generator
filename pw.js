"use strict";

const checkBoxes = document.querySelectorAll("input[type=checkbox]")

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    special: "!@#$%^&*()-_=+[]{}|;:,.<>?"
}

let gekozenChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?"
let aantalChars = 16

document.getElementById("length").addEventListener("change", () => {
    if (document.getElementById("length").value < 8 || document.getElementById("length").value > 32) {
        document.getElementById("length").value = 16;
    }
    aantalChars = Number(document.getElementById("length").value)
})

checkBoxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            gekozenChars += characters[checkbox.id]
        } else {
            gekozenChars = gekozenChars.replace(characters[checkbox.id], "")
        }
    })
})

//copy button
document.getElementById("copy").addEventListener("click", () => {
    let copyText = document.getElementById("password")
    copyText.select()
    navigator.clipboard.writeText(copyText.value)
    document.getElementById("clipboard").hidden = false
    setTimeout(() => {
        document.getElementById("clipboard").hidden = true
    }, 6000)
})

//Generate password button
document.getElementById("generate").addEventListener("click", () => {
    let generatedPassword = "";
    for (let i = 0; i < aantalChars + 1; i++) {
        let randomIndex = Math.floor(Math.random() * gekozenChars.length)
        generatedPassword += gekozenChars.charAt(randomIndex)
    }
    document.getElementById("password").value = generatedPassword
})
