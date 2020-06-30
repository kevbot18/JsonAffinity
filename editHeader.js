"use strict";

function addJson(r) {
    for (let header of r.requestHeaders) {
        if (header.name.toLowerCase() === "accept") {
            header.value = header.value.replace("text/html", "text/html,application/json");
        }
    }
    return { requestHeaders: r.requestHeaders };
}

browser.webRequest.onBeforeSendHeaders.addListener(
    addJson,
    { urls: ["http://*/*", "https://*/*"] },
    ["blocking", "requestHeaders"]
);