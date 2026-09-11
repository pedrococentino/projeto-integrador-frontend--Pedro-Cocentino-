function convertSpoiler() {
    const regex = /\|\|(.+?)\|\|/g;
    
    document.querySelectorAll('p').forEach(p => {
        if (regex.test(p.innerHTML)) {
            p.innerHTML = p.innerHTML.replace(regex, 
                '<span class="spoiler" onclick="this.classList.toggle(\'revelado\')">$1</span>'
            );
        }
    });
}

convertSpoiler();