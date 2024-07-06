document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipeForm');
    const recipeInput = document.getElementById('recipeInput');
    const recipeList = document.getElementById('recipeList');

    recipeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const recipeName = recipeInput.value.trim();
        if (recipeName !== '') {
            addRecipe(recipeName);
            recipeInput.value = '';
        }
    });

    function addRecipe(name) {
        const li = document.createElement('li');
        li.textContent = name;
        recipeList.appendChild(li);
    }
});
