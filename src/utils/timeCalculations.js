
export function dateToTime(date){
    let hours = date.getHours();
    let amOrPm = hours >= 12 ? 'pm' : 'am';
    hours = (hours % 12) || 12;
    let minutes = date.getMinutes();
    if(minutes < 10) {minutes = '0'+ minutes}
    let finalTime =  hours + ":" + minutes + " " + amOrPm;
    return finalTime;
}   