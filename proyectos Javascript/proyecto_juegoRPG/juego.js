

//Areas del juego

const areasList = [
    {
        name: 'plains',
        level: [1,10],
        debuffs: {},
        buffs:{}
    },
    {
        name: 'forest',
        level: [1,10],
        debuffs: {
            stealth: +1,
        },
        buffs:{}
    },
    {
        name: 'hills',
        level: [1,10],
        debuffs: {
            dexterity: -1,
        },
        buffs:{}
    },
    {
        name: 'mountains',
        level: [11,20],
        debuffs: {
            dexterity: -1,
        },
        buffs:{}
    },
    {
        name: 'deserts',
        level: [11,20],
        debuffs: {},
        buffs:{}
    },
    {
        name: 'tundra',
        level: [11,20],
        debuffs: {},
        buffs:{}
    },
    {
        name: 'graveyards',
        level: [5,10],
        debuffs: {},
        buffs:{}
    },
    {
        name: 'Jungle',
        level: [21,30],
        debuffs: {
            willPower: -2,
        },
        buffs:{}
    },
]



//Lista de habilidades passivas, activas y perks

const skillList = [
    {
        name: 'fireball',
        level: 1,
        damage: [4,8],
        damageType: 'fire',
        sideEffect: 'burn',
        description: 'cast a not so powerful fireball that will keep your enemies warm',
    }
]

const perksList = [
    {
        name: 'lockPicking',
        level: 3, 
        description: 'increase your hability to break into places you could have not entered before'
    }
]



//atributos magicos de items
const magicAttributesList = [
    {
        name: 'luck',
        level: 1,
        attribute: Math.random() * (1.5 - 0.5 + 1),
        description: 'Increase luck: more chances of finding less trash and more useful things',
    }
]

//calidad de los items
const itemQuality = [
    {
        name:'low quality',
        level: [1,5],
    },
    {
        name:'normal',
        level: [1,5],
    },
    {
        name:'good quality',
        level: [6-100],
    },
    {
        name:'rare',
        level: [11-100],
    },
    {
        name: 'unique',
        level: [16-100],
    },
    {
        name: 'legendary',
        level: [26,100]
    }

]

//listado de items separados por armaduras, armas y otros.
const weaponsList = [
    {
        name: 'lance',
        level: null,
        magicAttributes: [],
        material: null,
        quality: null,
        statsNeeded: [],
        weight: 4,
        durability: 35,
    },
    {
        name: 'sword',
        level: null,
        magicAttributes: [],
        material: null,
        quality: null,
        statsNeeded: [],
        weight: 2,
        durability: 20,
    },
    {
        name: 'mace',
        level: null,
        magicAttributes: [],
        material: null,
        quality: null,
        statsNeeded: [],
        weight: 6,
        durability: 50,
    },
    {
        name: 'bow',
        level: null,
        magicAttributes: [],
        material: null,
        quality: null,
        statsNeeded: [],
        weight: 1.2,
        durability: 10,
    },
    
]

const armorList = [
    {
        name: 'chain mail',
        level: null,
        magicAttributes: [],
        material: 'iron',
        quality: null,
        statsNeeded: [],
        weight: 6, 
        defense: 20,
        durability: 100,
    },
    {
        name: 'ring mail',
        level: null,
        magicAttributes: [],
        material: 'iron',
        quality: null,
        statsNeeded: [],
        weight: 9, 
        defense: 30,
        durability: 120,
    },
]


//clases necesarias

class Character{
    constructor(){
        this.fireResistance = 0;
        this.coldResistance = 0;
        this.shockResistance = 0;
        this.poisonResistance = 0;
        this.chaosResistance = 0;
        this.overwhelmResistance = 0;
        this.luck = 0;
        this.lockPicking = 0;
        this.stealth = 0;
        this.carryWeight = 0;
        this.tame = 0;
        this.stateProblem = null,
    }
}

class Warrior extends Character{
    constructor(){
        super()
        this.strength = 12;
        this.dexterity = 8;
        this.wisdom = 2;
        this.vitality = 10,
        this.charisma = 8;
        this.willPower = 10;
        this.carryWeight = 2;
        this.hp = 50;
        this.mana = 5;
    }
}

class Wizzard extends Character{
    constructor(){
        super();
        this.strength = 3;
        this.dexterity = 5;
        this.wisdom = 15;
        this.vitality = 8;
        this.charisma = 4;
        this.willPower = 15;
        this.luck = 2;
        this.hp = 25;
        this.mana = 30;
    }
}

class Rogue extends Character{
    constructor(){
        super();
        this.strength = 6;
        this.dexterity = 18;
        this.wisdom = 5;
        this.vitality = 8;
        this.charisma = 7;
        this.willPower = 6;
        this.stealth = 2;
        this.hp = 30;
        this.mana = 15;
    }
}

class Druid extends Character{
    constructor(){
        super();
        this.strength = 8;
        this.dexterity = 3;
        this.wisdom = 14;
        this.vitality = 10;
        this.charisma = 3;
        this.willPower = 12;
        this.tame = 2;
        this.hp = 40;
        this.mana = 20;
    }
}


//Enemigos necearios
const enemy = [
    {
        name: 'imp',
        meleeAttack: [],
        specialAttack: [],
        type: 'demon',
        abitat: 'plains',
        level: 1,
        hp: 10,
        mana: 0,
    }
]



class Encounter{
    constructor(character, enemy, loot, area){

    }
}



const romau1990 = new Druid();
console.log(romau1990);







