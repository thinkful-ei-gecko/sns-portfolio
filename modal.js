const store = [
    {
        id: 'quiz',
        img: 'images/Quizapp.png',
        alt: 'screenshot from Strange Laws quiz app',
        desc: 'The US has a lot of weird laws. The questions and answers are randomized each playthrough. <br> Test your knowledge! Built with JavaScript and jQuery',
    },
    {
        id: 'bookmark',
        img: 'images/bookmark-butler.png',
        alt: 'screenshot from Bookmark Butler app',
        desc: 'A simple app to store your favorite places on the web. Built using Javascript and jQuery',
    }
]

function findById(id) {
    return store.find(item => item.id === id);
}


function handleModalClick() {
    $('.grid').on('click', '.grid-item', function(event) {
        $('.modal-section').html(generateModalHtml($(this).attr('id')))
    })
}

function handleCloseClick() {
    $('.modal-section').on('click', '.close', function(event) {
        $('.modal-section').empty();
    })
}

function generateModalHtml(id) {
    let project = findById(id);
    return `
        <div class="modal-container">
            <img src=${project.img} alt="${project.alt} id="modal-img">
            <button type="button" class="close">x</button>
            <p class="desc">${project.desc}</p>
        </div>
    `
}

function main() {
    handleModalClick();
    handleCloseClick();
}

$(main);