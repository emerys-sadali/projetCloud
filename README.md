     Le projet était implémenté en utilisant Angualr CLI avec la version 9.1.5
     
     BUILD:
     Dans cette partie nous allons expliquer comment build le projet avec 2 possibilités différentes:
     
     1/ Pour pouvoir build notre projet, il faudra commencer par écrire la commande docker-compose up: En utilisant cette commande, nous pourrons build le projet et ensuite nous pourrons initialiser les images nécessaires.
     2/ Sinon , nous pourrons build notre projet en utilisant cette possibilité: nous pourrons build séparement les services en utilisant les commandes docker build suivantes: pour le premier service, il faudra commencer par se placer dans le répertoire du service désiré avec la commande cd "nom du répertoireé , ensuite nous la lançons la commande: docker build-t "nom du service". 
     
     Prenons l'exemple d'un service Angular, pour le build nous faisons, cd forumangular ensuite docker build -t forumangular.
     
     
     RUNNING SERVICES:
      Dans cette deuxième partie, nous allons expliquer le lancement des services séparement sans passer par docker compose-up, on peut directement run les services en utilisant: La commande docker run. Reprenons l'exemple du forum-angular: Nous faisons "docker run -p 4200:4200 -it forumagular.
      
      
      POUR PLUS D'INSTRUCTIONS:
      Pour avoir d'autres informations sur le build, le runing services et le fonctionnement, vous pourrez nous contacter directement
