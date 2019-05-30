module.exports.templateTags = [{
    name: 'randomPick',
    displayName: 'Random Pick',
    description: 'Random pick value from array',
    args: [
        {
            type: 'string',
            displayName: 'Items',
            description: 'Array of items',
            placeholder: 'zero;one;two',
        }
    ],
    run (context, itemsString) {
        try {
            const items = itemsString.split(';').filter((item) => item.length);
            let randomItem = items[Math.floor(Math.random() * items.length)];

            try {
                randomItem = eval(randomItem); 
            } catch (error) { }

            return randomItem;
        } catch (error) {
            console.error(error);
            throw new Error(`Error: ${error.message}`);
        }
    }
}]