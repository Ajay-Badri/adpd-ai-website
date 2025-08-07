document.addEventListener('DOMContentLoaded', function() {
    const openLabButton = document.getElementById('openLabButton');
    const closeLabButton = document.getElementById('closeLabButton');
    const bookPane = document.getElementById('bookPane');
    const alchemistPane = document.getElementById('alchemistPane');

    // Function to open the Alchemist Lab
    function openLab() {
        // Set the width of the book pane
        bookPane.style.width = '60%';
        // Set the width of the Alchemist pane to slide it in
        alchemistPane.style.width = '40%';
    }

    // Function to close the Alchemist Lab
    function closeLab() {
        // Restore the book pane to full width
        bookPane.style.width = '100%';
        // Set the Alchemist pane width to 0 to hide it
        alchemistPane.style.width = '0';
    }

    // Event listeners for the buttons
    openLabButton.addEventListener('click', openLab);
    closeLabButton.addEventListener('click', closeLab);
});