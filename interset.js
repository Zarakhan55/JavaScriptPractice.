//calculate interset

function intee(principalAmound,intersetYears,durations){
    let mul=principalAmound*intersetYears*durations;
    let interset=mul/100;
    return interset;
    console.log(interset);
}

intee(1000,5,1);