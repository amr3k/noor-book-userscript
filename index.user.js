// ==UserScript==
// @name         Noor-book direct download - تحميل مباشر من مكتبة نور
// @namespace    amr3k
// @version      1.0
// @description  هذا البرنامج النصي يتخطي المؤقت التنازلي ويسمح بالتحميل المباشر دون انتظار
// @description:disclaimer This script is intended for personal use only. The author is not responsible for any misuse of the tool or any legal issues that may arise from its use.
// @author       amr3k - ع̲مِےـرۅ
// @match        https://www.noor-book.com/*pdf
// @icon         https://www.noor-book.com/publice/icons/favicon-96x96.png
// @license            MIT
// @grant              none
// @run-at             document-end
// ==/UserScript==

(function() {
    'use strict';

    // Find the download link and click it
    const modalLink = document.querySelector('#download_circle>a');
    modalLink.addEventListener('click',() => {
            window.go_gownload();
        setTimeout(function() {
            const downloadLink = document.querySelectorAll('.internal_download_link')[0];
            downloadLink.click();
        }, 500);
    } );
})();
