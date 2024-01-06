const total = document.querySelector("#total")
const power = document.querySelector("#power")
const speed = document.querySelector("#speed")
const tech = document.querySelector("#tech")

let powScore = 87
let speScore = 65
let techScore = 23
let totalScore = 0

power.style.width = `${powScore}%`
speed.style.width = `${speScore}%`
tech.style.width = `${techScore}%`
total.style.width = `${(powScore + speScore + techScore) / 3}%`