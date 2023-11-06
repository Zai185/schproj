const timeboxes = document.querySelectorAll('.timebox');
const rooms = document.querySelectorAll('.room')
const finalDate = new Date("Nov 19, 2023 23:59:59").getTime()


function convertDateToDHMS(date) {

    const now = new Date().getTime();
    const timeDifference = date - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60) / 1000))

    return [days, hours, minutes, seconds]
}

setInterval(() => {
    const timeLeft = convertDateToDHMS(finalDate)
    const units = ['days', 'hours', 'minutes', 'seconds']
    timeboxes.forEach((t, i) => {
        t.innerHTML = `<span class="time">${timeLeft[i]}</span> ${units[i]} ${i == 3 ? '' : ':'}`
    })
}, 1000);

rooms.forEach((room, i) => room.style.transitionDelay = i * 150 + 'ms')
