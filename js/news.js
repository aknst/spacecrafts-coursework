let response = [
  {
    title: "NASA заявили, что телескоп Хаббл возобновит научную работу после сбоя гироскопа",
    category: "обсерватория", date: "12 ноября, 2023", cover: "./imgs/news_add1.webp"},
  {
    title: "Следующий запуск космического корабля SpaceX может включать в себя ключевые испытания",
    category: "технологии",date: "2 ноября, 2023",cover: "./imgs/news_add2.jpg"},
  {
    title: "Космический телескоп «Джеймс Уэбб» представил новые снимки новорожденной звезды",
    category: "обсерватория",date: "1 ноября, 2023",cover: "./imgs/news_add3.jpg"}
]
const rows = document.querySelector(".news__rows");
const loadMore = document.querySelector(".news__more")
let isLoaded = false;
loadMore.addEventListener("click", () => {
  if (isLoaded) {
    showNotification({content: "Все публикации загружены", type: "info"})
  } else {
    const div = document.createElement("div");
    div.classList.add("news__row");
    let delay = 200;
    for (let post of response) { 
      const postWrap = document.createElement("div");
      postWrap.classList.add("a-appear")
      postWrap.style.setProperty("--delay", `${delay}ms`)
      postWrap.style.flex = "1 1 360px";
      postWrap.innerHTML = `
        <a href="./post.html" class="post__card">
        <div class="post__card-image"><img src="${post.cover}"></div>
        <div class="post__card-text">
          <div class="post__card-text-head">
            <div class="post__card-text-head-category">${post.category}</div>
            <div class="post__card-text-head-title">${post.title}</div>
          </div>
          <div class="post__card-text-timestamp">${post.date}</div>
        </div>
      </a>`;
      div.appendChild(postWrap)
      delay += 300;
    }
    rows.appendChild(div);
    isLoaded = true;
    showNotification({content: "Новые публикации загружены!", type: "info"})
  }
})

