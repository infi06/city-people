const addDays=require("date-fns/addDays");

const getDayAfter=(days)==>{
    const newDate=addDays(new Date(2020,07,22),days);
    return `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;

} ;
module.exports=getDayAfter;