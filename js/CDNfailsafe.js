// Within index.html, a normalize CDN is used. CDN could fail. If so, this application will implement a "Plan B" by pointing to normalize in a local file.

function normalizeFailsafe() {
    var css = document.createElement("link");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("type", "text/css");
    css.setAttribute("href", 'css/normalize_v8.0.0.css');
    css.setAttribute("onload", "console.log('Normalize CDN failed but local backup of normalize loaded.')");
    document.getElementsByTagName("head")[0].appendChild(css);
}