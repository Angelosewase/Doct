export function formatDateTime(date:Date):string {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';

    const todaysdate = new Date()

    
    // Convert hours from 24-hour format to 12-hour format
    const formattedHours = hours % 12 || 12;
    
    // Pad minutes with leading zero if necessary
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    
    if(date = todaysdate){
        return `Today ${formattedHours}:${formattedMinutes} ${ampm}`
    }
    return `${day} ${month} ${year} ${formattedHours}:${formattedMinutes} ${ampm}`;
}


export function getpercentage(total:number, number:number):number{
   const percentage = ((number /total) * 100).toFixed(1)
   return Number(percentage)
}