let score = 0;
let revealedCats = new Set();

// Using actual cat photos that are clear and easy for children to identify
const cats = [
    { name: "Orange Tabby", url: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg", type: "real" },
    { name: "Fluffy White", url: "https://cdn2.thecatapi.com/images/MTk4MTAxOQ.jpg", type: "real" },
    { name: "Black Kitty", url: "https://cdn2.thecatapi.com/images/4RzEwvyzz.jpg", type: "real" },
    { name: "Gray Stripes", url: "https://cdn2.thecatapi.com/images/2RhSEPaIP.jpg", type: "real" },
    { name: "Calico", url: "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg", type: "real" },
    { name: "Siamese", url: "https://cdn2.thecatapi.com/images/ai6Jps4sx.jpg", type: "real" },
    { name: "Persian", url: "https://cdn2.thecatapi.com/images/5AdhMjeEu.jpg", type: "real" },
    { name: "Maine Coon", url: "https://cdn2.thecatapi.com/images/OOD3VXAQn.jpg", type: "real" },
    { name: "British Blue", url: "https://cdn2.thecatapi.com/images/2bRtg3ziv.jpg", type: "real" },
    { name: "Ragdoll", url: "https://cdn2.thecatapi.com/images/oGefY4BwT.jpg", type: "real" },
    { name: "Bengal", url: "https://cdn2.thecatapi.com/images/aaxNf4D0H.jpg", type: "real" },
    { name: "Russian Blue", url: "https://cdn2.thecatapi.com/images/Dizxm8Jq0.jpg", type: "real" },
    { name: "Ginger Cat", url: "https://cdn2.thecatapi.com/images/3JmPapNMY.jpg", type: "real" },
    { name: "Tuxedo Cat", url: "https://cdn2.thecatapi.com/images/MTk4NTk2Nw.jpg", type: "real" },
    { name: "Tortoiseshell", url: "https://cdn2.thecatapi.com/images/1vd.jpg", type: "real" },
    { name: "Scottish Fold", url: "https://cdn2.thecatapi.com/images/o9t0LDcsa.jpg", type: "real" },
    { name: "Sphynx", url: "https://cdn2.thecatapi.com/images/BDb8ZXb1v.jpg", type: "real" },
    { name: "Abyssinian", url: "https://cdn2.thecatapi.com/images/unPP08xOZ.jpg", type: "real" },
    { name: "Birman", url: "https://cdn2.thecatapi.com/images/HOrX5gwLS.jpg", type: "real" },
    { name: "Bombay", url: "https://cdn2.thecatapi.com/images/5iYq9NmT1.jpg", type: "real" },
    { name: "Burmese", url: "https://cdn2.thecatapi.com/images/4lXnnfxac.jpg", type: "real" },
    { name: "Devon Rex", url: "https://cdn2.thecatapi.com/images/4RzEwvyzz.jpg", type: "real" },
    { name: "Egyptian Mau", url: "https://cdn2.thecatapi.com/images/TuSyTkt2n.jpg", type: "real" },
    { name: "Himalayan", url: "https://cdn2.thecatapi.com/images/CDhOtM-Ig.jpg", type: "real" },
    { name: "Norwegian Forest", url: "https://cdn2.thecatapi.com/images/06dgGmEOV.jpg", type: "real" },
    { name: "Snowshoe", url: "https://cdn2.thecatapi.com/images/MjA1MTQ4NQ.jpg", type: "real" },
    { name: "Somali", url: "https://cdn2.thecatapi.com/images/EPF2ejNS0.jpg", type: "real" },
    { name: "Turkish Angora", url: "https://cdn2.thecatapi.com/images/7CGV6WVXq.jpg", type: "real" },
    { name: "Turkish Van", url: "https://cdn2.thecatapi.com/images/sxIXJax6h.jpg", type: "real" },
    { name: "Exotic Shorthair", url: "https://cdn2.thecatapi.com/images/KBroiVNCM.jpg", type: "real" }
];

const catFacts = [
    "Cats say MEOW! 🐱",
    "Cats love to purr when they're happy!",
    "Kitties have soft, fluffy fur!",
    "Cats love to play with toys!",
    "Cats have whiskers on their face!",
    "Kitties like to sleep in sunny spots!",
    "Cats can jump really high!",
    "Cats have a long tail!",
    "Kitties like to chase things!",
    "Cats have pointy ears!",
    "Cats clean themselves with their tongue!",
    "Kitties have soft paws!",
    "Cats like to cuddle!",
    "Cats have pretty eyes!",
    "Kitties love treats!",
    "Cats like to hide in boxes!",
    "Cats can climb trees!",
    "Kitties like warm milk!",
    "Cats have sharp claws!",
    "Cats are great friends!"
];

let currentCats = [];

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function initializeGame() {
    currentCats = shuffleArray(cats).slice(0, 8);
    
    const boxes = document.querySelectorAll('.cat-box');
    boxes.forEach((box, index) => {
        const img = box.querySelector('.box-back img');
        const nameElement = box.querySelector('.cat-name');
        
        img.src = currentCats[index].url;
        nameElement.textContent = currentCats[index].name;
        
        // Add alt text for accessibility
        img.alt = `A cute ${currentCats[index].name} cat`;
        
        // Fallback image if loading fails
        img.onerror = function() {
            this.src = `https://cataas.com/cat?width=300&height=300&t=${Date.now()}_${index}`;
        };
    });
}

function revealCat(element, index) {
    if (element.classList.contains('revealed')) {
        return;
    }
    
    element.classList.add('revealed');
    
    if (!revealedCats.has(index)) {
        revealedCats.add(index);
        score++;
        document.getElementById('score').textContent = score;
        
        const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];
        document.getElementById('cat-fact').textContent = randomFact;
        
        playSound();
        
        if (score === 8) {
            setTimeout(() => {
                document.getElementById('celebration').classList.add('show');
            }, 500);
        }
    }
}

function playSound() {
    // Simple meow sound
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSl+zPPTgjMGHm7A7+OZURE');
    audio.volume = 0.3;
    audio.play().catch(() => {});
}

function resetGame() {
    score = 0;
    revealedCats.clear();
    document.getElementById('score').textContent = score;
    document.getElementById('cat-fact').textContent = "Click a box to find a kitty cat!";
    
    const boxes = document.querySelectorAll('.cat-box');
    boxes.forEach(box => {
        box.classList.remove('revealed');
    });
    
    document.getElementById('celebration').classList.remove('show');
    
    initializeGame();
}

window.onload = function() {
    initializeGame();
};