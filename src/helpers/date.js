const formatDate = (date) => {
    console.log("date: ", date);
    if (date) {
        const [datePart, timePart] = date.split('T');
        const [year, month, day] = datePart.split('-');
        return `${day}-${month}-${year}`;
    }
};

export default formatDate;