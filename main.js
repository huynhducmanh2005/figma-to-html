function thoigian(timestamp) {
  let now = new Date();
  console.log("Xem thử timestamp hiện tại:" + now.getTime());
  let thoigiantrenlech = now - timestamp;
  let giay = Math.floor(thoigiantrenlech / 1000);
  let minutes = Math.floor(giay / 60);
  let hours = Math.floor(minutes / 60);
  let day = Math.floor(hours / 60);
  let months = Math.floor(day / 30);
  let years = Math.floor(months / 12);
  if (years > 0) {
    return `online ${years} năm trước`;
  } else if (months > 0) {
    return `online ${months} tháng trước`;
  } else if (day > 0) {
    return `online ${day} ngày trước`;
  } else if (hours > 0) {
    return `online ${hours} tiếng trước`;
  } else if (minutes > 0) {
    return `online ${minutes} phút trước`;
  } else {
    return `online ${giay} giây trước`;
  }
}
