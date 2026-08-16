// =====================================
// GOOGLE TRANSLATE
// =====================================

function googleTranslateElementInit() {

    new google.translate.TranslateElement(
        {
            pageLanguage: 'en',
            includedLanguages: 'en,te,hi,ta',
            autoDisplay: false
        },
        'google_translate_element'
    );

}


// =====================================
// LANGUAGE DROPDOWN
// =====================================

function toggleLanguage(event) {

    event.preventDefault();
    event.stopPropagation();

    const dropdown =
        document.getElementById("languageDropdown");

    if (dropdown) {

        dropdown.classList.toggle("show");

    }

}


// =====================================
// CHANGE LANGUAGE
// =====================================

function changeLanguage(language) {

    event.preventDefault();
    event.stopPropagation();

    const googleSelect =
        document.querySelector(".goog-te-combo");

    if (!googleSelect) {

        alert("Language translator is still loading. Please wait a few seconds and try again.");

        return;

    }

    googleSelect.value = language;

    googleSelect.dispatchEvent(
        new Event("change")
    );

    const dropdown =
        document.getElementById("languageDropdown");

    if (dropdown) {

        dropdown.classList.remove("show");

    }

}


// =====================================
// CLOSE LANGUAGE MENU
// =====================================

document.addEventListener("click", function(event) {

    const languageMenu =
        document.querySelector(".language-menu");

    if (
        languageMenu &&
        !languageMenu.contains(event.target)
    ) {

        const dropdown =
            document.getElementById("languageDropdown");

        if (dropdown) {

            dropdown.classList.remove("show");

        }

    }

});