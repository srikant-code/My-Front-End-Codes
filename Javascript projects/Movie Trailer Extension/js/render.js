const displayTime = (movietime) => {
    let h, m
    if(movietime){
        h = Math.floor(movietime/60)
        m= movietime%60
    }
    else{
        h=0
        m=0
    }
    var date = new Date();
    var hours = date.getHours()+h;
    var minutes = date.getMinutes()+m;
    var normalh=date.getHours()
    var normalm=date.getMinutes()
    if(minutes>60){
        hours=Math.floor(hours+minutes/60)
        minutes=minutes%60
    }
    var ampmnormal = normalh >= 12 ? 'pm' : 'am';
    normalh = normalh % 12;
    normalh = normalh ? normalh : 12; // the hour '0' should be '12'
    normalm = normalm < 10 ? '0'+normalm : normalm;
    var strTimenormal = normalh + ':' + normalm + ' ' + ampmnormal;

    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    console.log(h, m, strTime, strTimenormal)
    if(h==0&&m==0)
    document.getElementById("current-time").innerHTML = strTime;
    else{// return strTime
        document.getElementById("current-time").innerHTML = strTimenormal;
        document.getElementById("expected-time").innerHTML = strTime;
    }
}

export let renderTimeDetails = (movieTime) =>{
    //call display time with parameters
    console.log(movieTime)
    let myvar 
    const time = movieTime
    if(movieTime)
    myvar = displayTime(time)
    else
    myvar = displayTime()

}