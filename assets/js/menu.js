(function () {
  "use strict";

  const menuData = window.MENU_DATA || [];
  const app = window.RestaurantTemplate;
  const state = {
    category: "all",
    search: ""
  };

  document.addEventListener("DOMContentLoaded", () => {
    renderMenuControls();
    renderMenu();
    renderMenuPreview();
    setupSearch();
  });

  document.addEventListener("restaurant:language-change", () => {
    renderMenuControls();
    updateSearchPlaceholders();
    renderMenu();
    renderMenuPreview();
  });

  function getLanguage() {
    return app?.language || "de";
  }

  function text(value, fallback = "") {
    if (app?.text) return app.text(value, fallback);
    if (typeof value === "object" && value !== null) return value[getLanguage()] || value.de || fallback;
    return value || fallback;
  }

  function translate(key) {
    return app?.t ? app.t(key) : key;
  }

  function renderMenuControls() {
    document.querySelectorAll("[data-menu-categories]").forEach((container) => {
      container.innerHTML = "";
      const allButton = createCategoryButton("all", translate("allCategories"));
      container.appendChild(allButton);

      menuData.forEach((category) => {
        container.appendChild(createCategoryButton(category.id, text(category.category)));
      });
    });
  }

  function createCategoryButton(id, label) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip";
    button.textContent = label;
    button.dataset.category = id;
    button.setAttribute("aria-pressed", String(state.category === id));
    if (state.category === id) button.classList.add("is-active");
    button.addEventListener("click", () => {
      state.category = id;
      renderMenuControls();
      renderMenu();
    });
    return button;
  }

  function setupSearch() {
    document.querySelectorAll("[data-menu-search]").forEach((input) => {
      input.setAttribute("placeholder", translate("searchPlaceholder"));
      input.addEventListener("input", (event) => {
        state.search = event.target.value.trim().toLowerCase();
        renderMenu();
      });
    });
  }

  function updateSearchPlaceholders() {
    document.querySelectorAll("[data-menu-search]").forEach((input) => {
      input.setAttribute("placeholder", translate("searchPlaceholder"));
    });
  }

  function renderMenu() {
    document.querySelectorAll("[data-menu-list]").forEach((container) => {
      const filteredCategories = getFilteredCategories();
      container.innerHTML = "";

      if (!filteredCategories.some((category) => category.items.length)) {
        container.innerHTML = `<p class="empty-state">${translate("noResults")}</p>`;
        return;
      }

      filteredCategories.forEach((category) => {
        if (!category.items.length) return;
        const section = document.createElement("section");
        section.className = "menu-category";
        section.innerHTML = `<h2>${text(category.category)}</h2><div class="menu-grid"></div>`;
        const grid = section.querySelector(".menu-grid");
        category.items.forEach((item) => grid.appendChild(createMenuItem(item)));
        container.appendChild(section);
      });
    });
  }

  function getFilteredCategories() {
    return menuData
      .filter((category) => state.category === "all" || category.id === state.category)
      .map((category) => ({
        ...category,
        items: (category.items || []).filter((item) => {
          const haystack = [
            text(item.name),
            text(item.description),
            (item.tags || []).join(" "),
            (item.allergens || []).join(" ")
          ].join(" ").toLowerCase();

          return !state.search || haystack.includes(state.search);
        })
      }));
  }

  function createMenuItem(item) {
    const article = document.createElement("article");
    article.className = "menu-item";
    if (!item.available) article.classList.add("is-unavailable");

    const tags = (item.tags || []).map((tag) => `<span class="tag">${translate(tag)}</span>`).join("");
    const allergens = (item.allergens || []).length
      ? `<p class="allergens"><strong>${translate("allergens")}:</strong> ${item.allergens.join(", ")}</p>`
      : "";
    const image = item.image
      ? `<img src="${item.image}" alt="${text(item.name)}" loading="lazy">`
      : `<div class="menu-image-placeholder" aria-hidden="true"></div>`;

    article.innerHTML = `
      <div class="menu-item-image">${image}</div>
      <div class="menu-item-body">
        <div class="menu-item-heading">
          <h3>${text(item.name)}</h3>
          <strong>${item.price}</strong>
        </div>
        <p>${text(item.description)}</p>
        ${tags ? `<div class="tag-list">${tags}</div>` : ""}
        ${allergens}
        ${item.available ? "" : `<p class="unavailable">${translate("unavailableItem")}</p>`}
      </div>
    `;

    return article;
  }

  function renderMenuPreview() {
    document.querySelectorAll("[data-menu-preview]").forEach((container) => {
      const popularItems = menuData
        .flatMap((category) => category.items || [])
        .filter((item) => item.available && (item.tags || []).includes("popular"))
        .slice(0, 4);

      container.innerHTML = "";
      popularItems.forEach((item) => container.appendChild(createMenuItem(item)));
    });
  }
})();
