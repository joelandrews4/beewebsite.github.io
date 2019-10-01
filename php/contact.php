<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "joelandrews4@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";

$success =  mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");

if (!$success) {
    $errorMessage = error_get_last()['message'];
}

echo $success;
?>