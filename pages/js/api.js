const url_root = "https://genshin.jmp.blue/";
const API_Key = "";
async function renderCharacters() {
  const container = document.getElementById("characters");
  // goi api
  fetch(url_root + "characters")
    .then((json) => json.json()) // chuyen tu json -> object js
    .then((data) => {
      // hien thi len giao dien
      data?.forEach((char_name) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = url_root + "characters/" + char_name;
        link.innerHTML = `<img width="200" src=${
          url_root + "characters/" + char_name + "/card"
        } alt=${char_name}/>`;
        // add vao container
        li.appendChild(link);
        container.appendChild(li);
      });
    })
    .catch((err) => console.error(err));
}

renderCharacters();
