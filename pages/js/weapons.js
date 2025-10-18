const url_root = "https://genshin.jmp.blue/";
const weapons = [
    {
        name: "Flame Star Halberd",
        type: "Polearm",
        element: "Pyro",
        rarity: 5,
        description: "A fiery polearm with a star-shaped blade.",
        image: "images/weapon1.png",
        id: "flame-star-halberd" 
      },
      {
        name: "Emerald Saber",
        type: "Sword",
        element: "Dendro",
        rarity: 4,
        description: "A glowing green sword with a curved hilt.",
        image: "images/weapon2.png",
        id: "emerald-saber"
      },
];

function getWeaponById(id) {
    return weapons.find(weapon => weapon.id === id);
}

function renderWeapons() {
  const container = document.getElementById("weapon-list"); 
  if (!container) return;

  weapons.forEach((weapon, index) => {
    const col = document.createElement("div");
    col.className = "col-lg-3 col-md-4 col-sm-6 mb-4";
    
    col.innerHTML = `
        <div class="card h-100 shadow-sm card-clickable" 
             data-weapon-id="${weapon.id}"
             data-bs-toggle="modal" 
             data-bs-target="#weaponModal">
          <img src="${weapon.image}" class="card-img-top p-3" alt="${weapon.name}">
          <div class="card-body">
            <h5 class="card-title text-center">${weapon.name}</h5>
          </div>
        </div>
    `;
    container.appendChild(col);
  });
  
  setupWeaponModalHandler(); 
}


function setupWeaponModalHandler() {
    const weaponModal = document.getElementById('weaponModal');
    
    if (!weaponModal) return;

    weaponModal.addEventListener('show.bs.modal', (event) => {
        const cardTrigger = event.relatedTarget; 
        
        const weaponId = cardTrigger.getAttribute('data-weapon-id');
        
        if (!weaponId) return;

        const weapon = getWeaponById(weaponId);
        if (!weapon) return;

        const modalTitle = document.getElementById("weaponModalLabel");
        const modalBody = document.getElementById("weaponModalBody");

        modalTitle.textContent = weapon.name;
        modalBody.innerHTML = `
            <div class="row align-items-center">
                <div class="col-4 text-center">
                    <img src="${weapon.image}" class="img-fluid mb-3" alt="${weapon.name}">
                </div>
                <div class="col-8">
                    <p><strong>Name:</strong> ${weapon.name}</p>
                    <p><strong>Type:</strong> ${weapon.type}</p>
                    <p><strong>Element:</strong> ${weapon.element}</p>
                    <p><strong>Rarity:</strong> ${weapon.rarity}★</p>
                    <p><strong>Description:</strong> ${weapon.description}</p>
                </div>
            </div>
        `;
    });
    
    const style = document.createElement('style');
    style.innerHTML = '.card-clickable { cursor: pointer; }';
    document.head.appendChild(style);
}

document.addEventListener("DOMContentLoaded", renderWeapons);