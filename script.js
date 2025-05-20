// All Telugu reactions combined into one array
const teluguReactions = [
    // Original reactions
    "Bale ga! Ee dabbulaki enni biryanilu vasthayi mowa!",
    "Ayyo! Inni biryanilu thinadam ela mastaru?",
    "Idhi kharchu cheydam kante biryani thindam mowa, better ga untadi!",
    "Antha karchu pedite, Paradise ne koneyochu kada mowa!",
    "Ee dabbu tho full biryani party istara?",
    "Bro idi konte next month budget tight, biryani kuda lekapotav... priorities set chesuko!",
    "Idantha biryani ki convert chesthe colony motham invitation ichochu!",
    
    // New modern slang reactions
    "Assalu waste mowa, biryani thindam podam!",
    "Dabbulu ekkuva unnayi anta! Pakkana pettesi biryani eskomani!",
    "Idi kontava leka Paradise lo biryani bonda lo padipotava?",
    "Enni biryanilu ra babu! Vanta intiki piluvali emo!",
    "Idi kante manaki chicken 65 extra toh biryani kavali kada mowa!",
    
    // Comparison reactions
    "Aa dabbu ki biryani lane better mowa!",
    "Idi kondam ante... adi waste, biryani party iste happy ga untam!",
    "Ee item kante biryani combo better kadaa!",
    "Nuvvu aa product konala? Biryani tho comparison chusava?",
    "Aa item waste ra, biryani thinesi chill avvu!"
];

const brokeReaction = "Iroju biryani lite le mowa, budget ledu!";

function calculateBiryani() {
    // Get values
    const price = document.getElementById('price').value;
    const biryaniPrice = document.getElementById('restaurant').value;
    
    // Validate input
    if (!price || price <= 0) {
        alert("Please enter a valid price!");
        return;
    }
    
    // Calculate number of plates
    const plates = Math.floor(price / biryaniPrice);
    
    // Display results
    const resultDiv = document.getElementById('result');
    const biryaniResult = document.getElementById('biryani-result');
    const teluguReaction = document.getElementById('telugu-reaction');
    const platesDiv = document.getElementById('biryani-plates');
    
    biryaniResult.innerHTML = `₹${price} = ${plates} plates of biryani!`;
    
    // Fix the broke reaction issue - check if price is less than biryani price
    if(parseFloat(price) < parseFloat(biryaniPrice)) {
        teluguReaction.innerHTML = brokeReaction;
        platesDiv.innerHTML = ""; // No plates to show
    } else {
        // Get random Telugu reaction
        const randomReaction = teluguReactions[Math.floor(Math.random() * teluguReactions.length)];
        teluguReaction.innerHTML = randomReaction;
        
        // Generate plate icons (limit to max 10 for display)
        platesDiv.innerHTML = "";
        const displayPlates = Math.min(plates, 10);
        
        // Add with staggered delay for animation
        for(let i = 0; i < displayPlates; i++) {
            setTimeout(() => {
                const plate = document.createElement('div');
                plate.className = 'plate';
                platesDiv.appendChild(plate);
            }, i * 100);
        }
        
        if(plates > 10) {
            setTimeout(() => {
                const more = document.createElement('div');
                more.textContent = `+${plates - 10} more`;
                more.style.marginLeft = "10px";
                more.style.color = "#e63946";
                more.style.fontWeight = "bold";
                platesDiv.appendChild(more);
            }, 1100);
        }
    }
    
    // Add biryani image
    let biryaniImg = document.querySelector('.biryani-img');
    if (!biryaniImg) {
        biryaniImg = document.createElement('img');
        biryaniImg.className = 'biryani-img';
        biryaniImg.src = 'biryani.jpg'; // Generic biryani image URL
        biryaniImg.alt = 'Hyderabadi Biryani';
        document.getElementById('biryani-result').after(biryaniImg);
    }
    
    // Show result section with animation
    resultDiv.style.display = 'block';
    resultDiv.style.animation = 'fadeIn 0.5s';
}

// Add animation for page load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').classList.add('title-animation');
});