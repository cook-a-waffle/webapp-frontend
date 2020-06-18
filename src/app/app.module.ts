import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BottomNavComponent } from './dashboard/bottom-nav/bottom-nav.component';
import { MainCardComponent } from './dashboard/main-card/main-card.component';
import { SkillCardComponent } from './dashboard/skill-card/skill-card.component';
import { BadgesComponent } from './dashboard/badges/badges.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavComponent } from './nav/nav.component';
import { CategoriesNavComponent } from './templates/categories-nav/categories-nav.component';
import { BackButtonComponent } from './nav/back-button/back-button.component';
import { TemplateCardComponent } from './templates/template-card/template-card.component';
import { TemplatesComponent } from './templates/templates.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainCardTemplateComponent } from './templates/main-card-template/main-card-template.component';
import { MenuButtonComponent } from './nav/menu-button/menu-button.component';
import { BottomButtonComponent } from './templates/bottom-button/bottom-button.component';
import { CheckIngredientsComponent } from './check-ingredients/check-ingredients.component';
import { MainCardIngredientsComponent } from './check-ingredients/main-card-ingredients/main-card-ingredients.component';
import { RegisterSpecialDateComponent } from './check-ingredients/register-special-date/register-special-date.component';
import { MainCardIngredientsWhiteComponent } from './check-ingredients/main-card-ingredients-white/main-card-ingredients-white.component';
import { IngredientsNavComponent } from './check-ingredients/main-card-ingredients-white/ingredients-nav/ingredients-nav.component';
import { IngredientsItemComponent } from './check-ingredients/main-card-ingredients-white/ingredients-nav/ingredients-item/ingredients-item.component';
import { AddToMixComponent } from './add-to-mix/add-to-mix.component';
import { MainCardMixComponent } from './add-to-mix/main-card-mix/main-card-mix.component';
import { MixNavComponent } from './add-to-mix/main-card-mix/mix-nav/mix-nav.component';
import { MixBottomButtonComponent } from './add-to-mix/mix-bottom-button/mix-bottom-button.component';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'templates', component: TemplatesComponent },
  { path: 'ingredients', component: CheckIngredientsComponent },
  { path: 'addMix', component: AddToMixComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    MainCardComponent,
    SkillCardComponent,
    BadgesComponent,
    NavComponent,
    CategoriesNavComponent,
    BackButtonComponent,
    TemplateCardComponent,
    TemplatesComponent,
    DashboardComponent,
    MainCardTemplateComponent,
    MenuButtonComponent,
    BottomButtonComponent,
    CheckIngredientsComponent,
    MainCardIngredientsComponent,
    RegisterSpecialDateComponent,
    MainCardIngredientsWhiteComponent,
    IngredientsNavComponent,
    IngredientsItemComponent,
    AddToMixComponent,
    MainCardMixComponent,
    MixNavComponent,
    MixBottomButtonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
