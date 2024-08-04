function typewriter(elementId, words, wordPause,emptyPause){
    let anim = [];
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        let chunks = [];
        let chunk = "";
        for(let j = 0; j < word.length-1; j++){
            chunk += word[j];
            chunks.push(chunk);
        }
        anim = anim.concat(chunks);
        for(let j = 0; j < wordPause; j++)anim.push(word);
        anim = anim.concat(chunks.reverse());
        for(let j = 0; j < emptyPause; j++)anim.push(" ");
    }
    /*let showCursor = true;
    for(let i = 0; i < anim.length;i++){
        if(i % 5 == 0)showCursor = !showCursor;
        if(showCursor && anim[i] != "|")anim[i] += '|'
    }
    */

typewriter("typewrite",["blogbooksの記者","なんちゃってプログラマー","ふぉっふぉっふぉっ創始者(?)"],55,5);
