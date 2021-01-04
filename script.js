const prueba = document.getElementById('prueba');
const searchInput = document.getElementById('emojiSearch');

const getEmojis = async () => {
    let dataEmojis = await fetch('./emojis.json');
    let emojies = await dataEmojis.json();
    Object.entries(emojies).forEach((emoji) => emoji[1].forEach(unicode => {
        let emojiJoined = unicode.u.split('-')[0]
        let emojiRenderer = String.fromCodePoint(`0x${emojiJoined}`)
        return unicode.u = emojiRenderer
    }))
    // let random = emojies.objects[0].u;
    // let emoji = String.fromCodePoint(`0x${random}`)
    // prueba.innerHTML = ` ${emoji}`
    let categorias = '';
    // let emojiesGrouped = '';
    Object.entries(emojies).map(emoji => {
        const [category, group] = emoji
        categorias += `<ul>
                            ${category}
                            ${group.map(emoji => {
                                // console.log(emoji)
                                return `<li>${emoji.u}</li>`
                                // `<li>${emoji.u}</li>`;
                                // `<li>${emoji.u}</li>`
                            }).join('')}
                        </ul>`;
        
        //emojiesGroup += `<li>${emoji[1]}</li>`;
    })
    // console.log(emojiesGrouped)
    // categorias.innerHTML = emojiesGrouped;
    // prueba.innerHTML = categorias;
}

getEmojis();


// console.log(searchInput)
searchInput.addEventListener('keyup', async (e) => {
    
    let dataEmojis = await fetch('./emojis.json');
    let emojies = await dataEmojis.json();
    // console.log(e.target.value)
    const word = e.target.value.toLowerCase();
    console.log(word)
    // let miArray = ['casa', 'caza', 'caca', 'caguama', 'caracol', 'cacerola', 'camino', 'cariño']
    // console.log(Object.values(emojies))
    Object.entries(emojies).forEach((emoji) => emoji[1].forEach(unicode => {
        let emojiJoined = unicode.u.split('-')[0]
        let emojiRenderer = String.fromCodePoint(`0x${emojiJoined}`)
        return unicode.u = emojiRenderer
    }))

    const [primero, segundo, tercero, cuarto, quinto, sexto, septimo] = Object.values(emojies)
    // console.log(primero)
    let grouped = [...primero, ...segundo, ...tercero, ...cuarto, ...quinto, ...sexto, ...septimo];
    let emojiesFound = grouped.filter(emoji => emoji.n[0].split('').join('').includes(word))
    // console.log(emojiesFound)
    let result = '';
    if (word !== '') {
            emojiesFound.map(emoji => {
            result += `<li>${emoji.u}</li>`
        })
    }
    
    prueba.innerHTML = result;
})

