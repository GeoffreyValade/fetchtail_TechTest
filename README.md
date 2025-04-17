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
docker-compose up -d --build
docker exec -it my_frontend bash
npm run dev
```

---

## 🚀 Commandes utiles :

```bash
npm run dev // Lance le serveur de dev avec Vite
npm run build // Build le projet pour la production
npm run preview // Lance un serveur local pour simuler la prod
```

---

## 🐳 Container docker :

```bash
docker-compose up -d --build
docker exec -it my_frontend bash
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

Pour éviter un risque d’infinité, une limite de tentatives ou une logique de contrôle supplémentaire peut être envisagée.

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
  `vue`: ^3.5.13
- Dev-Dépendances:
  `@vitejs/plugin-vue`: ^5.2.1,
  `vite`: ^6.2.0,
  `vitest`: ^3.1.1

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
