chrome.runtime.onMessage.addListener(function(req, sender, sendResp) {
    if ( req.message === "error_message" ) {
        alert('Lookup does work only for valid IP or Email address');
        setTimeout(function() {
            sendResp({status: true});
        }, 1);
    }
    return true;
});