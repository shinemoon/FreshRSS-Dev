document.addEventListener('DOMContentLoaded', function(){
    function monitorEntry(monitorCallback) {
        const targetNode = document.getElementById('stream');
        const config = { attributes: false, childList: true, subtree: false};
        const callback = function(mutationsList, observer) {
            for(let mutation of mutationsList) {
                console.log(mutation.type);
                if (mutation.type === 'childList') {
                    monitorCallback(mutationsList);
                }
                    }
        };
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
        //observer.disconnect();
    };
    monitorEntry(gallerize);
});

function gallerize(){
    $('div.flux article div[data-sanitized-class="pic-row"]').magnificPopup({
        type:'image',
        delegate: 'a', // child items selector, by clicking on it popup will open
        showCloseBtn: false,
        gallery: {
            // options for gallery
            enabled: true
        },
    });
};
