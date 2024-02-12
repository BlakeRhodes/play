import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-combat',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './combat.component.html',
  styleUrl: './combat.component.css'
})
export class CombatComponent {

  partyHp: number = 0;
  partyCombatModifier: number = 0;
  enemyHp: number = 0;
  enemyImpact: number = 0;
  numberOfD6: number = 2;
  outputMessage: string = "";
  partyStamina: number = 0;
  firstRoll = true;

  rollDice() {
    let result = 0;
    const roll = this.d6(this.numberOfD6)
    result = roll + this.partyCombatModifier - this.enemyImpact;
    let output = this.outputMessage = `Roll: ${roll} + ${this.partyCombatModifier} - ${this.enemyImpact} = ${result}\n`;
    if(result < 0){
      this.partyHp += result;
      output += `Party takes: ${Math.abs(result)}`;
    } else {
      this.enemyHp -= result;
      output += `Enemy takes: ${Math.abs(result)}`;
    }
    if(!this.firstRoll){
      this.partyStamina--;
    }
    this.firstRoll = false;
    this.outputMessage= output;
  }

  private d6(number: number): number {
    let result = 0;
    for (let i = 0; i < number; i++) {
      result += Math.floor(Math.random() * 6) + 1;
    }
    return result;
  }

  reset() {
    this.enemyHp = 0;
    this.partyHp = 0;
    this.partyCombatModifier = 0;
    this.enemyImpact = 0;
    this.numberOfD6 = 2;
    this.outputMessage = "";
    this.partyStamina = 0;
  }
}
