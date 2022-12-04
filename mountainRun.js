function mountainRun(input){

    let recordTimeScnds = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let secondsPerMeter = Number(input[2]);
    let slowdownSeconds = (Math.floor(distanceMeters/50))*30;

    let attemptTimeSeconds = (distanceMeters * secondsPerMeter) + slowdownSeconds;

    if(attemptTimeSeconds < recordTimeScnds){
        console.log(`Yes! The new record is ${attemptTimeSeconds.toFixed(2)} seconds.`)
    }else{
        console.log(`No! He was ${(attemptTimeSeconds - recordTimeScnds).toFixed(2)} seconds slower.`);
    }
}

mountainRun(["1377",
"389",
"3"])
;