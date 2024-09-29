function showDetails(pokemon) {
    const details = {
        gengar: {
            height: "1.5 m",
            weight: "40 kg",
            stats: { hp: 60, attack: 65, defense: 60, speed: 110 },
            abilities: "Cursed Body",
            moves: "Shadow Ball, Dream Eater, Lick",
            color: "Purple",
            shape: "Human-Like",
            location: "Pokemon Tower, Lavender Town",
            eggGroups: "Amorphous",
        },
        alakazam: {
            height: "1.5 m",
            weight: "48 kg",
            stats: { hp: 55, attack: 50, defense: 45, speed: 120 },
            abilities: "Synchronize",
            moves: "Psybeam, Future Sight, Psychic",
            color: "Yellow",
            shape: "Humanoid",
            location: "Route 8, Celadon City",
            eggGroups: "Human-Like",
        },
        pikachu: {
            height: "0.4 m",
            weight: "6.0 kg",
            stats: { hp: 35, attack: 55, defense: 40, speed: 90 },
            abilities: "Static",
            moves: "Thunderbolt, Quick Attack, Iron Tail",
            color: "Yellow",
            shape: "Quadruped",
            location: "Viridian Forest, Power Plant",
            eggGroups: "Field, Fairy",
        },
        charmander: {
            height: "0.6 m",
            weight: "8.5 kg",
            stats: { hp: 39, attack: 52, defense: 43, speed: 65 },
            abilities: "Blaze",
            moves: "Flamethrower, Dragon Claw, Fire Spin",
            color: "Orange",
            shape: "Lizard",
            location: "Route 24, Kanto",
            eggGroups: "Monster, Dragon",
        },
        bulbasaur: {
            height: "0.7 m",
            weight: "6.9 kg",
            stats: { hp: 45, attack: 49, defense: 49, speed: 45 },
            abilities: "Overgrow",
            moves: "Vine Whip, Razor Leaf, Solar Beam",
            color: "Green",
            shape: "Quadruped",
            location: "Route 1, Kanto",
            eggGroups: "Monster, Grass",
        },
        squirtle: {
            height: "0.6 m",
            weight: "9.0 kg",
            stats: { hp: 44, attack: 48, defense: 65, speed: 43 },
            abilities: "Torrent",
            moves: "Water Gun, Bubble, Hydro Pump",
            color: "Blue",
            shape: "Quadruped",
            location: "Route 24, Kanto",
            eggGroups: "Monster, Water 1",
        },
        jigglypuff: {
            height: "0.5 m",
            weight: "5.5 kg",
            stats: { hp: 115, attack: 45, defense: 50, speed: 20 },
            abilities: "Cute Charm",
            moves: "Sing, Pound, Double-Edge",
            color: "Pink",
            shape: "Squiggle",
            location: "Route 3, Kanto",
            eggGroups: "Fairy, Human-Like",
        },
        eevee: {
            height: "0.3 m",
            weight: "6.5 kg",
            stats: { hp: 55, attack: 55, defense: 50, speed: 55 },
            abilities: "Run Away",
            moves: "Quick Attack, Sand Attack, Bite",
            color: "Brown",
            shape: "Quadruped",
            location: "Ecruteak City, Johto",
            eggGroups: "Field, Human-Like",
        },
        eevee: {
            height: "0.3 m",
            weight: "6.5 kg",
            stats: { hp: 55, attack: 55, defense: 50, speed: 55 },
            abilities: "Run Away",
            moves: "Quick Attack, Sand Attack, Bite",
            color: "Brown",
            shape: "Quadruped",
            location: "Ecruteak City, Johto",
            eggGroups: "Field, Human-Like",
        },
        snorlax: {
            height: "2.1 m",
            weight: "460 kg",
            stats: { hp: 160, attack: 110, defense: 65, speed: 30 },
            abilities: "Immunity",
            moves: "Body Slam, Rest, Sleep Talk",
            color: "Blue",
            shape: "Humanoid",
            location: "Route 12, Kanto",
            eggGroups: "Monster, Rare",
        },
        mewtwo: {
            height: "2.0 m",
            weight: "122 kg",
            stats: { hp: 106, attack: 110, defense: 90, speed: 130 },
            abilities: "Pressure",
            moves: "Psychic, Psystrike, Aura Sphere",
            color: "Purple",
            shape: "Humanoid",
            location: "Cerulean Cave, Kanto",
            eggGroups: "Undiscovered",
        },
        lucario: {
            height: "1.2 m",
            weight: "54 kg",
            stats: { hp: 70, attack: 110, defense: 70, speed: 90 },
            abilities: "Steadfast",
            moves: "Aura Sphere, Close Combat, Extreme Speed",
            color: "Blue",
            shape: "Humanoid",
            location: "Cave of Being, Sinnoh",
            eggGroups: "Human-Like, Field",
        },
        greninja: {
            height: "1.5 m",
            weight: "40 kg",
            stats: { hp: 72, attack: 95, defense: 67, speed: 122 },
            abilities: "Torrent",
            moves: "Water Shuriken, Hydro Pump, Ice Beam",
            color: "Blue",
            shape: "Quadruped",
            location: "Kalos Route 2, Kalos",
            eggGroups: "Field, Water 1",
        },
        sylveon: {
            height: "1.0 m",
            weight: "23.5 kg",
            stats: { hp: 95, attack: 65, defense: 65, speed: 60 },
            abilities: "Cute Charm",
            moves: "Moonblast, Hyper Voice, Wish",
            color: "Pink",
            shape: "Quadruped",
            location: "Kalos Route 10, Kalos",
            eggGroups: "Fairy, Field",
        },
        charizard: {
            height: "1.7 m",
            weight: "90.5 kg",
            stats: { hp: 78, attack: 84, defense: 78, speed: 100 },
            abilities: "Blaze",
            moves: "Flamethrower, Dragon Claw, Air Slash",
            color: "Orange",
            shape: "Quadruped",
            location: "Victory Road, Kanto",
            eggGroups: "Monster, Dragon",
        },
        pikachu: {
            height: "0.4 m",
            weight: "6 kg",
            stats: { hp: 35, attack: 55, defense: 40, speed: 90 },
            abilities: "Static",
            moves: "Thunderbolt, Quick Attack, Iron Tail",
            color: "Yellow",
            shape: "Quadruped",
            location: "Viridian Forest, Kanto",
            eggGroups: "Field, Fairy",
        },
                                                  
    };

    const pokemonDetails = details[pokemon];
    document.getElementById('modal-title').innerText = pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
    document.getElementById('modal-height').innerText = pokemonDetails.height;
    document.getElementById('modal-weight').innerText = pokemonDetails.weight;
    document.getElementById('modal-hp').innerText = pokemonDetails.stats.hp;
    document.getElementById('modal-attack').innerText = pokemonDetails.stats.attack;
    document.getElementById('modal-defense').innerText = pokemonDetails.stats.defense;
    document.getElementById('modal-speed').innerText = pokemonDetails.stats.speed;
    document.getElementById('modal-abilities').innerText = pokemonDetails.abilities;
    document.getElementById('modal-moves').innerText = pokemonDetails.moves;
    document.getElementById('modal-color').innerText = pokemonDetails.color;
    document.getElementById('modal-shape').innerText = pokemonDetails.shape;
    document.getElementById('modal-location').innerText = pokemonDetails.location;
    document.getElementById('modal-egg-groups').innerText = pokemonDetails.eggGroups;

    document.getElementById('details-modal').style.display = "block"; // Show the modal
}
function closeModal() {
    document.getElementById("details-modal").style.display = "none";
}