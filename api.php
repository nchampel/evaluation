<?php
header('Content-Type: application/json');
$file = 'sample-api.json';
// mettre le contenu du fichier dans une variable
$data = file_get_contents($file);
// décoder le flux JSON
// $obj = json_decode($data);
// $books = $obj->items;
//$books = json_encode($books);
// echo '<pre>';
echo($data);
// echo '</pre>';