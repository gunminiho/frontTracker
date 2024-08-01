const formatDate = (date) => {
    //console.log("date: ", date);
    const [datePart, timePart] = date.split('T');
    //console.log("datePart: ", datePart);
    const [year, month, day] = datePart.split('-');
    return `${day}-${month}-${year}`;
    };

    export default formatDate;