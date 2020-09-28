let circle = document.querySelector('.js-progressCircle'),
    counter = document.querySelector('.js-progressCounter'),
    radius = circle.r.baseVal.value,
    circumference = 2 * Math.PI * radius;

const setProgress = percent => {
    // Анимайия круга
    let offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;

    // Анимация числа
    let duration = 1200,
        startValue = 0,
        finishValue = percent,
        diffValue = finishValue - startValue,
        startTime = new Date().getTime(),
        finishTime = startTime + duration;

    let anim = setInterval( () => {
        let currentTime = new Date().getTime(),
        currentValue;

        if (currentTime >= finishTime) {
            currentValue = finishValue;
            counter.textContent = currentValue;
            clearInterval(anim);
        } else {
            let diffTime = finishTime - currentTime,
                diffPrc =  diffTime / duration;
            currentValue = finishValue - (diffValue * diffPrc);
            counter.textContent = Math.floor(currentValue);
        }
    },10)
}

setProgress(64);