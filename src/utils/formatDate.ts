import moment, { MomentInput } from "moment";
const formatDate = (date: MomentInput ):string => {
    const formatedString = `${moment(date ).format("MMMM")} ${moment(date).format("D")}, ${moment(date).format("Y")}`
return formatedString;

};

export default formatDate;
