const url_root = "https://genshin.jmp.blue/";
const API_Key = "";
async function renderWeapons() {
  const container = document.getElementById("weapons-list");
  // goi api
  fetch(url_root + "weapons")
    .then((json) => json.json()) // chuyen tu json -> object js
    .then((data) => {
      // hien thi len giao dien
      data?.forEach((char_name) => {
        const li = document.createElement("a");
        const link = document.createElement("a");
        link.innerHTML = `<img width="200" src="${url_root + "weapons/" + char_name + "/icon"}" alt="${char_name}" style="cursor:pointer"/>`;
        link.addEventListener("click", (e) => {
          e.preventDefault();
          showWeaponDetail(char_name);
        });
        // add vao container
        li.appendChild(link);
        container.appendChild(li);
      });
    })
    .catch((err) => console.error(err));
}

function showWeaponDetail(weaponId) {
  fetch(url_root + "weapons/" + weaponId)
    .then((res) => res.json())
    .then((data) => {
      const infoHTML = `
        <h2>${data.name}</h2>
        <p><strong>Type:</strong> ${data.type}</p>
        <p><strong>Rarity:</strong> ${data.rarity} ⭐</p>
        <p><strong>Base Attack:</strong> ${data.baseAttack}</p>
        <p><strong>Substat:</strong> ${data.substat}</p>
        <p><strong>Passive:</strong> ${data.passiveDesc}</p>
        <p><strong>Used by:</strong> ${data.location}</p>
      `;
      document.getElementById("weapon-info").innerHTML = infoHTML;
      document.getElementById("weapon-modal").style.display = "block";
    })
    .catch((err) => console.error("Lỗi khi lấy chi tiết vũ khí:", err));
};

// Đóng modal khi click vào nút X
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("weapon-modal").style.display = "none";
});

// Đóng modal khi click ra ngoài
window.addEventListener("click", (event) => {
  const modal = document.getElementById("weapon-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  };
});

renderWeapons();