const cards = ["I love you soooooooo much", "I love your laugh", "I love when we snuggle",
            "I love trying out new food with you", "I love being able to come back to you after a long day",
            "I love calling you when something exciting happens", "I love making gifts for you", 
            "I love how you make me feel so loved", "I love it when we go out together",
            "I love being silly with you", "I love talking about movies and shows with you",
            "I love exploring new music with you", "I love going to concerts with you",
            "I love how inteligent and creative you are", "I love how hard working you are",
            "I love how stylish you are", "You are sooooooooo incredibly beautiful", 
            "I love it when we send each other reels", "I love cooking with you",
            "I love just enjoying life with you", "I love waking up in ur arms", 
            "I love how you make me feel like I can be myself", "I love being here for you", 
            "I love you being yourself with me", "I love waking up so I can talk to you",
            "I love spending the weekend with you when we visit", "I love falling asleep with you",
            "I love exploring with you", "I love hearing you talk", "I love talking to you and feeling heard",
            "I love how kind you are", "I love going to the worlds largest truck stop together",
            "I love working out with you", "I love coming to you about anything",
            "I love staying up late with you", "I love getting coffee with you",
            "I love taking you to all my favorite places", "I love you to the moon and back",
            "I love knowing you're my person", "You're the love of my life",
            "I love watching doxie videos with you", "I love just laughing with you",
            "I love doing the silly photoshoots", "I love going to the movies with you",
            "I love being the person you come to", "You're beautiful inside and out",
            "I love how cute you are", "I love how thoughtful you are",
            "I love talking about the future with you", "I love how you make me a better person",
            "I love celebrating life with my soulmate", "I love you my Jenna"];

export function getCard() {
    return cards[Math.floor(Math.random() * 52)];
}