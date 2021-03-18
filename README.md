# Next.js - Base
- Contributeur: Arnaud-Adon
- Status: CLosed
- Raison: Petit projet permettant de comprendre et assimilier l'architecture et les fonctionnalité de Next.js, notamment:
  - `server side rendering`
  - `les pages statiques`
  - Savoir choisir le type de page selon les besoins (`page d'administration - client side redering`, `page contenant des article - pages statiques` - `profil  d'un utilisateur - rendu côté serveur`)

## Récapitulatif de l'architecture et des fonctionnalités de Next.js

<img width="2386" alt="NextJs" src="https://user-images.githubusercontent.com/17828383/111667089-a9894080-8814-11eb-8e5f-79d19de38b6b.png">

<img width="5595" alt="Fonctionnement_NextJs" src="https://user-images.githubusercontent.com/17828383/111667158-b9088980-8814-11eb-8356-9d2983e075a0.png">

## Pourquoi choisir ce framework ?

Pour développer une application hybride, SEO firendly (côté serveur, représentation statique)

## API utilisées

Liste des région, villes, département de l'api du gouvernement: [`https://api.gouv.fr/les-api/api-geo`](API Geo)



Ceci est un projet [Next.js](https://nextjs.org/) démarré avec [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Démarrage

Tout d'abord, lancez le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat.

Vous pouvez commencer à éditer la page en modifiant `pages/index.js`. La page se met à jour automatiquement lorsque vous modifiez le fichier.

Les routes API](https://nextjs.org/docs/api-routes/introduction) sont accessibles sur [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Ce point de terminaison peut être modifié dans `pages/api/hello.js`.

Le répertoire `pages/api` est mappé sur `/api/*`. Les fichiers de ce répertoire sont traités comme des [API routes](https://nextjs.org/docs/api-routes/introduction) au lieu de pages React.

## En savoir plus

Pour en savoir plus sur Next.js, jetez un coup d'œil aux ressources suivantes :

- Next.js Documentation](https://nextjs.org/docs) - découvrez les fonctionnalités et l'API de Next.js.
- Learn Next.js](https://nextjs.org/learn) - un tutoriel interactif sur Next.js.

Vous pouvez consulter [le dépôt GitHub de Next.js](https://github.com/vercel/next.js/) - vos commentaires et contributions sont les bienvenus !

## Déployer sur Vercel

La façon la plus simple de déployer votre application Next.js est d'utiliser la [Plate-forme Vercel](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) des créateurs de Next.js.

Consultez notre [documentation sur le déploiement de Next.js](https://nextjs.org/docs/deployment) pour plus de détails.
