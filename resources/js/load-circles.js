$(function () {
    let qty = 104
    $.ajaxSetup({cache: false});
    if (isMobile) {
        for (let i = 0; i < qty; i++) {
            $(`#circle${("000"+i).slice(-3)}`).load(`circles/circle${("000"+i).slice(-3)}-sp.html`);
        }
    } else {
        for (let i = 0; i < qty; i++) {
            $(`#circle${("000"+i).slice(-3)}`).load(`circles/circle${("000"+i).slice(-3)}.html`);
        }
    }
});