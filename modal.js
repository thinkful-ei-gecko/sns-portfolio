function handleModalClick() {
    console.log('running')
    $('.grid').on('click', '.grid-item', function(event) {
        console.log('I happened!')
        this.find('.modal').show();
    })
}

$(handleModalClick);