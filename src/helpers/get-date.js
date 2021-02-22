export default function getDate() {
    const dateData = new Date();
    const fullDate = {
        year: dateData.getFullYear(),
        month: parseInt(dateData.getMonth() + 1) < 10 ? `0${parseInt(dateData.getMonth()+1)}` : parseInt(dateData.getMonth() + 1),
        day: dateData.getDate() < 10 ? `0${dateData.getDate()}` : dateData.getDate()
    }
    return `${fullDate.year}-${fullDate.month}-${fullDate.day}`;
}