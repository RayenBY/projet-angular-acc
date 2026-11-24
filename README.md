# Conference App — Prosit 1

Composants, Data-Binding, contrôle de flux natif, directives et pipes (Angular 21).

## Lancer le projet

```bash
npm install
ng serve
```

Puis ouvrir `http://localhost:4200/`.

## Organisation de la page d'accueil

```
src/app/
├── models/
│   ├── conference.ts          interface Conference
│   └── conference-list.ts     classe ConferenceList (liste des conférences)
├── pages/
│   ├── home/                  page d'accueil (assemble les sections)
│   └── list-conf/             affichage de la liste des conférences
└── sharedComponent/           composants réutilisables
    ├── header/
    ├── navbar/                menu de navigation
    ├── user-profile/
    ├── friends-list/
    ├── notifications/
    └── footer/
```

Chaque section est un composant standalone indépendant (généré avec `ng g c`), ce qui facilite
la réutilisation, le travail en équipe et la maintenance.

## Mécanismes Angular utilisés

| Mécanisme | Où |
|---|---|
| Signals : `signal()`, `set()`, `update()` | tous les composants |
| Interpolation `{{ }}` | header, profil, notifications, liste des conférences |
| Property binding `[ ]` | `[disabled]`, `[conferences]` |
| Event binding `( )` | `(click)`, `(register)` |
| Two-way binding `[(ngModel)]` | champs de la liste des amis, recherche par titre |
| `@for` / `@empty` | menu, amis, notifications, conférences (message si aucune conférence) |
| `@if` / `@else` | afficher/masquer les notifications, détails d'une conférence |
| Binding de classe `[class.x]` | bouton vert / orange / rouge, lien actif du menu |
| Pipes `uppercase`, `date` | titre en majuscules, date `dd/MM/yyyy`, année du footer |
| `input()` / `output()` | communication Home ↔ ListConf |

## Règles de la liste des conférences

- Seules les conférences à venir sont affichées ; sinon le message « Aucune conférence à venir. ».
- Recherche par une partie ou la totalité du titre.
- Bouton « S'inscrire » : vert s'il reste au moins 10 places, orange s'il en reste moins de 10,
  rouge (désactivé) s'il ne reste plus de place.
- Chaque clic sur « S'inscrire » augmente le nombre de participants de 1.
