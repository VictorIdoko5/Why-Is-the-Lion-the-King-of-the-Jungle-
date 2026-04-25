
// Wait until page is fully loaded (CRITICAL FIX)
document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".card");

    let searchValue = "";

    function filterCards() {

        cards.forEach(card => {

            const text = card.textContent.toLowerCase(); // more reliable than innerText

            const match = text.includes(searchValue);

            card.style.display = match ? "block" : "none";
        });
    }

    // ONLY attach if search exists on this page
    if (searchInput) {

        searchInput.addEventListener("input", (e) => {
            searchValue = e.target.value.toLowerCase();
            filterCards();
        });

    }

});