// let auto = {
//     ruedas: 4,
//     carcaza: true,
//     motor: 'v2',
//     color: 'azul',
//     velocidadMaxima: 300,
//     marca: 'Ferrari', 
//     aumentarVelocidad: function(n){
//         this.velocidadMaxima+=n;
//     }
// }

// console.log(auto.velocidadMaxima);
// console.log(auto.aumentarVelocidad(200));
// console.log(auto.velocidadMaxima);


//funcion constructora

// class Car{
//     constructor(brand, color, speed){
//         this.brand = brand;
//         this.color = color;
//         this.speed = speed;
//     }
//     increaseSpeed = (n)=>{
//         this.speed = this.speed += n;
//     }
//     reduceSpeed = function(n){
//         this.speed = this.speed-= n;
//         if(this.speed <= 0){
//             this.speed = 0;
//         }
//     }
//     showBrand(){
//         return `este auto es de la marca ${this.brand}`
//     }
//     showColor(){
//         return `este auto tiene color ${this.color}`
//     }
// }

// let val = new Car('Mercedes', 'red', 300);
// console.log(val.speed);
// console.log(val.increaseSpeed(400));
// val.reduceSpeed(100000)
// console.log(val.speed);
// console.log(val.showBrand());
// console.log(val.showColor());





// //herencia

// class Animal{
//     constructor(specie, diet, animalType){
//         this.specie = specie;
//         this.diet = diet; 
//         this.animalType = animalType;
//     }
//     showInfo(){
//         return `Specie:${this.specie} Diet:${this.diet}<br>Animal type:${this.animalType}`;
//     }
//     makeSound(){
//         if(this.specie == "dog"){
//             return "WORF!!!"
//         }
//         else{
//             console.error('el animal no es un perro, no puede ladrar');
//         }
//     }
// }

// let perro = new Animal("Dog", "Carnivorous", "Mammal");
// console.log(perro.showInfo());

// class Perro extends Animal{
//     constructor(specie, diet, animalType, sound, teemed){
//         super(specie, diet, animalType);
//         this.sound = sound;
//         this.teemed = teemed; 
//      }
//      showSound(){
//         return this.sound;
//      }
// }


// let perro2 = new Perro("dog", "carnivorous", "mammal","guau", true);
// let nutria = new Animal()

// console.log(perro2.makeSound());
// console.log(nutria.makeSound());


class Character{
    constructor(minDamage, maxDamage, blocking, evation, skills, equipment, mult, exp, health){
        this.minDamage = minDamage;
        this.maxDamage = maxDamage;
        this.blocking = blocking;
        this.evation = evation; 
        this.sideEffects = false;
        this.skills = [];
        this.mult = 0;
        this.equipment = [];
        this.attack = null;
        this.defense = null;
        this.turn = false;
    }

    endTurn(){
        this.turn = true;
    }
}




class EnemyCharacter extends Character{
    constructor(minDamage, maxDamage, blocking, evation, habilities, equipment, mult, exp, health, loot, lootAbundance){
        super(minDamage, maxDamage, blocking, evation, habilities, equipment, mult, exp)
        this.lootAbundance = lootAbundance;
        this.loot = [Math.round(Math.random()* this.lootAbundance), Math.round(Math.random()*100)] //crear array por rareza y bucle para dedicir el item
    }
}

let minion = new EnemyCharacter(2,6,false,false, 0, 'none', 1,20, 10, 1, 2);


class MainCharacter extends Character{
    constructor(minDamage, maxDamage, blocking, evation, habilities, equipment, mult, exp, health, fornitude, dexterity, vitality){
        super(minDamage, maxDamage, blocking, evation, habilities, equipment, mult, exp)
        this.fornitude = fornitude; 
        this.dexterity = dexterity;
        this.vitality = vitality;
    }
}

let romau1990 = new MainCharacter(12, 17, 2, 4, 'fire ball', false, 1, 0, 100,12,15,10);


class Terrain{
    constructor(terrainName, terrainBuffs, terrainDebuffs, terrainDescription){
        this.terrainName = terrainName; 
        this.terrainBuffs = terrainBuffs; 
        this.terrainDebuffs = terrainDebuffs;
        this.terrainDescription = terrainDescription; 
    }
}
const desert = new Terrain('desert', 0, 0.2, 'It reduce the speed and avade capacity in 20%, it can burn your character in battle');
const snow = new Terrain('snow', 0, 0.2, 'it reduce the speed and avade capacity in 20%, it can freeze your character in battle');
const mountain = new Terrain('Mountain', 0.3, 0, 'It significantly increase range damage with weapons and spells');
const plains = new Terrain('plains', 0, 0, 'a green flat area with plenty of open areas');
const forest = new Terrain('Forest', 0.4, 0.2, 'Good for assesination but bad for range attacks, 20% less attack damage to all range attacks, melee attacks are super effective and receive a 40% buff')
const jungle = new Terrain('jungle', 0.1, 0.2, 'long range attack gain 10% damage and melee attack damage is reduced in 20%. Your character can be poisoned in battle');
const swamp = new Terrain('swamp', 0, 0.5, 'Worse than hell, your speed and evation significatly reduce in 50%');
const city = new Terrain('city', 0, 0, 'Nothing happens, just a beautiful town in the middle of our journey');
const tundra = new Terrain('tundra', 0, 0, 'Your character can be frozen in battle');
const beach = new Terrain('beach', 0, 0, 'beautiful to lay down and do nothing, unfortunatelly we have to keep going');
const river = new Terrain('river', 0, 0, 'you cannot cross it, is a fucking river idiot');
const ford = new Terrain('ford', 0, 0.5, 'your movement speed and evation is reduced in 50%. Easy job for archers!');
const hills = new Terrain('hills', 0.1, 0.05, 'a silight reduction in movement speed and great oportunity for range attacks');

const terrainList = [desert, snow, mountain, plains, forest, jungle, swamp, city, tundra, beach, river, ford, hills]


class Encounter{
    constructor(mainCharacter, enemyCharacter){
        this.mainCharacter = mainCharacter;
        this.enemyCharacter =enemyCharacter;
        this.turns = 0;
        this.terrain = this.randomTerrain()
    }
    randomTerrain(){
        return terrainList[Math.floor(Math.random() * terrainList.length)].terrainName;
    }

    attack(){

    }
    skillAttack(skillName){
        
    }
    defend(){} //evade or block depending on the equipment and stats
    useSkills(){
        let chosenSkill = Math.round(Math.random()* this.skills.length)
    }
    newTurn(){
        if(this.mainCharacter.turn == true && this.enemyCharacter.turn == true){
            this.turns++
        }
    }
}

let stage1 = new Encounter(romau1990, minion);








class SkillTree{
    constructor(minDamage, maxDamage, areaDamage, otherEffect, sideEffects, coolDown){
        this.minDamage = minDamage;
        this.maxDamage = maxDamage; 
        this.areaDamage = areaDamage;
        this.otherEffects = otherEffects;
        this.sideEffects = sideEffects;
        this.coolDown = coolDown; 
    }
}

class PasiveSkills extends SkillTree{
    constructor(){
        super();
    }
}





class SideEffects{
    constructor(minDamage, maxDamage, damageType, duration, description){
        this.minDamage = minDamage;
        this.maxDamage = maxDamage; 
        this.damageType = damageType; 
        this.duration = duration; 
        this.description = description; 
    }
}

class ListItems{
    constructor(itemName, itemType, itemMaterial, itemWeight, itemRarity, itemAttributes, itemRequirements){
        this.itemName = itemName;
        this.itemType = itemType;
        this.itemMaterial = itemMaterial; 
        this.itemWeight = itemWeight; 
        this.itemRarity = itemRarity; 
        this.itemAttributes = itemAttributes; 
        this.itemRequirements = itemRequirements;
    }
}





