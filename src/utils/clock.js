export const clock = () => {
  const date = new Date();
  let hour = date.getHours(); // 0 - 23
  let min = date.getMinutes(); // 0 - 59
  let sec = date.getSeconds(); // 0 - 59
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  return { hour: `${hour}`, min: `${min}`, sec: `${sec}` };
};
