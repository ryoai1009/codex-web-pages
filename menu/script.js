const menuPlans = {
  japanese: {
    breakfast: {
      title: "\u5375\u3068\u3054\u306f\u3093\u306e\u671d\u30d7\u30ec\u30fc\u30c8",
      text: "\u3042\u308b\u98df\u6750\u3092\u4f7f\u3063\u3066\u3001\u5375\u30fb\u3054\u306f\u3093\u30fb\u91ce\u83dc\u3092\u8efd\u304f\u307e\u3068\u3081\u308b\u671d\u3054\u306f\u3093\u3067\u3059\u3002"
    },
    lunch: {
      title: "\u8c46\u8150\u3068\u91ce\u83dc\u306e\u3084\u3055\u3057\u3044\u4e3c",
      text: "\u8c46\u8150\u3084\u91ce\u83dc\u3092\u3054\u306f\u3093\u306b\u306e\u305b\u3066\u3001\u3057\u3087\u3046\u3086\u7cfb\u306e\u5473\u3067\u3055\u3063\u3068\u4f5c\u308c\u307e\u3059\u3002"
    },
    dinner: {
      title: "\u5177\u3060\u304f\u3055\u3093\u307f\u305d\u6c41\u3068\u4e3b\u83dc",
      text: "\u6b8b\u3063\u3066\u3044\u308b\u91ce\u83dc\u3092\u307f\u305d\u6c41\u306b\u5165\u308c\u3066\u3001\u4e3b\u83dc\u30921\u54c1\u8db3\u3059\u591c\u3054\u306f\u3093\u3067\u3059\u3002"
    },
    shopping: ["\u307f\u305d", "\u306d\u304e", "\u304d\u306e\u3053", "\u9b5a\u307e\u305f\u306f\u9d8f\u8089"]
  },
  western: {
    breakfast: {
      title: "\u305f\u307e\u3054\u30c8\u30fc\u30b9\u30c8\u98a8\u30d7\u30ec\u30fc\u30c8",
      text: "\u5375\u3084\u91ce\u83dc\u3092\u4f7f\u3063\u3066\u3001\u30d1\u30f3\u306b\u3082\u3054\u306f\u3093\u306b\u3082\u5408\u3046\u8efd\u3044\u671d\u98df\u306b\u3057\u307e\u3059\u3002"
    },
    lunch: {
      title: "\u51b7\u8535\u5eab\u91ce\u83dc\u306e\u30b9\u30fc\u30d7\u30e9\u30f3\u30c1",
      text: "\u91ce\u83dc\u3092\u30b9\u30fc\u30d7\u306b\u3057\u3066\u3001\u4e3b\u98df\u3068\u4e00\u7dd2\u306b\u98df\u3079\u308b\u663c\u3054\u306f\u3093\u3067\u3059\u3002"
    },
    dinner: {
      title: "\u30c1\u30fc\u30ba\u98a8\u5473\u306e\u7c21\u5358\u304a\u304b\u305a",
      text: "\u5bb6\u306b\u3042\u308b\u98df\u6750\u3092\u7092\u3081\u3066\u3001\u30c1\u30fc\u30ba\u3084\u30b3\u30f3\u30bd\u30e1\u3067\u6d0b\u98a8\u306b\u307e\u3068\u3081\u307e\u3059\u3002"
    },
    shopping: ["\u30d1\u30f3", "\u30c1\u30fc\u30ba", "\u725b\u4e73", "\u30b3\u30f3\u30bd\u30e1"]
  },
  chinese: {
    breakfast: {
      title: "\u4e2d\u83ef\u98a8\u305f\u307e\u3054\u30b9\u30fc\u30d7",
      text: "\u5375\u3068\u91ce\u83dc\u3067\u3001\u8efd\u304f\u98df\u3079\u3089\u308c\u308b\u4e2d\u83ef\u98a8\u306e\u671d\u30e1\u30cb\u30e5\u30fc\u3067\u3059\u3002"
    },
    lunch: {
      title: "\u91ce\u83dc\u305f\u3063\u3077\u308a\u30c1\u30e3\u30fc\u30cf\u30f3",
      text: "\u3054\u306f\u3093\u3068\u6b8b\u308a\u91ce\u83dc\u3092\u4f7f\u3063\u3066\u3001\u624b\u65e9\u304f\u4f5c\u308c\u308b\u663c\u3054\u306f\u3093\u3067\u3059\u3002"
    },
    dinner: {
      title: "\u8c46\u8150\u3068\u91ce\u83dc\u306e\u4e2d\u83ef\u7092\u3081",
      text: "\u8c46\u8150\u3084\u91ce\u83dc\u3092\u7092\u3081\u3066\u3001\u3054\u307e\u6cb9\u3068\u3057\u3087\u3046\u3086\u3067\u307e\u3068\u3081\u307e\u3059\u3002"
    },
    shopping: ["\u3054\u307e\u6cb9", "\u3057\u3087\u3046\u304c", "\u4e2d\u83ef\u3060\u3057", "\u8c5a\u8089\u307e\u305f\u306f\u3072\u304d\u8089"]
  },
  easy: {
    breakfast: {
      title: "\u3042\u308b\u3082\u306e\u3067\u671d\u30bb\u30c3\u30c8",
      text: "\u5375\u3001\u91ce\u83dc\u3001\u3054\u306f\u3093\u306a\u3069\u3092\u7121\u7406\u306a\u304f\u7d44\u307f\u5408\u308f\u305b\u308b\u671d\u3054\u306f\u3093\u3067\u3059\u3002"
    },
    lunch: {
      title: "\u306e\u305b\u308b\u3060\u3051\u30e9\u30f3\u30c1",
      text: "\u3054\u306f\u3093\u3084\u30d1\u30f3\u306b\u3001\u51b7\u8535\u5eab\u306e\u98df\u6750\u3092\u306e\u305b\u3066\u4f5c\u308b\u7c21\u5358\u30e9\u30f3\u30c1\u3067\u3059\u3002"
    },
    dinner: {
      title: "\u4e00\u76bf\u3067\u7d42\u308f\u308b\u7c21\u5358\u3054\u306f\u3093",
      text: "\u98df\u6750\u3092\u7092\u3081\u308b\u3001\u716e\u308b\u3001\u306e\u305b\u308b\u306e\u3069\u308c\u304b\u3067\u4f5c\u308b\u591c\u3054\u306f\u3093\u3067\u3059\u3002"
    },
    shopping: ["\u5375", "\u30ab\u30c3\u30c8\u91ce\u83dc", "\u51b7\u51cd\u3046\u3069\u3093", "\u30c4\u30ca\u7f36"]
  }
};

const menuForm = document.getElementById("menuForm");
const ingredientsInput = document.getElementById("ingredientsInput");
const shoppingInput = document.getElementById("shoppingInput");
const shoppingBestBeforeDate = document.getElementById("shoppingBestBeforeDate");
const shoppingUseByDate = document.getElementById("shoppingUseByDate");
const bestBeforeItem = document.getElementById("bestBeforeItem");
const bestBeforeDate = document.getElementById("bestBeforeDate");
const useByItem = document.getElementById("useByItem");
const useByDate = document.getElementById("useByDate");
const genreSelect = document.getElementById("genreSelect");
const resetButton = document.getElementById("resetButton");
const resultArea = document.getElementById("resultArea");
const noticeCard = document.getElementById("noticeCard");
const noticeList = document.getElementById("noticeList");
const easyTitle = document.getElementById("easyTitle");
const easyText = document.getElementById("easyText");
const specialTitle = document.getElementById("specialTitle");
const specialText = document.getElementById("specialText");
const useByTitle = document.getElementById("useByTitle");
const useByText = document.getElementById("useByText");
const easyRecipeLink = document.getElementById("easyRecipeLink");
const specialRecipeLink = document.getElementById("specialRecipeLink");
const useByRecipeLink = document.getElementById("useByRecipeLink");
const shoppingList = document.getElementById("shoppingList");
const suggestionTitle = document.getElementById("suggestionTitle");
const suggestionText = document.getElementById("suggestionText");

const recipeSuggestions = {
  japanese: {
    title: "\u89aa\u5b50\u4e3c\u98a8\u306e\u304b\u3093\u305f\u3093\u3054\u306f\u3093",
    needed: ["\u9d8f\u8089", "\u5375", "\u7389\u306d\u304e"],
    addText: "\u9d8f\u8089\u30fb\u5375\u30fb\u7389\u306d\u304e\u304c\u305d\u308d\u3046\u3068\u3001\u89aa\u5b50\u4e3c\u98a8\u306e\u3054\u306f\u3093\u304c\u4f5c\u308a\u3084\u3059\u3044\u3067\u3059\u3002"
  },
  western: {
    title: "\u91ce\u83dc\u3068\u30c1\u30fc\u30ba\u306e\u30aa\u30e0\u30ec\u30c4",
    needed: ["\u5375", "\u30c1\u30fc\u30ba", "\u30c8\u30de\u30c8"],
    addText: "\u5375\u30fb\u30c1\u30fc\u30ba\u30fb\u30c8\u30de\u30c8\u3092\u8db3\u3059\u3068\u3001\u6d0b\u98a8\u306e\u304a\u304b\u305a\u304c\u4f5c\u308a\u3084\u3059\u3044\u3067\u3059\u3002"
  },
  chinese: {
    title: "\u8c46\u8150\u3068\u3072\u304d\u8089\u306e\u4e2d\u83ef\u7092\u3081",
    needed: ["\u8c46\u8150", "\u3072\u304d\u8089", "\u3054\u307e\u6cb9"],
    addText: "\u8c46\u8150\u30fb\u3072\u304d\u8089\u30fb\u3054\u307e\u6cb9\u304c\u3042\u308b\u3068\u3001\u4e2d\u83ef\u98a8\u306e\u4e3b\u83dc\u306b\u3067\u304d\u307e\u3059\u3002"
  },
  easy: {
    title: "\u30c4\u30ca\u3068\u91ce\u83dc\u306e\u306e\u305b\u308b\u3060\u3051\u3054\u306f\u3093",
    needed: ["\u30c4\u30ca\u7f36", "\u30ab\u30c3\u30c8\u91ce\u83dc", "\u3054\u306f\u3093"],
    addText: "\u30c4\u30ca\u7f36\u30fb\u30ab\u30c3\u30c8\u91ce\u83dc\u30fb\u3054\u306f\u3093\u304c\u3042\u308b\u3068\u3001\u3059\u3050\u98df\u3079\u3089\u308c\u308b\u4e00\u76bf\u306b\u3067\u304d\u307e\u3059\u3002"
  }
};

function parseItems(text) {
  return text
    .split(/[,、\n]/)
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

function getIngredients() {
  return [
    ...parseItems(ingredientsInput.value),
    ...parseItems(shoppingInput.value)
  ];
}

function getUrgentItems() {
  const items = [];
  const shoppingItems = parseItems(shoppingInput.value);

  addUrgentItem(items, "\u8cde\u5473\u671f\u9650", bestBeforeItem.value.trim(), bestBeforeDate.value);
  addUrgentItem(items, "\u6d88\u8cbb\u671f\u9650", useByItem.value.trim(), useByDate.value);
  shoppingItems.forEach((itemName) => {
    addUrgentItem(items, "\u8cb7\u3044\u51fa\u3057\u98df\u6750\u306e\u8cde\u5473\u671f\u9650", itemName, shoppingBestBeforeDate.value);
    addUrgentItem(items, "\u8cb7\u3044\u51fa\u3057\u98df\u6750\u306e\u6d88\u8cbb\u671f\u9650", itemName, shoppingUseByDate.value);
  });

  return items;
}

function addUrgentItem(items, label, itemName, dateText) {
  if (!itemName || !dateText) {
    return;
  }

  const today = new Date();
  const targetDate = new Date(`${dateText}T00:00:00`);
  const diffDays = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24));

  if (diffDays <= 3) {
    items.push({
      label,
      name: itemName,
      date: dateText,
      diffDays
    });
  }
}

function createMealText(baseText, ingredients, urgentItems) {
  if (ingredients.length === 0) {
    return `${baseText} \u98df\u6750\u3092\u5165\u529b\u3059\u308b\u3068\u3001\u3088\u308a\u305d\u308c\u3063\u307d\u3044\u63d0\u6848\u306b\u306a\u308a\u307e\u3059\u3002`;
  }

  if (urgentItems.length > 0) {
    const urgentNames = urgentItems.map((item) => item.name).join("\u3001");
    return `${baseText} \u671f\u9650\u304c\u8fd1\u3044 ${urgentNames} \u3092\u512a\u5148\u3057\u3066\u4f7f\u3046\u306e\u304c\u304a\u3059\u3059\u3081\u3067\u3059\u3002\u4eca\u3042\u308b\u98df\u6750\uff1a${ingredients.join("\u3001")}\u3002`;
  }

  return `${baseText} \u4eca\u3042\u308b\u98df\u6750\uff1a${ingredients.join("\u3001")}\u3002`;
}

function showNotice(urgentItems) {
  noticeList.innerHTML = "";

  if (urgentItems.length === 0) {
    noticeCard.classList.add("hidden");
    return;
  }

  urgentItems.forEach((item) => {
    const listItem = document.createElement("li");
    const dayText = item.diffDays <= 0 ? "\u4eca\u65e5\u307e\u3067" : `\u3042\u3068${item.diffDays}\u65e5`;
    listItem.textContent = `${item.name} \u306f${item.label}\u304c\u8fd1\u3044\u3067\u3059\uff08${dayText}\uff09\u3002\u5148\u306b\u4f7f\u3046\u732e\u7acb\u304c\u304a\u3059\u3059\u3081\u3067\u3059\u3002`;
    noticeList.appendChild(listItem);
  });

  noticeCard.classList.remove("hidden");
}

function showRecipeSuggestion(ingredients, genre) {
  const suggestion = recipeSuggestions[genre];
  const missingItems = suggestion.needed.filter((neededItem) => {
    return !ingredients.some((ingredient) => ingredient.includes(neededItem) || neededItem.includes(ingredient));
  });

  suggestionTitle.textContent = suggestion.title;

  if (missingItems.length === 0) {
    suggestionText.textContent = "\u4eca\u3042\u308b\u98df\u6750\u3067\u4f5c\u308c\u305d\u3046\u3067\u3059\u3002\u3055\u3063\u305d\u304f\u8a66\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002";
    return;
  }

  suggestionText.textContent = `\u8cb7\u3044\u8db3\u3059\u3068\u3088\u3044\u3082\u306e\uff1a${missingItems.join("\u3001")}\u3002${suggestion.addText}`;
}

function updateRecipeLinks(genre) {
  easyRecipeLink.href = `recipe.html?type=easy&genre=${genre}`;
  specialRecipeLink.href = `recipe.html?type=special&genre=${genre}`;
  useByRecipeLink.href = `recipe.html?type=useBy&genre=${genre}`;
}

function createCategoryPlans(plan, urgentItems) {
  const urgentNames = urgentItems.map((item) => item.name).join("\u3001");
  const urgentHint = urgentNames
    ? `\u7279\u306b ${urgentNames} \u3092\u5148\u306b\u4f7f\u3046\u306e\u304c\u304a\u3059\u3059\u3081\u3067\u3059\u3002`
    : "\u6d88\u8cbb\u671f\u9650\u304c\u8fd1\u3044\u98df\u6750\u3092\u5165\u308c\u308b\u3068\u3001\u3053\u3053\u306b\u512a\u5148\u30e1\u30cb\u30e5\u30fc\u3092\u51fa\u3057\u307e\u3059\u3002";

  return {
    easy: {
      title: plan.lunch.title,
      text: `${plan.lunch.text} \u77ed\u6642\u9593\u3067\u4f5c\u308a\u305f\u3044\u65e5\u306b\u5411\u3044\u3066\u3044\u307e\u3059\u3002`
    },
    special: {
      title: plan.dinner.title,
      text: `${plan.dinner.text} \u5c11\u3057\u6642\u9593\u3092\u304b\u3051\u3066\u3001\u4e3b\u83dc\u3068\u526f\u83dc\u3092\u610f\u8b58\u3059\u308b\u3068\u6e80\u8db3\u611f\u304c\u51fa\u307e\u3059\u3002`
    },
    useBy: {
      title: urgentItems.length > 0 ? "\u671f\u9650\u304c\u8fd1\u3044\u98df\u6750\u3092\u4f7f\u3046\u4e00\u76bf" : plan.breakfast.title,
      text: urgentItems.length > 0 ? `${urgentHint} \u7092\u3081\u308b\u3001\u716e\u308b\u3001\u30b9\u30fc\u30d7\u306b\u3059\u308b\u306e\u3069\u308c\u304b\u3067\u4f7f\u3044\u5207\u308a\u307e\u3057\u3087\u3046\u3002` : `${plan.breakfast.text} ${urgentHint}`
    }
  };
}

function showMenuPlan(event) {
  event.preventDefault();

  const ingredients = getIngredients();
  const urgentItems = getUrgentItems();
  const plan = menuPlans[genreSelect.value];
  const categoryPlans = createCategoryPlans(plan, urgentItems);

  easyTitle.textContent = categoryPlans.easy.title;
  easyText.textContent = createMealText(categoryPlans.easy.text, ingredients, urgentItems);
  specialTitle.textContent = categoryPlans.special.title;
  specialText.textContent = createMealText(categoryPlans.special.text, ingredients, urgentItems);
  useByTitle.textContent = categoryPlans.useBy.title;
  useByText.textContent = createMealText(categoryPlans.useBy.text, ingredients, urgentItems);
  showNotice(urgentItems);
  showRecipeSuggestion(ingredients, genreSelect.value);
  updateRecipeLinks(genreSelect.value);

  shoppingList.innerHTML = "";
  plan.shopping.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    shoppingList.appendChild(listItem);
  });

  resultArea.classList.remove("hidden");
}

function resetMenu() {
  menuForm.reset();
  resultArea.classList.add("hidden");
  noticeCard.classList.add("hidden");
  noticeList.innerHTML = "";
  shoppingList.innerHTML = "";
  suggestionTitle.textContent = "---";
  suggestionText.textContent = "---";
}

menuForm.addEventListener("submit", showMenuPlan);
resetButton.addEventListener("click", resetMenu);
