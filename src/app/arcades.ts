export interface Arcade {
    id: number,
    name: string,
    tokenToPlay: number
}

let arcades: Arcade[] = [
    {
        id: 1,
        name: "Pac-man",
        tokenToPlay: 3
    },
    {
        id: 2,
        name: "Mortal Kombat",
        tokenToPlay: 5
    },
    {
        id: 3,
        name: "Space Invaders",
        tokenToPlay: 2
    },
    {
        id: 4,
        name: "Golden Axe",
        tokenToPlay: 3
    }
];

export default arcades;