<?php
  // récupérer les données du formulaire
  $nom = $_POST['name'];
  $email = $_POST['email'];
  $objet = $_POST['objet'];
  $message = $_POST['message'];
  // construire le corps de l'e-mail
  $body = "Nom : $nom\n\n$message";
  $headers = "From: Website <$email>\r\nReply-To: $email";
  // envoyer l'e-mail
  mail("contact@titouan-rault.fr",$objet, $body, $headers);
  // rediriger l'utilisateur vers une page de confirmation
  header('Location: confirmation.html');
?>