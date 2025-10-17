const pinpackRewards = [
    {
        name: "Звичайний пін",
        value: 5,
        img: "img/pin.png",
        rarity: "common",
        id: "pin0"  // Розблоковує Common Pin в колекції
    },
    {
        name: "Рідкісний пін",
        value: 10,
        img: "img/pin1.png",
        rarity: "rare",
        id: "pin1"  // Розблоковує Pin #1 в колекції
    },
    {
        name: "Епічний пін",
        value: 20,
        img: "img/pin2.png",
        rarity: "epic",
        id: "pin2"  // Розблоковує Pin #2 в колекції
    },
    {
        name: "Легендарний пін",
        value: 50,
        img: "img/pin3.png",
        rarity: "legendary",
        id: "pin3"  // Розблоковує Pin #3 в колекції
    }
];

function getRandomPinReward() {
    const weights = {
        common: 50,
        rare: 30,
        epic: 15,
        legendary: 5
    };

    const weightedRewards = [];
    pinpackRewards.forEach(reward => {
        for (let i = 0; i < weights[reward.rarity]; i++) {
            weightedRewards.push(reward);
        }
    });

    const randomIndex = Math.floor(Math.random() * weightedRewards.length);
    return weightedRewards[randomIndex];
}