function contents(data) {
    $(".bo").append($('<div>').attr('class', 'story')
        .append($('div')
            .attr('class', 'head')
            .append($('<span>')
                .attr('class', 'title')
                .text(data[0]))
            .append($('<span>')
                .attr('class', 'writer')
                .text(data[1]))
        )
        .append($('<p>').attr('calss', 'content')
            .text(data[2]))
    )
}

$(document).ready(() => {
    $.ajax({
        type: 'GET',
        url: '/api/insert',
        dataType: 'json',
        success(res) {
            for (let i = 0; i < res.length; i += 1) {
                contents(res[i]);
            }
        }
    });
    console.log(1);
})