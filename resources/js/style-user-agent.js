let userAgent = navigator.userAgent;
let url = window.location.href;
let query = window.location.search;

console.log(url)
console.log(query)

let head = document.getElementById('head');

let isMobile = (
        (userAgent.indexOf('iPhone') > 0 && userAgent.indexOf('iPad') === -1) ||
        userAgent.indexOf('iPod') > 0 ||
        userAgent.indexOf('Android') > 0 ||
        query === '?sp'
    ) &&
    query !== '?pc';

let isUAMobile = (userAgent.indexOf('iPhone') > 0 && userAgent.indexOf('iPad') === -1) ||
    userAgent.indexOf('iPod') > 0 ||
    userAgent.indexOf('Android') > 0

if (isMobile) {
    head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="resources/css/main-sp.css">');

} else {
    head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="resources/css/main.css">');
}


window.onload = function () {
    let footer = document.getElementById('footer');
    if (isMobile) {
        // title.insertAdjacentText('afterend', '(Closed Alpha Version)');
        footer.insertAdjacentHTML('beforeend', `<button onclick="window.location.search = '?pc'";>PC版はこちら</button>`)
    } else {
        footer.insertAdjacentHTML('beforeend', `<button class="center" onclick="window.location.search = '?sp';">Mobile版はこちら</button>`)
    }
    if (isUAMobile) {
        footer.insertAdjacentHTML('beforeend', `<button class="center" onclick="window.location.reload();">強制再読み込み</button>`)
    }
    // let title = document.getElementById('title');
}
