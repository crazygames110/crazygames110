/************* Main Js File ************************
    Template Name: Faf
    Author: Themescare
    Version: 1.0
    Copyright 2020
*************************************************************/

<!-- Include Popup HTML -->
<div id="pwa-popup" class="pwa-popup">
  <div class="pwa-popup-content">
    <h2>Install Our site</h2>
    <p>Get our site for a better experience.</p>
    <button id="install-button">Install</button>
    <button id="close-button">Close</button>
  </div>
</div>

<!-- Link to CSS -->
<link rel="stylesheet" href="https://faf-games.github.io/assets/css/styles.css">

<!-- Link to Popup JavaScript -->
<script src="https://faf-games.github.io/assets/js/popup.js"></script>





(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {

		const second = 1000,
			minute = second * 60,
			hour = minute * 60,
			day = hour * 24;

		let countDown = new Date('Dec 30, 2022 00:00:00').getTime(),
			x = setInterval(function () {

				let now = new Date().getTime(),
					distance = countDown - now;

				document.getElementById('days').innerText = Math.floor(distance / (day)),
					document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
					document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
					document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

			}, second);

		// Google Analytics code
		(function() {
			$.getScript('https://www.googletagmanager.com/gtag/js?id=G-6BPGNZNTLZ', function() {
				window.dataLayer = window.dataLayer || [];
				function gtag(){ dataLayer.push(arguments); }
				gtag('js', new Date());
				gtag('config', 'G-6BPGNZNTLZ');
			});
		})();
	});

}(jQuery));

<!-- Manifest and Service Worker Registration -->
<script>
(function() {
    var link = document.createElement('link');
    link.rel = 'manifest';
    link.href = 'https://faf-games.github.io/manifest.json';
    document.head.appendChild(link);

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    }
})();




