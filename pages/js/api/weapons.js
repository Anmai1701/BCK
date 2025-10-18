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
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = url_root + "weapons/" + char_name;
        link.innerHTML = `<img width="200" src=${
          url_root + "weapons/" + char_name + "/icon"
        } alt=${char_name}/>`;
        // add vao container
        li.appendChild(link);
        container.appendChild(li);
      });
    })
    .catch((err) => console.error(err));
}

renderWeapons();
  
function createWeaponCard(weapon) {
    return `
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="card h-100 bg-light">
          <div class="card-body">
            <h5 class="card-title">${weapon.name}</h5>
            <p class="card-text">
              Type: **${weapon.type.charAt(0).toUpperCase() + weapon.type.slice(1)}**<br>
              Rarity: **${weapon.stars}** Star
            </p>
          </div>
        </div>
      </div>
    `;
  }
  
  function filterAndDisplayWeapons(selectedType) {
    weaponListContainer.innerHTML = '';
  
    const filteredWeapons = weaponsData.filter(weapon => {
      return selectedType === 'all' || weapon.type === selectedType;
    });
  
    let weaponHTML = '';
    if (filteredWeapons.length > 0) {
      filteredWeapons.forEach(weapon => {
        weaponHTML += createWeaponCard(weapon);
      });
    } else {
      weaponHTML = '<div class="col-12"><p class="text-center">No weapons of this type found.</p></div>';
    }
  
    weaponListContainer.innerHTML = weaponHTML;
  }
  
  typeSelect.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    console.log('Selected weapon type:', selectedValue);
    filterAndDisplayWeapons(selectedValue);
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const initialType = typeSelect.value; 
    filterAndDisplayWeapons(initialType);
  });

