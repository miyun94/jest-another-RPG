const Potion = require('../lib/Potion'); 

function Player(name = '') {
    this.name = name; 

    this.health = Math.floor(Math.random() * 10 + 95); 
    this.strength = Math.floor(Math.random() * 5 + 7); 
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];
}

//when using protoype, you are only creating the method once on the constructor itself 
//returns an object with various player properties 
Player.prototype.getStats = function() {
    return {
        potions: this.inventory.length, 
        health: this.health, 
        strength: this.strength, 
        agility: this.algility
    };
};

//returns the inventory array or false if empty 
Player.prototype.getInventory = function() {
    if (this.inventory.length) {
        return this.inventory; 
    }
    return false; 
}; 


Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
  };


Player.prototype.isAlive = function() {
    if (this.health === 0) {
      return false;
    }
    return true;
  };

  Player.prototype.reduceHealth = function(health) {
    this.health -= health;
  
    if (this.health < 0) {
      this.health = 0;
    }
  };

Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;
  
    return Math.floor(Math.random() * (max - min) + min);
  };

Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
  };

//.splice() method removes items from an array and returns the removed item as a new array
//here the original inventory array has a single potion removed from the specified index value and put into a new "removed item" array at index [0] and saved in a potion variable
Player.prototype.usePotion = function(index) {
    const potion = this.getInventory().splice(index, 1)[0];
  
    switch (potion.name) {
      case 'agility':
        this.agility += potion.value;
        break;
      case 'health':
        this.health += potion.value;
        break;
      case 'strength':
        this.strength += potion.value;
        break;
    }
  };

module.exports = Player;