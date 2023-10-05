const currYear = new Date();
console.log(currYear);
console.log(typeof currYear);
console.log(typeof currYear.getFullYear());
const birthDay = new Date(currYear.getFullYear(),7,29);
console.log(birthDay.getTime());



const calculateTime = () => {
    const currTime = Date.now();
    const timeLeft = birthDay.getTime() - currTime;
    const milliSeconds = timeLeft%1000;
    const seconds = Math.floor(timeLeft/1000);
   // const secondsLeft = seconds%(60*60*24);
    const days = Math.floor(seconds/(60*60*24));
    const hours = Math.floor((seconds/(60*60))%24);
    // const minutesLeft = Math.floor();
    const minutesLeft = Math.floor((seconds / 60) % 60);
    const secondsLeft = seconds%60;
    // console.log(milliSeconds,seconds,days,hours,minutesLeft,secondsLeft);
    console.log(`${days}-${hours}-${minutesLeft}-${secondsLeft}-${Math.floor(milliSeconds/10)}`);

}
setInterval(calculateTime,10)
calculateTime();