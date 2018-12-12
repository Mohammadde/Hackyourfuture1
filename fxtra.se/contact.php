<?php
if($_POST["message"]) {
    mail("dehghan8867@gmail.com", "Form to email message", $_POST["message"], "From: Fxtra@Website.se");
}
?>