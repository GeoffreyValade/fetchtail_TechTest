# Fetchtail

## ⚙️ Prerequisites:

### 🐳❌ Without Docker:

- `Node:18`

### 🐳💙 With Docker:

- `Docker`
- `Docker-compose`

---

## ⚡ Quick test

```bash
git clone https://github.com/GeoffreyValade/fetchtail_TechTest.git
cd fetchtail_TechTest
docker compose up --build
```

---

## 🚀 Useful commands:

```bash
npm install // Install all dependencies
npm run dev // Starts the dev server with Vite
npm run build // Builds the project for production
npm run preview // Starts a local server to simulate production
```

---

## 🐳 Docker container:

```bash
docker compose up --build
```

---

## 🧱 Component structure:

```cpp
\App.vue // Root component
| \Bubble // Displays an animated or decorative bubble
| \CocktailSpace // Main container for cocktails
| | \CocktailCard // Displays a cocktail as a card
| | \CocktailModal // Modal with cocktail details
```

---

### Source of the API used

Cocktails are fetched from:
https://www.thecocktaildb.com/api.php

---

## ⚠️ Warnings:

The function getSomeCocktails uses a while loop to fill an array with random cocktails via an API.

The more elements you want, the higher the chance of duplicates every time the loop restarts, and thus with each new call.

To avoid a very long API call when you want to insert more elements, a retry limit or additional control logic may be considered.

### Explanations and risks:

The database contains 636 cocktails.

`getSomeCocktails(n)` makes one call per desired cocktail, relying on an API that returns a **random** cocktail from this database.

- If we’ve only retrieved **3 cocktails**, the chances of getting a new one remain high.

- However, if we’ve already stored **49 out of 50 expected cocktails**, it becomes much more likely that the API returns a duplicate cocktail **already in our array**.

**→ Possible consequences with a high value of n:**

- Random or very long loading time.
- API might return an error or stop.
- Temporary blocking by the server (overload / anti-abuse protection).

---

## 📦 Dependencies:

- Dependencies:
  - `vue`: ^3.5.13
- Dev-Dependencies:
  - `@vitejs/plugin-vue`: ^5.2.1,
  - `vite`: ^6.2.0,
  - `vitest`: ^3.1.1

---

## 🤝 Contribution

Contributions are welcome! To contribute:

- Fork the repo
- Create a dedicated branch: git checkout -b feat/your-feature
- Make your changes and commits
- Don’t forget to add tests if you’re planning one or more API calls
- Push the branch: git push origin feat/your-feature
- Create a Pull Request

Please open an issue if you’d like to discuss a major new feature 💡




-----------------------------------------------------------------------------



# Fetchtail

## ⚙️ Pré-requis :

### 🐳❌ Sans Docker :

- `Node:18`

### 🐳💙 Avec Docker :

- `Docker`
- `Docker-compose`

---

## ⚡ Test rapide

```bash
git clone https://github.com/GeoffreyValade/fetchtail_TechTest.git
cd fetchtail_TechTest
docker compose up --build
```

---

## 🚀 Commandes utiles :

```bash
npm install // Installe toutes les dépendances
npm run dev // Lance le serveur de dev avec Vite
npm run build // Build le projet pour la production
npm run preview // Lance un serveur local pour simuler la prod
```

---

## 🐳 Container docker :

```bash
docker compose up --build
```

---

## 🧱 Structure composants :

```cpp
\App.vue // Composant racine
| \Bubble // Affiche une bulle animée ou décorative
| \CocktailSpace // Conteneur principal des cocktails
| | \CocktailCard // Affiche un cocktail sous forme de carte
| | \CocktailModal // Modale avec les détails du cocktail
```

---

### Source de l'API utilisée

Les cocktails sont récupérés depuis :  
https://www.thecocktaildb.com/api.php

---

## ⚠️ Avertissements :

La fonction getSomeCocktails utilise une boucle `while` pour remplir un tableau avec des cocktails aléatoires via une API.

Plus on souhaite d’éléments, plus la probabilité de doublons augmente à chaque fois que la boucle revient au début, et donc à chaque nouvel appel.

Pour éviter que l'appel API soit très long si vous souhaitez insérer plus d'éléments, une limite de tentatives ou une logique de contrôle supplémentaire peut être envisagée.

### Explications et risques :

La base de données contient 636 cocktails.

`getSomeCocktails(n)` effectue un appel par cocktail recherché, en s’appuyant sur une API qui renvoie un cocktail **aléatoire** depuis cette base.

- Si nous avons seulement récupéré **3 cocktails**, les chances d'obtenir un cocktail inédit restent élevées.
- En revanche, si nous avons déjà stocké **49 cocktails sur 50 attendus**, il devient beaucoup plus probable que l’API renvoie un cocktail **déjà présent** dans notre tableau.

**→ Conséquences possibles avec une valeur élevée de n :**

- Temps de chargement aléatoire ou très long.
- API pouvant renvoyer une erreur ou s’interrompre.
- Blocage temporaire par le serveur (surcharge / protection anti-abus).

---

## 📦 Dépendances :

- Dépendances:
  - `vue`: ^3.5.13
- Dev-Dépendances:
  - `@vitejs/plugin-vue`: ^5.2.1,
  - `vite`: ^6.2.0,
  - `vitest`: ^3.1.1

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

- Fork le repo
- Créez une branche dédiée : `git checkout -b feat/votre-feature`
- Faites vos modifs et commits
- N'oubliez pas de prévoir des tests si vous prévoyez un/des appel(s) à l'API
- Push la branche : `git push origin feat/votre-feature`
- Créez une Pull Request

Merci d’ouvrir une issue si vous souhaitez discuter d’une nouvelle fonctionnalité importante 💡

