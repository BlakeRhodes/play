import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-loot',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './loot.component.html',
  styleUrl: './loot.component.css'
})
export class LootComponent {
  lootBonus: number = 0;
  lootDice: number = 0;
  outputMessage: string = '';
  diceRolled: number = 0;

  rollBonus() {
    const roll = (this.d6() + this.lootBonus - 2)
    let result = roll >= 0 ? roll : 0;
    this.outputMessage = `Rolled bonus: ${result}\n`;
    this.lootDice = result
  }

  private d6() {
    return Math.floor(Math.random() * 6) + 1;
  }

  rollDice() {
    if (this.lootDice >= this.diceRolled && this.diceRolled !== 0) {
      let sum = 0;
      for (let i = 0; i <= this.diceRolled; i++) {
        sum += this.d6()
        console.log(sum)
      }
      this.outputMessage = `${sum}. ${this.lootTable(sum)}`;
      this.lootDice -= this.diceRolled;
    } else {
      this.outputMessage = "Not enough loot dice!";
    }
  }

  twoD6(): number {
    return this.d6() + this.d6();
  }

  threeD6(): number {
    return this.d6() + this.d6() + this.d6()
  }

  lootTable(number: number): string {
    const index = (number - 1) % 30
    const table = [
      `Recycle Goods - ${this.twoD6()} Plastic`,
      `Ale - ${this.twoD6()} Ale`,
      `Glass Vials - ${this.twoD6()} units of Glass,`,
      `Medicinal Herbs - ${this.d6()} Medicinal Herbs`,
      `Grain - ${this.twoD6()} Grain`,
      `Chest - 100 Gold`,
      `Iron Ore - ${this.threeD6()} Iron Ore`,
      `Silks - ${this.threeD6()} Silk`,
      `Salt - ${this.threeD6()} Salt`,
      `Circuitry Kit - Circuitry ${this.threeD6() + this.d6()}`,
      `Gems - ${this.d6()} Gems`,
      `Big Chest - 200 Gold`,
      `Ancient Tech - Can be traded to a Techstitcher for 2 PP`,
      `Third Arm - Grants a fighter an additional Free Hand`,
      `Precious Gems - ${this.twoD6()} Gems`,
      `Reagents Box - Reagents ${this.threeD6() + this.d6()}`,
      `Shift Shield - Can be used to ignore all damage assigned to the party Single use.`,
      `Drone - Scout can re-roll Scouting Roll at the cost of 1 liter of Flamequick. Comes with 2 liters.`,
      `Skinning Knife - When foraging add 1 to your forage roll.`,
      `Holographic Locket - Spend one Access Token to ignore half the damage from an attack.`,
      `Elemental Core Processor - Turns 3 Iron Ore into Ancient Tech. After use roll 1d6 on a 1 it breaks.`,
      `Keg of Flamequick - This keg contains 5 liters of Flamequick. This can be used to power some vehicles, or deal 5 additional damage in combat.`,
      `MagiTech - Can be traded to a Techstitcher for 4 PP`,
      `Plasma Grenade - Use during combat to deal 10 damage to enemy. Single use.`,
      `Folding Boat - Vehicle: Boat - Allows 2 free moves across water. Unlike other boats it can be carried.`,
      `Spellware Interface - A device that enables the wearer to cast and store spells electronically. Spells not included.`,
      `Plastic Synthesizer - Can convert 3 grain into 2 plastic`,
      `Dimensional Gateway Amulet - An amulet allowing limited travel across different dimensions. During Planning phase return to NeoArcadia`,
      `Source Code - Trade to a Techstitcher for 8 PP`,
      `Reality Modulator Staff - A powerful staff capable of altering local reality within constrained parameters. Change Hex to different Terrain Type. Single use.`,
    ];

    return table[index];
  }

}
