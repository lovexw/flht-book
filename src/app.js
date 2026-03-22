import { book } from "./content.js";

const titleEl = document.getElementById("book-title");
const subtitleEl = document.getElementById("book-subtitle");
const prefaceHeadingEl = document.getElementById("preface-heading");
const prefaceContentEl = document.getElementById("preface-content");
const yearEl = document.getElementById("year");

titleEl.textContent = book.title;
subtitleEl.textContent = book.subtitle;
prefaceHeadingEl.textContent = book.preface.title;

book.preface.blocks.forEach((block) => {
  if (block.type === "paragraph") {
    const p = document.createElement("p");
    p.className = "preface-paragraph";
    p.textContent = block.text;
    prefaceContentEl.appendChild(p);
    return;
  }

  if (block.type === "image") {
    const figure = document.createElement("figure");
    figure.className = "progress-photo";

    const img = document.createElement("img");
    img.src = block.src;
    img.alt = block.alt;
    img.loading = "lazy";

    const figCaption = document.createElement("figcaption");
    figCaption.textContent = block.caption;

    figure.appendChild(img);
    figure.appendChild(figCaption);
    prefaceContentEl.appendChild(figure);
  }
});

const disclaimer = document.createElement("aside");
disclaimer.className = "disclaimer";
disclaimer.textContent = book.preface.disclaimer;
prefaceContentEl.appendChild(disclaimer);

yearEl.textContent = String(new Date().getFullYear());
