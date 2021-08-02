const apiurl = "https://api.dictionaryapi.dev/api/v2/entries/en_US/"

async function getData(){

    try {
    let word = document.getElementById('word').value;
    let res = await fetch(apiurl + word);
    let data = await res.json();
    console.log(data);
    console.log(data[0].phonetics[0].audio);
    let aud = document.getElementById("audio");
    aud.src = data[0].phonetics[0].audio;
    let def = document.getElementById("def");
    def.innerHTML = "<b>Definition:</b> " + data[0].meanings[0].definitions[0].definition;
    let ex = document.getElementById("ex");
    ex.innerHTML = "<b>Example:</b> " + data[0].meanings[0].definitions[0].example;
    let syn = document.getElementById("syn");
    syn.innerHTML = "<b>Synonym:</b> " + data[0].meanings[0].definitions[0].synonyms;
    // console.log(data[0].meanings[0].definitions[0].definition);
    // console.log(data[0].meanings[0].definitions[0].example);
    // console.log(data[0].meanings[0].definitions[0].synonyms);
    } catch (error) {
        console.log(error);
    }   
}