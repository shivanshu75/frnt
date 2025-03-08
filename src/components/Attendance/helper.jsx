 //src/components/Attendance/helpers.js
 import moment from "moment-timezone";
 
 export const convertUTCtoIST = (utcDate) => {
    return moment.utc(utcDate).tz("Asia/Kolkata").format("YYYY-MM-DD");
};

 export const getWorkingHoursStatus = (hours) => {
    if (hours < 8) return { color: "#e74c3c", text: "Below Target" };
    if (hours === 8) return { color: "#2ecc71", text: "On Target" };
    return { color: "#2ecc71", text: "Exceeds Target" };
};