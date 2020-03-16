let recipe = {

    name: 'Mousse van doperwtjes met serranoham',
    porties: 4,
    ingredients: [
        '250gr doperwtjes',
        '2el luchtige kaas',
        'enkele blaadjes munt',
        '3 sneetjes serannoham',
        'peper en zout'
    ]
}

console.log(recipe.name);
console.log(`Porties: ${recipe.porties}`);
console.log('Ingrediënten: ');

for(ingredient of recipe.ingredients) {
    console.log(ingredient);
}