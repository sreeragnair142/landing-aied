/**
 * AIED Official WhatsApp Chatbot & Popup System
 * Auto-triggers after preloader completes
 * Direct WhatsApp: https://wa.me/+966543387670
 */

(function () {
    "use strict";

    var isPopupManuallyClosed = false;
    var autoPopupTimer = null;

    window.closeWhatsAppPopup = function (e) {
        if (e) {
            if (e.preventDefault) e.preventDefault();
            if (e.stopPropagation) e.stopPropagation();
        }
        isPopupManuallyClosed = true;
        if (autoPopupTimer) {
            clearTimeout(autoPopupTimer);
            autoPopupTimer = null;
        }
        var popup = document.getElementById("whatsapp-chat-popup");
        if (popup) {
            popup.classList.remove("is-active");
            popup.style.setProperty("display", "none", "important");
        }
        return false;
    };

    window.openWhatsAppPopup = function (e, isUserClick) {
        if (e) {
            if (e.preventDefault) e.preventDefault();
            if (e.stopPropagation) e.stopPropagation();
        }
        if (!isUserClick && isPopupManuallyClosed) {
            return false;
        }
        if (isUserClick) {
            isPopupManuallyClosed = false;
        }
        var popup = document.getElementById("whatsapp-chat-popup");
        var ping = document.getElementById("wa-badge-ping");
        if (popup) {
            popup.style.removeProperty("display");
            popup.classList.add("is-active");
            if (ping) ping.style.display = "none";
        }
        return false;
    };

    window.toggleWhatsAppPopup = function (e) {
        var popup = document.getElementById("whatsapp-chat-popup");
        if (popup && popup.classList.contains("is-active") && popup.style.display !== "none") {
            return window.closeWhatsAppPopup(e);
        } else {
            return window.openWhatsAppPopup(e, true);
        }
    };

    function attachEvents() {
        var closeBtn = document.getElementById("wa-close-btn");
        if (closeBtn) {
            closeBtn.onclick = function (e) {
                return window.closeWhatsAppPopup(e);
            };
        }

        var triggerBtn = document.getElementById("whatsapp-trigger-btn");
        if (triggerBtn) {
            triggerBtn.onclick = function (e) {
                return window.toggleWhatsAppPopup(e);
            };
        }

        var chipBtns = document.querySelectorAll(".wa-chip-btn");
        chipBtns.forEach(function (chip) {
            chip.onclick = function (e) {
                e.preventDefault();
                var msg = chip.getAttribute("data-msg") || chip.innerText.trim();
                var url = "https://wa.me/+966543387670?text=" + encodeURIComponent("Hello AIED Team, I am interested in: " + msg);
                window.open(url, "_blank", "noopener,noreferrer");
            };
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" || e.keyCode === 27) {
                window.closeWhatsAppPopup(e);
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", attachEvents);
    } else {
        attachEvents();
    }

    // Auto-open 1.2s after window load if user has not dismissed it
    window.addEventListener("load", function () {
        if (!isPopupManuallyClosed) {
            autoPopupTimer = setTimeout(function () {
                if (!isPopupManuallyClosed) {
                    window.openWhatsAppPopup(null, false);
                }
            }, 1200);
        }
    });
})();
