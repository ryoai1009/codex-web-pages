const baseChecklistData = {
  "one-night": [
    {
      category: "貴重品",
      items: [
        item("財布", true, "現金とカードを確認"),
        item("スマホ", true, "充電も忘れずに"),
        item("身分証明書", true, "ホテルや移動で必要になることがあります"),
        item("交通チケット", false, "予約番号やQRコードも確認")
      ]
    },
    {
      category: "衣類",
      items: [
        item("着替え1日分"),
        item("下着・靴下", true),
        item("羽織るもの", false, "朝晩の気温差に備える")
      ]
    },
    {
      category: "洗面・ケア用品",
      items: [
        item("歯ブラシ"),
        item("コンタクト・眼鏡", true),
        item("常備薬", true),
        item("ハンカチ・ティッシュ")
      ]
    },
    {
      category: "ガジェット",
      items: [
        item("充電器", true),
        item("モバイルバッテリー", true),
        item("イヤホン")
      ]
    },
    {
      category: "あると便利なもの",
      items: [
        item("折りたたみ傘"),
        item("エコバッグ"),
        item("小さめの袋", false, "洗濯物やゴミ入れに便利")
      ]
    }
  ],
  "long-stay": [
    {
      category: "貴重品",
      items: [
        item("財布", true),
        item("スマホ", true),
        item("身分証明書", true),
        item("保険証", true),
        item("交通チケット")
      ]
    },
    {
      category: "衣類",
      items: [
        item("着替え数日分"),
        item("下着・靴下", true),
        item("部屋着"),
        item("洗濯ネット"),
        item("予備の靴下")
      ]
    },
    {
      category: "洗面・ケア用品",
      items: [
        item("歯ブラシ"),
        item("スキンケア用品"),
        item("シャンプー類"),
        item("常備薬", true),
        item("爪切り")
      ]
    },
    {
      category: "ガジェット",
      items: [
        item("充電器", true),
        item("モバイルバッテリー", true),
        item("延長コード"),
        item("イヤホン")
      ]
    },
    {
      category: "あると便利なもの",
      items: [
        item("折りたたみ傘"),
        item("エコバッグ"),
        item("圧縮袋"),
        item("小さめの洗剤")
      ]
    }
  ],
  business: [
    {
      category: "貴重品",
      items: [
        item("財布", true),
        item("スマホ", true),
        item("身分証明書", true),
        item("名刺", true),
        item("会社の入館証", true)
      ]
    },
    {
      category: "衣類",
      items: [
        item("シャツ"),
        item("靴下", true),
        item("予備のネクタイ"),
        item("シワ取りスプレー")
      ]
    },
    {
      category: "洗面・ケア用品",
      items: [
        item("歯ブラシ"),
        item("整髪料"),
        item("常備薬", true),
        item("コンタクト・眼鏡", true)
      ]
    },
    {
      category: "ガジェット",
      items: [
        item("パソコン", true),
        item("パソコン充電器", true),
        item("スマホ充電器", true),
        item("資料データ", true),
        item("イヤホン")
      ]
    },
    {
      category: "あると便利なもの",
      items: [
        item("折りたたみ傘"),
        item("メモ帳"),
        item("ペン"),
        item("クリアファイル")
      ]
    }
  ],
  event: [
    {
      category: "貴重品",
      items: [
        item("財布", true),
        item("スマホ", true),
        item("身分証明書", true),
        item("イベントチケット", true),
        item("予約確認メール")
      ]
    },
    {
      category: "衣類",
      items: [
        item("動きやすい服"),
        item("タオル"),
        item("羽織るもの"),
        item("替えの靴下")
      ]
    },
    {
      category: "洗面・ケア用品",
      items: [
        item("ハンカチ・ティッシュ"),
        item("ウェットティッシュ"),
        item("常備薬", true),
        item("日焼け止め")
      ]
    },
    {
      category: "ガジェット",
      items: [
        item("スマホ充電器", true),
        item("モバイルバッテリー", true),
        item("イヤホン"),
        item("カメラ")
      ]
    },
    {
      category: "あると便利なもの",
      items: [
        item("小さめの袋"),
        item("飲み物"),
        item("エコバッグ"),
        item("雨具")
      ]
    }
  ]
};

const storageKey = "travelChecklistApp";
const tripButtons = document.querySelectorAll(".trip-button");
const checklist = document.getElementById("checklist");
const checkedCount = document.getElementById("checkedCount");
const remainingCount = document.getElementById("remainingCount");
const totalCount = document.getElementById("totalCount");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const resetButton = document.getElementById("resetButton");
const departureDate = document.getElementById("departureDate");
const dateMessage = document.getElementById("dateMessage");
const addForm = document.getElementById("addForm");
const newItemName = document.getElementById("newItemName");
const newItemCategory = document.getElementById("newItemCategory");
const newItemImportant = document.getElementById("newItemImportant");

let currentTrip = "one-night";
let checkedItems = new Set();
let customItems = [];

function item(name, important = false, note = "") {
  return { name, important, note };
}

function makeItemId(category, name, customId = "") {
  return `${currentTrip}-${category}-${name}-${customId}`;
}

function loadState() {
  const saved = localStorage.getItem(storageKey);

  if (!saved) {
    return;
  }

  const state = JSON.parse(saved);
  currentTrip = state.currentTrip || "one-night";
  checkedItems = new Set(state.checkedItems || []);
  customItems = state.customItems || [];
  departureDate.value = state.departureDate || "";
}

function saveState() {
  const state = {
    currentTrip,
    checkedItems: Array.from(checkedItems),
    customItems,
    departureDate: departureDate.value
  };

  localStorage.setItem(storageKey, JSON.stringify(state));
}

function getCurrentGroups() {
  const copiedGroups = baseChecklistData[currentTrip].map((group) => ({
    category: group.category,
    items: [...group.items]
  }));

  customItems
    .filter((customItem) => customItem.trip === currentTrip)
    .forEach((customItem) => {
      const group = copiedGroups.find((itemGroup) => itemGroup.category === customItem.category);
      group.items.push({
        name: customItem.name,
        important: customItem.important,
        note: "自分で追加した持ち物",
        customId: customItem.id
      });
    });

  return copiedGroups;
}

function renderChecklist() {
  checklist.innerHTML = "";

  getCurrentGroups().forEach((group) => {
    const card = document.createElement("article");
    card.className = "category-card";

    const title = document.createElement("h3");
    title.textContent = group.category;
    card.appendChild(title);

    const list = document.createElement("ul");
    list.className = "item-list";

    group.items.forEach((packingItem) => {
      const id = makeItemId(group.category, packingItem.name, packingItem.customId || "");
      const listItem = document.createElement("li");
      listItem.className = `check-item${packingItem.important ? " important" : ""}`;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = id;
      checkbox.checked = checkedItems.has(id);

      if (checkbox.checked) {
        listItem.classList.add("done");
      }

      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          checkedItems.add(id);
          listItem.classList.add("done");
        } else {
          checkedItems.delete(id);
          listItem.classList.remove("done");
        }

        updateSummary();
        saveState();
      });

      const label = document.createElement("label");
      label.className = "item-text";
      label.htmlFor = id;

      const name = document.createElement("strong");
      name.textContent = packingItem.name;
      label.appendChild(name);

      if (packingItem.important) {
        const badge = document.createElement("span");
        badge.className = "badge";
        badge.textContent = "忘れやすい";
        label.appendChild(badge);
      }

      if (packingItem.note) {
        const note = document.createElement("small");
        note.textContent = packingItem.note;
        label.appendChild(note);
      }

      listItem.append(checkbox, label);
      list.appendChild(listItem);
    });

    card.appendChild(list);
    checklist.appendChild(card);
  });

  updateSummary();
  updateDateMessage();
}

function updateSummary() {
  const total = getCurrentGroups().reduce((sum, group) => sum + group.items.length, 0);
  const checked = Array.from(checkedItems).filter((id) => id.startsWith(`${currentTrip}-`)).length;
  const remaining = total - checked;
  const percent = total === 0 ? 0 : Math.round((checked / total) * 100);

  checkedCount.textContent = checked;
  remainingCount.textContent = remaining;
  totalCount.textContent = total;
  progressText.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
}

function updateTripButtons() {
  tripButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.trip === currentTrip);
  });
}

function updateDateMessage() {
  if (!departureDate.value) {
    dateMessage.textContent = "出発日を入れると、残り日数を表示します。";
    return;
  }

  const today = new Date();
  const selectedDate = new Date(`${departureDate.value}T00:00:00`);
  today.setHours(0, 0, 0, 0);

  const diff = Math.ceil((selectedDate - today) / 86400000);

  if (diff > 0) {
    dateMessage.textContent = `出発まであと${diff}日です。少しずつ準備しましょう。`;
  } else if (diff === 0) {
    dateMessage.textContent = "出発は今日です。貴重品と充電器を最後に確認しましょう。";
  } else {
    dateMessage.textContent = "出発日が過ぎています。次の旅行用に日付を変えてください。";
  }
}

tripButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentTrip = button.dataset.trip;
    updateTripButtons();
    renderChecklist();
    saveState();
  });
});

resetButton.addEventListener("click", () => {
  checkedItems = new Set(Array.from(checkedItems).filter((id) => !id.startsWith(`${currentTrip}-`)));
  renderChecklist();
  saveState();
});

departureDate.addEventListener("change", () => {
  updateDateMessage();
  saveState();
});

addForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = newItemName.value.trim();

  if (!name) {
    newItemName.focus();
    return;
  }

  customItems.push({
    id: Date.now().toString(),
    trip: currentTrip,
    category: newItemCategory.value,
    name,
    important: newItemImportant.checked
  });

  newItemName.value = "";
  newItemImportant.checked = false;
  renderChecklist();
  saveState();
});

loadState();
updateTripButtons();
renderChecklist();
