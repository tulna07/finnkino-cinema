import { format, parseISO } from "date-fns";

// Convert date in ISO format to different format
// Example:
//  From
//  - Date in ISO format: 2019-09-25T14:34:32.999Z
//  To
//  - Different format: 25.09.2019
//                   or 25/09/2019
//                   or 25-09-2019
const formatDate = (date) => format(parseISO(date), "dd.MM.yyyy");

export default formatDate;
