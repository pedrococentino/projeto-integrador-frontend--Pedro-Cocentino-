function convertSpoiler() {
    const regex = /\|\|([\s\S]+?)\|\|/g;
    
    document.querySelectorAll('p, h1, h2, h3, h4, h5, h6').forEach(p => {
        if (regex.test(p.innerHTML)) {
            p.innerHTML = p.innerHTML.replace(regex, 
                '<span class="spoiler" onclick="this.classList.toggle(\'revelado\')">$1</span>'
            );
        }
    });
}

convertSpoiler();