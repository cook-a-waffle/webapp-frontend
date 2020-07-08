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
import { AddToMixDosComponent } from './add-to-mix-dos/add-to-mix-dos.component';
import { MainCardMixDosComponent } from './add-to-mix-dos/main-card-mix-dos/main-card-mix-dos.component';
import { MixBottomButtonDosComponent } from './add-to-mix-dos/mix-bottom-button-dos/mix-bottom-button-dos.component';
import { AddToMixTresComponent } from './add-to-mix-tres/add-to-mix-tres.component';
import { SavedComponent } from './saved/saved.component';
import { MainCardMixTresComponent } from './add-to-mix-tres/main-card-mix-tres/main-card-mix-tres.component';
import { MixBottomButtonTresComponent } from './add-to-mix-tres/mix-bottom-button-tres/mix-bottom-button-tres.component';
import { CookItComponent } from './cook-it/cook-it.component';
import { MainCardCookItComponent } from './cook-it/main-card-cook-it/main-card-cook-it.component';
import { MainCardCookItDarkComponent } from './cook-it/main-card-cook-it-dark/main-card-cook-it-dark.component';
import { CookItBottomButtonComponent } from './cook-it/main-card-cook-it-dark/cook-it-bottom-button/cook-it-bottom-button.component';
import { AuthComponent } from './auth/auth.component';
import { MethodsComponent } from './auth/methods/methods.component';
import { FormSignComponent } from './auth/form-sign/form-sign.component';
import { ButtonSignComponent } from './auth/button-sign/button-sign.component';
import { IndexComponent } from './index/index.component';
import { MenuBottomComponent } from './index/menu-bottom/menu-bottom.component';
import { BackgroundComponent } from './index/background/background.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LinkAccountsComponent } from './auth/link-accounts/link-accounts.component';
import { FormLinkAccountsComponent } from './auth/form-link-accounts/form-link-accounts.component';
import { UpgradeChefComponent } from './upgrade-chef/upgrade-chef.component';
import { ListItemUpgradeComponent } from './upgrade-chef/list-item-upgrade/list-item-upgrade.component';
import { ButtonGroupComponent } from './upgrade-chef/button-group/button-group.component';
import { ShopComponent } from './shop/shop.component';
import { SearchComponent } from './shop/search/search.component';
import { ItemShopComponent } from './shop/item-shop/item-shop.component';
import { ShopCardComponent } from './shop/shop-card/shop-card.component';
import { MainCardShopComponent } from './shop/main-card-shop/main-card-shop.component';
import { AcademyComponent } from './academy/academy.component';
import { DetailComponent } from './academy/detail/detail.component';
import { ItemCardAcademyComponent } from './academy/item-card-academy/item-card-academy.component';
import { SigleCardAcademyComponent } from './academy/item-card-academy/sigle-card-academy/sigle-card-academy.component';
import { CardDetailComponent } from './academy/detail/card-detail/card-detail.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'linkAccounts', component: LinkAccountsComponent },
  { path: 'templates', component: TemplatesComponent },
  { path: 'ingredients', component: CheckIngredientsComponent },
  { path: 'addMix', component: AddToMixComponent },
  { path: 'addMixDos', component: AddToMixDosComponent },
  { path: 'addMixTres', component: AddToMixTresComponent },
  { path: 'cookIt', component: CookItComponent },
  { path: 'saved', component: SavedComponent },
  { path: 'upgrade', component: UpgradeChefComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'academy', component: AcademyComponent },
  { path: 'academy/detail', component: DetailComponent }
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
    MixBottomButtonComponent,
    AddToMixDosComponent,
    MainCardMixDosComponent,
    MixBottomButtonDosComponent,
    AddToMixTresComponent,
    SavedComponent,
    MainCardMixTresComponent,
    MixBottomButtonTresComponent,
    CookItComponent,
    MainCardCookItComponent,
    MainCardCookItDarkComponent,
    CookItBottomButtonComponent,
    AuthComponent,
    MethodsComponent,
    FormSignComponent,
    ButtonSignComponent,
    IndexComponent,
    MenuBottomComponent,
    BackgroundComponent,
    SignUpComponent,
    LinkAccountsComponent,
    FormLinkAccountsComponent,
    UpgradeChefComponent,
    ListItemUpgradeComponent,
    ButtonGroupComponent,
    ShopComponent,
    SearchComponent,
    ItemShopComponent,
    ShopCardComponent,
    MainCardShopComponent,
    AcademyComponent,
    DetailComponent,
    ItemCardAcademyComponent,
    SigleCardAcademyComponent,
    CardDetailComponent
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
