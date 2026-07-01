const messageInput = document.getElementById("messageInput");
const relationSelect = document.getElementById("relationSelect");
const toneSelect = document.getElementById("toneSelect");
const generateButton = document.getElementById("generateButton");
const draftList = document.getElementById("draftList");
const editInput = document.getElementById("editInput");
const beforeText = document.getElementById("beforeText");
const afterText = document.getElementById("afterText");
const copyButton = document.getElementById("copyButton");
const clearButton = document.getElementById("clearButton");
const copyMessage = document.getElementById("copyMessage");

let selectedDraft = "";

const relationWords = {
  friend: {
    greeting: "連絡ありがとう！",
    ending: "また分かったら教えてね。",
    polite: false
  },
  work: {
    greeting: "ご連絡ありがとうございます。",
    ending: "どうぞよろしくお願いいたします。",
    polite: true
  },
  family: {
    greeting: "連絡ありがとう。",
    ending: "またあとで確認するね。",
    polite: false
  },
  senior: {
    greeting: "ご連絡ありがとうございます。",
    ending: "引き続きよろしくお願いいたします。",
    polite: true
  }
};

const toneNotes = {
  normal: "自然で使いやすい返信です。",
  polite: "丁寧で失礼が少ない返信です。",
  warm: "やわらかく、相手に安心感を与える返信です。",
  short: "短く、すぐ返したいときに向いています。"
};

function createDrafts(message, relation, tone) {
  const words = relationWords[relation];
  const topic = summarizeMessage(message);
  const isQuestion = message.includes("？") || message.includes("?") || message.includes("大丈夫");
  const isThanks = message.includes("ありがとう") || message.includes("助か");
  const isInvite = message.includes("行") || message.includes("参加") || message.includes("予定");

  if (tone === "short") {
    return [
      {
        title: "短く返す",
        text: `${words.greeting}\n${topic}、確認しました。大丈夫です。`,
        note: "必要なことだけを返す、軽めの返信です。"
      },
      {
        title: "少しだけ丁寧に返す",
        text: `${words.greeting}\n${topic}について、問題ありません。${words.ending}`,
        note: "短いけれど、きちんとした印象になります。"
      },
      {
        title: "確認つきで返す",
        text: `${words.greeting}\n${topic}で進めます。変更があれば教えてください。`,
        note: "相手に次の連絡をしやすくする返信です。"
      }
    ];
  }

  if (tone === "polite" || words.polite) {
    return [
      {
        title: "丁寧に了承する",
        text: `${words.greeting}\n${topic}の件、承知しました。\n内容を確認のうえ、進めさせていただきます。\n${words.ending}`,
        note: toneNotes.polite
      },
      {
        title: "確認を入れて返す",
        text: `${words.greeting}\n${topic}について確認いたしました。\n念のため、こちらの認識で問題ないかご確認いただけますと幸いです。\n${words.ending}`,
        note: "仕事や目上の人に、慎重に返したいとき向きです。"
      },
      {
        title: "やわらかく丁寧に返す",
        text: `${words.greeting}\nご共有いただき助かります。\n${topic}について、こちらでも確認して対応いたします。\n${words.ending}`,
        note: "丁寧さの中に、少し親しみもある返信です。"
      }
    ];
  }

  if (tone === "warm") {
    return [
      {
        title: "やさしく返す",
        text: `${words.greeting}\n教えてくれて助かったよ。\n${topic}のこと、こちらでも確認しておくね。\n${words.ending}`,
        note: toneNotes.warm
      },
      {
        title: "安心感を出す",
        text: `${words.greeting}\n${isQuestion ? "その内容で大丈夫だよ。" : "内容確認したよ。"}\n気にかけてくれてありがとう。`,
        note: "相手の不安を減らしたいときに向いています。"
      },
      {
        title: "気づかいを入れる",
        text: `${words.greeting}\n${topic}、了解だよ。\n無理しすぎず進めようね。`,
        note: "親しい相手に、やわらかく返したいときの案です。"
      }
    ];
  }

  return [
    {
      title: "自然に返す",
      text: `${words.greeting}\n${topic}、確認したよ。\n${isQuestion ? "その内容で大丈夫です。" : "また必要なことがあれば教えてください。"}`,
      note: toneNotes.normal
    },
    {
      title: "前向きに返す",
      text: `${words.greeting}\n${isInvite ? "予定について確認しました。" : `${topic}について確認しました。`}\nこちらも準備しておきます。`,
      note: "前向きで、相手に安心してもらいやすい返信です。"
    },
    {
      title: "感謝を入れて返す",
      text: `${words.greeting}\n${isThanks ? "こちらこそありがとう。" : "教えてくれてありがとう。"}\n${topic}の件、了解しました。`,
      note: "感謝を入れるので、やわらかい印象になります。"
    }
  ];
}

function summarizeMessage(message) {
  const trimmed = message.trim().replace(/\s+/g, " ");

  if (!trimmed) {
    return "いただいた内容";
  }

  if (trimmed.length <= 24) {
    return `「${trimmed}」`;
  }

  return `「${trimmed.slice(0, 24)}...」`;
}

function renderDrafts(drafts) {
  draftList.innerHTML = "";

  drafts.forEach((draft, index) => {
    const card = document.createElement("article");
    card.className = "draft-card";

    const title = document.createElement("h3");
    title.textContent = `案${index + 1}：${draft.title}`;

    const text = document.createElement("p");
    text.className = "draft-text";
    text.textContent = draft.text;

    const note = document.createElement("p");
    note.className = "draft-note";
    note.textContent = `印象：${draft.note}`;

    const button = document.createElement("button");
    button.className = "use-button";
    button.type = "button";
    button.textContent = "これを使う";
    button.addEventListener("click", () => useDraft(draft.text));

    card.append(title, text, note, button);
    draftList.appendChild(card);
  });
}

function useDraft(text) {
  selectedDraft = text;
  editInput.value = text;
  beforeText.textContent = text;
  afterText.textContent = text;
  copyMessage.textContent = "下の入力欄で少し直せます。";
  editInput.focus();
}

generateButton.addEventListener("click", () => {
  const message = messageInput.value.trim();

  if (!message) {
    draftList.innerHTML = '<p class="empty-message">まずは相手から来たメッセージを入力してください。</p>';
    messageInput.focus();
    return;
  }

  const drafts = createDrafts(message, relationSelect.value, toneSelect.value);
  renderDrafts(drafts);
  copyMessage.textContent = "";
});

editInput.addEventListener("input", () => {
  afterText.textContent = editInput.value || "自分で直した文が表示されます。";

  if (!selectedDraft && editInput.value) {
    beforeText.textContent = "手入力から作成しています。";
  }
});

copyButton.addEventListener("click", async () => {
  const text = editInput.value.trim();

  if (!text) {
    copyMessage.textContent = "コピーする文章がまだありません。";
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    copyMessage.textContent = "コピーしました。";
  } catch (error) {
    editInput.select();
    document.execCommand("copy");
    copyMessage.textContent = "コピーしました。";
  }
});

clearButton.addEventListener("click", () => {
  selectedDraft = "";
  editInput.value = "";
  beforeText.textContent = "AI案を選ぶと表示されます。";
  afterText.textContent = "自分で直した文が表示されます。";
  copyMessage.textContent = "";
});
