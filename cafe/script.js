const todayMessage = document.querySelector("#today-message");
const reserveButton = document.querySelector("#reserve-button");
const date = new Date();
const dayNames = ["日", "月", "火", "水", "木", "金", "土"];
const dayName = dayNames[date.getDay()];

todayMessage.textContent = `今日は${dayName}曜日です。営業日をご確認のうえ、ゆっくりお越しください。`;

reserveButton.addEventListener("click", () => {
  alert("ご予約ありがとうございます。お電話 03-1234-5678 でも受け付けています。");
});
