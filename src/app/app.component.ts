import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgClass} from "@angular/common";
import {CombatComponent} from "./combat/combat.component";
import {LootComponent} from "./loot/loot.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, CombatComponent, LootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'play';
  activeTab = 'tab1';

  onTabChange(tabId: string) {
    this.activeTab = tabId;
  }
}
