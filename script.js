function translateWord(word) {
    const vowels = 'aeiouAEIOU';
    if (vowels.includes(word[0])) {
        return word + 'way';
    } else {
        let i = 0;
        while (i < word.length && !vowels.includes(word[i])) {
            i++;
        }
        return word.slice(i) + word.slice(0, i) + 'ay';
    }
}

function translateSentence(sentence) {
    return sentence.split(' ').map(translateWord).join(' ');
}

document.getElementById('translate').addEventListener('click', () => {
    const input = document.getElementById('input').value;
    const output = translateSentence(input);
    document.getElementById('output').textContent = output;
});