const results = [
  {
    fortune: "\u5927\u5409",
    message: "\u4eca\u65e5\u306f\u601d\u3044\u3064\u3044\u305f\u3053\u3068\u3092\u5f62\u306b\u3057\u3084\u3059\u3044\u65e5\u3067\u3059\u3002",
    task: "\u5c0f\u3055\u306aWeb\u30da\u30fc\u30b8\u30921\u3064\u76f4\u3059",
    prompt: "\u521d\u5fc3\u8005\u306b\u3082\u308f\u304b\u308b\u3088\u3046\u306b\u30013\u3064\u306e\u624b\u9806\u3067\u6559\u3048\u3066",
    color: "\u30b3\u30fc\u30e9\u30eb\u30d4\u30f3\u30af",
    visual: "AI\u304c\u80cc\u4e2d\u3092\u62bc\u3057\u3066\u304f\u308c\u308b\u65e5",
    theme: "theme-daikichi"
  },
  {
    fortune: "\u4e2d\u5409",
    message: "\u6b32\u5f35\u308a\u3059\u304e\u305a\u30011\u3064\u306b\u7d5e\u308b\u3068\u9032\u307f\u307e\u3059\u3002",
    task: "\u30e1\u30e2\u30923\u884c\u3060\u3051\u66f8\u304f",
    prompt: "\u3053\u306e\u30a2\u30a4\u30c7\u30a2\u3092\u3001\u3082\u3063\u3068\u3084\u3055\u3057\u3044\u8a00\u8449\u306b\u3057\u3066",
    color: "\u30df\u30f3\u30c8\u30b0\u30ea\u30fc\u30f3",
    visual: "\u3072\u3089\u3081\u304d\u3092\u6574\u7406\u3067\u304d\u308b\u65e5",
    theme: "theme-chukichi"
  },
  {
    fortune: "\u5c0f\u5409",
    message: "\u5b8c\u74a7\u3088\u308a\u3082\u3001\u307e\u305a\u306f\u8a66\u3059\u3053\u3068\u304c\u5409\u3067\u3059\u3002",
    task: "\u30dc\u30bf\u30f3\u306e\u8272\u3092\u5909\u3048\u3066\u307f\u308b",
    prompt: "\u3053\u306e\u30b3\u30fc\u30c9\u306e\u5f79\u5272\u3092\u3001\u4f8b\u3048\u8a71\u3067\u8aac\u660e\u3057\u3066",
    color: "\u30e9\u30d9\u30f3\u30c0\u30fc",
    visual: "\u5c0f\u3055\u304f\u8a66\u3059\u3068\u697d\u3057\u3044\u65e5",
    theme: "theme-shokichi"
  },
  {
    fortune: "\u5409",
    message: "\u3044\u3064\u3082\u306e\u4f5c\u696d\u306b\u3001\u5c0f\u3055\u306a\u5de5\u592b\u3092\u8db3\u3059\u3068\u826f\u3044\u65e5\u3067\u3059\u3002",
    task: "\u30bf\u30a4\u30c8\u30eb\u6587\u3092\u3082\u3046\u5c11\u3057\u308f\u304b\u308a\u3084\u3059\u304f\u3059\u308b",
    prompt: "\u3053\u306e\u6587\u7ae0\u3092note\u5411\u3051\u306b\u77ed\u304f\u6574\u3048\u3066",
    color: "\u30b9\u30ab\u30a4\u30d6\u30eb\u30fc",
    visual: "\u4f5c\u696d\u306b\u98a8\u304c\u5165\u308b\u65e5",
    theme: "theme-kichi"
  },
  {
    fortune: "\u672b\u5409",
    message: "\u6025\u304c\u305a\u306b\u6574\u3048\u308b\u3068\u3001\u660e\u65e5\u306e\u81ea\u5206\u304c\u52a9\u304b\u308a\u307e\u3059\u3002",
    task: "\u30d5\u30a1\u30a4\u30eb\u540d\u3084\u30d5\u30a9\u30eb\u30c0\u3092\u6574\u7406\u3059\u308b",
    prompt: "\u3053\u308c\u3092\u3082\u3063\u3068\u30b7\u30f3\u30d7\u30eb\u306b\u3059\u308b\u306b\u306f\u3069\u3046\u3059\u308c\u3070\u3044\u3044\uff1f",
    color: "\u30cf\u30cb\u30fc\u30a4\u30a8\u30ed\u30fc",
    visual: "\u660e\u65e5\u306e\u6e96\u5099\u304c\u9032\u3080\u65e5",
    theme: "theme-suekichi"
  }
];

const drawButton = document.getElementById("drawButton");
const resultCard = document.getElementById("resultCard");
const drawBox = document.getElementById("drawBox");
const ticket = document.getElementById("ticket");
const fortuneVisual = document.getElementById("fortuneVisual");
const visualText = document.getElementById("visualText");
const fortune = document.getElementById("fortune");
const message = document.getElementById("message");
const task = document.getElementById("task");
const prompt = document.getElementById("prompt");
const color = document.getElementById("color");
let animationTimer = null;

function drawOmikuji() {
  playDrawSound();
  resultCard.classList.add("hidden");
  runDrawAnimation();
  drawButton.disabled = true;
  drawButton.textContent = "\u304f\u3058\u3092\u5f15\u3044\u3066\u3044\u307e\u3059...";

  const randomIndex = Math.floor(Math.random() * results.length);
  const result = results[randomIndex];

  clearTimeout(animationTimer);
  animationTimer = setTimeout(() => {
    showResult(result);
  }, 850);
}

function showResult(result) {
  document.body.className = result.theme;
  fortune.textContent = result.fortune;
  visualText.textContent = result.visual;
  message.textContent = result.message;
  task.textContent = result.task;
  prompt.textContent = result.prompt;
  color.textContent = result.color;

  resultCard.classList.remove("hidden");
  resultCard.classList.remove("pop");
  fortuneVisual.classList.remove("reveal");
  void resultCard.offsetWidth;
  resultCard.classList.add("pop");
  fortuneVisual.classList.add("reveal");

  drawButton.disabled = false;
  drawButton.textContent = "\u3082\u3046\u4e00\u5ea6\u5f15\u304f";
}

function runDrawAnimation() {
  drawBox.classList.remove("shake");
  ticket.classList.remove("show");

  void drawBox.offsetWidth;

  drawBox.classList.add("shake");
  ticket.classList.add("show");
}

function playDrawSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;

  if (!AudioContext) {
    return;
  }

  const audioContext = new AudioContext();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(660, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(990, audioContext.currentTime + 0.12);
  gain.gain.setValueAtTime(0.08, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.16);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.16);
}

drawButton.addEventListener("click", drawOmikuji);
