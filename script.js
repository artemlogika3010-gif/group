const recipes = [
    {
        title: "Омлет з овочами",
        category: "breakfast",
        img: "https://images.unsplash.com/photo-1510627489930-0c1b0ba8fa7e?w=400",
        desc: "Легкий та швидкий сніданок за 10 хвилин."
    },
    {
        title: "Борщ український",
        category: "lunch",
        img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
        desc: "Класичний рецепт з пампушками."
    },
    {
        title: "Шоколадний фондан",
        category: "dessert",
        img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400",
        desc: "Десерт для справжніх поціновувачів шоколаду."
    },
    {
        title: "Авокадо тост",
        category: "breakfast",
        img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400",
        desc: "Корисний сніданок з цільнозерновим хлібом."
    }
];

const recipeGrid = document.getElementById('recipeGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

// Функція для відображення карток
function displayRecipes(recipeItems) {
    let display = recipeItems.map(item => {
        return `<article class="recipe-card">
            <img src="${item.img}" alt="${item.title}">
            <div class="recipe-info">
                <span class="category-tag">${item.category}</span>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        </article>`;
    }).join("");
    recipeGrid.innerHTML = display;
}

// Початкове завантаження
window.addEventListener('DOMContentLoaded', () => {
    displayRecipes(recipes);
});

// Фільтрація за категоріями
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.category;
        
        // Візуальний ефект активної кнопки
        filterBtns.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');

        if (category === 'all') {
            displayRecipes(recipes);
        } else {
            const filtered = recipes.filter(item => item.category === category);
            displayRecipes(filtered);
        }
    });
});

// Пошук в реальному часі
searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = recipes.filter(item => 
        item.title.toLowerCase().includes(value)
    );
    displayRecipes(filtered);
});