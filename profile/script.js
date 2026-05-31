const messageButton = document.getElementById("messageButton");

const messages = [
  "\u307e\u305a\u306f1\u30da\u30fc\u30b8\u4f5c\u308c\u305f\u3089\u5927\u6210\u529f\u3067\u3059\u3002",
  "HTML\u306f\u6587\u7ae0\u306e\u9aa8\u7d44\u307f\u3001CSS\u306f\u898b\u305f\u76ee\u3001JavaScript\u306f\u52d5\u304d\u3067\u3059\u3002",
  "\u5c11\u3057\u305a\u3064\u76f4\u3057\u3066\u3044\u3051\u3070\u3001\u30b5\u30a4\u30c8\u306f\u3061\u3083\u3093\u3068\u80b2\u3061\u307e\u3059\u3002"
];

messageButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  alert(messages[randomIndex]);
});
