// Sample Character Data (Bạn sẽ thay thế bằng dữ liệu API thật)
const charactersData = [
    { name: 'Albedo', element: 'geo', rarity: 5, weapon: 'sword' },
    { name: 'Amber', element: 'pyro', rarity: 4, weapon: 'bow' },
    { name: 'Diluc', element: 'pyro', rarity: 5, weapon: 'claymore' },
    { name: 'Eula', element: 'cryo', rarity: 5, weapon: 'claymore' },
    { name: 'Fischl', element: 'electro', rarity: 4, weapon: 'bow' },
    { name: 'Kaeya', element: 'cryo', rarity: 4, weapon: 'sword' },
    // Thêm tất cả các đối tượng nhân vật của bạn ở đây.
    // Lưu ý: Thuộc tính 'element' (nguyên tố) sẽ dùng để lọc.
];

// 1. Get the necessary elements
// Đảm bảo ID này khớp với thẻ <select> của bạn (ví dụ: id="filter-characters")
const elementSelect = document.getElementById('filter-characters'); 
// Đảm bảo ID này khớp với container hiển thị nhân vật (id="characters")
const characterListContainer = document.getElementById('characters'); 

// 2. Function to create the HTML for a single character card
function createCharacterCard(character) {
    // Tên ảnh/thẻ nhân vật (Bạn cần điều chỉnh để khớp với API hoặc đường dẫn ảnh của mình)
    const charNameSlug = character.name.toLowerCase().replace(/\s/g, '-'); 
    
    // Sử dụng cấu trúc cột col-lg-3 để có 4 thẻ trên một hàng lớn
    return `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
          <a href="#" class="text-decoration-none text-dark">
            <div class="card h-100 shadow-sm character-card-style">
              <img 
                src="https://genshin.jmp.blue/characters/${charNameSlug}/card" 
                class="card-img-top p-3" 
                alt="${character.name} Card"
              />
              <div class="card-body text-center">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text">
                    Element: <strong>${character.element.charAt(0).toUpperCase() + character.element.slice(1)}</strong>
                </p>
              </div>
            </div>
          </a>
        </div>
    `;
}

// 3. Function to filter the characters and update the display
function filterAndDisplayCharacters(selectedElement) {
    // Clear the current list
    characterListContainer.innerHTML = '';

    // Lọc mảng dữ liệu
    const filteredCharacters = charactersData.filter(character => {
        // Lọc nếu giá trị là 'all' hoặc nếu nguyên tố nhân vật khớp với giá trị được chọn
        return selectedElement === 'all' || character.element === selectedElement;
    });

    // Build the new HTML content
    let charactersHTML = '';
    if (filteredCharacters.length > 0) {
        filteredCharacters.forEach(character => {
            charactersHTML += createCharacterCard(character);
        });
    } else {
        charactersHTML = '<div class="col-12"><p class="text-center">Không tìm thấy nhân vật thuộc nguyên tố này.</p></div>';
    }

    // Insert the new HTML into the container
    characterListContainer.innerHTML = charactersHTML;
}

// 4. Add the event listener to the dropdown
// Đảm bảo elementSelect tồn tại trước khi thêm listener
if (elementSelect) {
    elementSelect.addEventListener('change', (event) => {
        // Lấy giá trị được chọn (ví dụ: 'pyro', 'geo', 'all')
        const selectedValue = event.target.value; 
        console.log('Selected element:', selectedValue); 
        filterAndDisplayCharacters(selectedValue);
    });
}

// 5. Initial load: Display all characters when the page first loads
document.addEventListener('DOMContentLoaded', () => {
    // Lấy giá trị mặc định của dropdown khi trang tải
    const initialElement = elementSelect ? elementSelect.value : 'all'; 
    filterAndDisplayCharacters(initialElement);
});