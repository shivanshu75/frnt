//helpers.js
export const formatDateIST = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.error("Invalid date:", dateString);
      return "";
    }
    return new Intl.DateTimeFormat("en-IN", {
      year: "numeric", month: "2-digit", day: "2-digit",
      timeZone: "Asia/Kolkata",
    }).format(date);
  };
  export const formatTime = (time) => {
    if (!time) return null;
    if (typeof time === "string" && time.match(/^\d{2}:\d{2}(:\d{2})?$/)) {
        return time.length === 5 ? time + ":00" : time;
    }
    const date = new Date(time);
    if (isNaN(date.getTime()))  return null;
    return date.toTimeString().slice(0, 8);
};
export const formatToIST = (dateString) => {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    const options = { timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit" };
    return new Intl.DateTimeFormat("en-CA", options).format(date);
}