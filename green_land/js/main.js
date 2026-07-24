(function () {
    'use strict';

    function initTracker() {
        window.addEventListener('message', function (event) {
            var data = event.data;

            if (!data || !data.action) {
                return;
            }

            var items = document.querySelectorAll('[tracker]');

            items.forEach(function (item) {
                item.onclick = function (e) {
                    e.preventDefault();
                    event.source.postMessage(
                        {
                            action: 'click',
                            buttonId: data.buttonId,
                            text: item.innerText,
                        },
                        event.origin
                    );
                };
            });
        });
    }

    function initVideoToggle() {
        var videoCircle = document.querySelector('[data-video-toggle]');
        var video = document.getElementById('promo-video');

        if (!videoCircle || !video) {
            return;
        }

        videoCircle.addEventListener('click', function () {
            video.muted = !video.muted;
        });
    }

    function initProtection() {
        document.addEventListener('contextmenu', function (event) {
            event.preventDefault();
        });

        document.addEventListener('keydown', function (event) {
            if (event.keyCode === 123) {
                event.preventDefault();
            }

            if (
                event.ctrlKey &&
                (event.keyCode === 85 ||
                    event.keyCode === 67 ||
                    (event.shiftKey && (event.keyCode === 73 || event.keyCode === 74)))
            ) {
                event.preventDefault();
            }
        });
    }

    function initSwiper() {
        if (typeof Swiper === 'undefined') {
            return;
        }

        new Swiper('.results-swiper', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            initialSlide: 0,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: { spaceBetween: 20 },
                768: { spaceBetween: 40 },
            },
        });
    }

    function initPrivacyModal() {
        var privacyModal = document.getElementById('privacyModal');
        var privacyTrigger = null;

        if (!privacyModal) {
            return;
        }

        function openPrivacyModal(trigger) {
            privacyTrigger = trigger || null;
            privacyModal.hidden = false;
            privacyModal.removeAttribute('aria-hidden');
            document.body.style.overflow = 'hidden';
            var closeBtn = privacyModal.querySelector('.privacy-modal__close');
            if (closeBtn) {
                closeBtn.focus();
            }
        }

        function closePrivacyModal() {
            if (privacyModal.hidden) {
                return;
            }
            privacyModal.hidden = true;
            privacyModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            if (privacyTrigger && typeof privacyTrigger.focus === 'function') {
                privacyTrigger.focus();
            }
            privacyTrigger = null;
        }

        function openCookieSettings() {
            closePrivacyModal();
            var prefsBtn = document.querySelector('[data-cc="show-preferencesModal"]');
            if (prefsBtn) {
                prefsBtn.click();
            }
        }

        document.addEventListener('click', function (e) {
            var openLink = e.target.closest('.js-open-privacy, a[href="#privacy-policy"]');
            if (openLink) {
                e.preventDefault();
                openPrivacyModal(openLink);
                if (window.location.hash === '#privacy-policy') {
                    history.replaceState(null, '', window.location.pathname + window.location.search);
                }
                return;
            }

            if (e.target.closest('[data-close-privacy]')) {
                closePrivacyModal();
                return;
            }

            if (e.target.closest('[data-open-cookie-settings]')) {
                e.preventDefault();
                openCookieSettings();
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && !privacyModal.hidden) {
                closePrivacyModal();
            }
        });

        if (window.location.hash === '#privacy-policy') {
            openPrivacyModal();
            history.replaceState(null, '', window.location.pathname + window.location.search);
        }

        window.addEventListener('hashchange', function () {
            if (window.location.hash === '#privacy-policy') {
                openPrivacyModal();
                history.replaceState(null, '', window.location.pathname + window.location.search);
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        initTracker();
        initVideoToggle();
        initProtection();
        initSwiper();
        initPrivacyModal();
    });
})();
