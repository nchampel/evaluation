<?php
$file = 'sample-api.json';
// mettre le contenu du fichier dans une variable
$data = file_get_contents($file);
// décoder le flux JSON
$obj = json_decode($data);
$books = $obj->items;
//echo '<pre>';
//var_dump($books);
//echo '</pre>';
?>

<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <title>Actutu</title>
</head>

<body>
  <div id="container">
    <header>
      <button id="btn-menu" onclick="menuHamburger()"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="34px" height="27px" viewBox="0 0 34 27" enable-background="new 0 0 34 27" xml:space="preserve">
<rect fill="#222222" width="34" height="4"/>
<rect y="11" fill="#222222" width="34" height="4"/>
<rect y="23" fill="#222222" width="34" height="4"/>
</svg></button>
      <nav id="navbar">
        <ul>
          <li class="bold"><a href="#">Accueil</a></li>
          <li><a href="#">Rechercher</a></li>
          <li><a href="#">A propos</a></li>
        </ul>
      </nav>
      <div>
        <button id="connexion">Se connecter</button>
        <button id="inscription">S'inscrire</button>
      </div>
    </header>
    <section id="recherche">
      <div id="logo-block">
        <img src="imgs/logo.svg" alt="logo" />
        <div id="logo-text">
          <h2>Actutu</h2>
          <p>Toute l'actualité du livre</p>
        </div>
      </div>
      <form action="index.html" class="rechercher">
        <input type="search" name="search" id="search" placeholder="Rechercher un livre" />
        <button id="submission" type="submit">Go</button>
      </form>
    </section>
    <section id="recommendations">
      <div class="book-block">
        <img src="imgs/book.svg" alt="livre" />
        <h3>Recommandations</h3>
      </div>
      <div id="articles">
        <!-- ici vient s'insérer la construction de la fonction afficheRecommandations -->
      </div>
    </section>
    <section id="selection">
      <div class="book-block">
        <img src="imgs/book-blue.svg" alt="livre" />
        <h3>Les livres à moins de <span>20€</span></h3>
      </div>
      <div id="articles-selection">
        <!-- ici vient s'insérer la construction de la fonction afficheLivres -->
      </div>
    </section>
    <footer>
      <div id="footer-block">
        <img src="imgs/logo-white.svg" alt="logo" />
        <h3>Toutes les ressources du site</h3>
      </div>
      <div id="ul-block">
        <ul>
          <li><a href="#">Page d'accueil</a></li>
          <li><a href="#">Livres papier</a></li>
          <li><a href="#">Ebooks / Epubs</a></li>
          <li><a href="#">Livres audio</a></li>
        </ul>
        <ul>
          <li><a href="#">Policier</a></li>
          <li><a href="#">Science fiction</a></li>
          <li><a href="#">Frisson</a></li>
          <li><a href="#">Médieval</a></li>
          <li><a href="#">&gt; Toutes les catégories</a></li>
        </ul>
        <ul>
          <li><a href="#">Promotions</a></li>
          <li><a href="#">Livres à paraître prochainement</a></li>
          <li><a href="#">Meilleures ventes</a></li>
          <li><a href="#">Incontournables</a></li>
          <li><a href="#">&gt; Tous les bons plans</a></li>
        </ul>
      </div>
    </footer>
  </div>
  <script>
    let books = <?php echo json_encode($books); ?>;
  </script>
  <script src="script.js"></script>
</body>

</html>