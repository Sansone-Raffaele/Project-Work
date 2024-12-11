// funzioni per effettuare un caricamento iniziale quando viene aperta la pagina
function loadPage() {
    setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
}

////////////////////////////////////////////////////////////////////////////////


//  funzione per aprire e chiudere la sidebar da mobile
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

//  funzione per aprire e chiudere la sidebar da mobile
function scrollToDownload(id) {
    var download = document.getElementById(id);
    download.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

// Funzione per cambiare il testo dell'elemento con id "titleItem" e per visualizzare gli elementi selezionati
function changeTitle(newText, newColor) {
    const titleItem = document.getElementById('titleItem');
    const elements = [...document.querySelectorAll('.elem'), ...document.querySelectorAll('.activeLine')]; // Seleziona tutti gli elementi con le classi 'elem' e 'activeLine'
    const elements2 = [...document.querySelectorAll('.item'), ...document.querySelectorAll('.activeLine')]; // Seleziona tutti gli elementi con le classi 'item' e 'activeLine'

    titleItem.textContent = newText;
    titleItem.style.color = newColor;

    // Nasconde tutti i paragrafi e tutti gli hr per visualizzare solo quello selezionato
    elements.forEach(item => {
        item.style.display = 'none';
    });

    // Azzera tutte le regole inline dagli elementi non selezionati
    elements2.forEach(elem => {
        elem.style.cssText = '';
    });

    // Mostra il paragrafo corrispondente al testo di titleItem
    // Mostra l'elemento hr corrispondente al blocco selezionato
    // aggiunge il borderColor al blocco selezionato
    // scrolla la pagina in alto quando si seleziona un altro blocco
    if (titleItem.textContent === 'INTEGRITÀ E TRASPARENZA') {
        document.getElementById('elem1').style.display = 'block';
        document.getElementById('line1').style.display = 'block';
        document.getElementById('item1').style.borderColor = 'var(--item1-hover)';
        document.getElementById('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (titleItem.textContent === 'VALORIZZAZIONE DELLE PERSONE') {
        document.getElementById('elem2').style.display = 'block';
        document.getElementById('line2').style.display = 'block';
        document.getElementById('item2').style.borderColor = 'var(--item2-hover)';
        document.getElementById('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (titleItem.textContent === 'DIVERSITÀ E INCLUSIONE') {
        document.getElementById('elem3').style.display = 'block';
        document.getElementById('line3').style.display = 'block';
        document.getElementById('item3').style.borderColor = 'var(--item3-hover)';
        document.getElementById('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (titleItem.textContent === 'VALORE AL TERRITORIO') {
        document.getElementById('elem4').style.display = 'block';
        document.getElementById('line4').style.display = 'block';
        document.getElementById('item4').style.borderColor = 'var(--item4-hover)';
        document.getElementById('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (titleItem.textContent === 'CUSTOMER EXPERIENCE') {
        document.getElementById('elem5').style.display = 'block';
        document.getElementById('line5').style.display = 'block';
        document.getElementById('item5').style.borderColor = 'var(--item5-hover)';
        document.getElementById('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (titleItem.textContent === 'INNOVAZIONE') {
        document.getElementById('elem6').style.display = 'block';
        document.getElementById('line6').style.display = 'block';
        document.getElementById('item6').style.borderColor = 'var(--item6-hover)';
        document.getElementById('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (titleItem.textContent === 'TRANSIZIONE GREEN') {
        document.getElementById('elem7').style.display = 'block';
        document.getElementById('line7').style.display = 'block';
        document.getElementById('item7').style.borderColor = 'var(--item7-hover)';
        document.getElementById('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (titleItem.textContent === 'FINANZA SOSTENIBILE') {
        document.getElementById('elem8').style.display = 'block';
        document.getElementById('line8').style.display = 'block';
        document.getElementById('item8').style.borderColor = 'var(--item8-hover)';
        document.getElementById('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}