// Date and time code
let time = () => {
    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    let dd = a.toDateString()
    let ampm = "AM"

    if (h >= 12) {
        ampm = "PM"
        if (h > 12) { h = h - 12 }
    } else if (h == 0) {
        h = 12;
        ampm = "AM"
    }
    if (h < 10) { h = "0" + h }
    if (m < 10) { m = "0" + m }
    s = s < 10 ? "0" + s : s;

    let tttt = [h, m, s]
    return tttt
}
setInterval(time, 500);



function sett(t) {
    if (t > 0) {
        let intervalId = setInterval(() => {
            t--       // to decrease countdown
            let x = t
            if (x < 61) { x = x }
            else if (x < 3601) { x = `${Math.floor(x / 60)}min ${x % 60}` }
            else {
                x = `0${Math.floor(x / 3600)}:${Math.floor((x % 3600) / 60) < 10 ? '0'+Math.floor((x % 3600) / 60) : Math.floor((x % 3600) / 60)}:${x % 60 < 10 ? '0'+ (x % 60) : x % 60}`
            }
            document.getElementById(`time`).innerText = `${x}`
        }, 1000)
    }
}

function setAlarm() {

    let [hh, mm, ss] = time()
    h = 22;
    m = 30;
  s = 0;
  let aapp = "PM";
    hh = parseInt(hh)
    mm = parseInt(mm)
    ss = parseInt(ss)
    if (aapp == "PM" && hh < 12) {
        hh = hh + 12
    } else if (aapp == "AM" && hh == 12) { hh = 0 }

    let x = (h - hh), y = (m - mm), z = (s - ss)
    t = (x * 60 * 60) + (y * 60) + (z)
    if (t < 1) { t = 24 * 60 * 60 + t }
    // console.log(t)
    sett(t)
}
setAlarm();