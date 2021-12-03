const hour = document.getElementById('hours')
const day = document.getElementById('days')
const minute = document.getElementById('minutes')
const second = document.getElementById('seconds')
const until = new Date('April 27, 2022 01:00:00').getTime()

const timer = setInterval(function (){
    const date =  new Date()
    const diff = until - date
    const d = Math.floor(diff/1000/60/60/24)
    const h = Math.floor(diff/1000/60/60)%24
    const m = Math.floor(diff/1000/60)%60
    const s = Math.floor(diff/1000)%60
    day.innerHTML = d
    hour.innerHTML = h<10?'0'+h:h
    minute.innerHTML = m<10?'0'+m:m
    second.innerHTML = s<10?'0'+s:s
    console.log(hour,second)
    if(diff<=0){
        clearInterval(timer)
    }
}, 1000)