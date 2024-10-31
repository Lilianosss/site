//menu galerie
// Sélectionne l'image cliquable et le menu
const menuToggle = document.querySelector('.menu-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Ajoute un écouteur d'événement pour gérer le clic
menuToggle.addEventListener('click', () => {
// Alterne l'affichage du menu (affiche ou cache)
dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Optionnel : Fermer le menu en cliquant en dehors
document.addEventListener('click', (event) => {
if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
dropdownMenu.style.display = 'none';
 }
 });




//mode nuit
document.addEventListener('DOMContentLoaded', function() {
    const toggleNightMode = document.getElementById('toggle-night-mode');
    const body = document.body;
    const changeableImage = document.getElementById('changeable-image');

    // Vérifier si le mode nuit est déjà activé dans le localStorage
    if (localStorage.getItem('nightMode') === 'enabled') {
        body.classList.add('night-mode');
        toggleNightMode.src = 'image/logo/Sun.svg'; // Icône de soleil pour indiquer la désactivation     
    }

    // Ajouter un événement pour basculer le mode nuit/jour
    toggleNightMode.addEventListener('click', function() {
        body.classList.toggle('night-mode');
        if (body.classList.contains('night-mode')) {
            toggleNightMode.src = 'image/logo/Sun.svg'; // Changer l'image en icône de soleil
            localStorage.setItem('nightMode', 'enabled');
        } else {
            toggleNightMode.src = 'image/logo/Moon.svg'; // Changer l'image en icône de lune
            localStorage.setItem('nightMode', 'disabled');
        }
    });
});


//changement images
const changeableImage = document.getElementById('changeable-image');
            changeableImage.addEventListener('mouseover', function() { // Changer l'image au survol
                changeableImage.src = 'image/dessin/moi/moifatigué_bleu.png';
            });
            changeableImage.addEventListener('mouseout', function() { // Remettre l'image par défaut quand la souris quitte l'image
                changeableImage.src = 'image/dessin/moi/moi_bleu.png';
            });




//agrandir image
function showImage(element) {
    var overlay = document.getElementById('imageOverlay');
    var overlayImage = overlay.querySelector('img');
    overlayImage.src = element.src;
    overlay.style.display = 'flex';
}

function hideImage() {
    var overlay = document.getElementById('imageOverlay');
    overlay.style.display = 'none';
}



//galerie qui s'affiche

function toggleGallery(galleryId) {
    const gallery = document.getElementById(galleryId);
    gallery.classList.toggle("hidden");
}
