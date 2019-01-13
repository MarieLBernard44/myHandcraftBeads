# My HandCraft Beads
Une application destinée à toutes les perleuses

## Initialisation du projet avec menu slide
```bash
ionic start myHandCraftBeads sidemenu
```
## Lancement de l'application
```bash
ionic serve
```
## Ajout des codes couleur
Pour ajouter des variables sass au fichier variable.scss, il faut :
- Déclarer une class correspondant à la couleur
```css
.ion-color-darkmint {
  --ion-color-base: #488b8f;
  --ion-color-contrast: #ffffff;
}
```
- Puis déclarer la variable 
```css
  --ion-color-darkmint: #488b8f;
  --ion-color-darkmint-contrast: #ffffff;
```

## Passage des données d'une page vers une autre page
Pour passer des données d'une page vers une autre, nous utilisons la méthode navigate du module Router afin de naviguer sur la page souhaitée:
```ts
this.router.navigate([
    "/grille",
    {
      ligne: this.ligne,
      colonne: this.colonne
    }
]);
```
Puis nous récupérons les données transmises dans notre page en nous abonnant à l'observable params du module ActivatedRoute:
```ts
this.activatedRoute.params.subscribe(params => {
    this.colonne = params["colonne"];
    this.ligne = params["ligne"];
});
```
