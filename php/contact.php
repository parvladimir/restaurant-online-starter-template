<?php
declare(strict_types=1);

// Optionaler PHP-Fallback fuer normales Shared Hosting.
// Hinweis: mail() muss beim Hosting-Anbieter korrekt konfiguriert sein.
// Auf Netlify, Vercel oder Cloudflare Pages funktioniert PHP nicht; nutzen Sie dort Formspree, Tally, EmailJS oder einen anderen Formularanbieter.

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Methode nicht erlaubt.';
    exit;
}

function clean_input(string $value): string
{
    $value = trim($value);
    $value = strip_tags($value);
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

$name = clean_input($_POST['name'] ?? '');
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone = clean_input($_POST['phone'] ?? '');
$date = clean_input($_POST['date'] ?? '');
$persons = clean_input($_POST['persons'] ?? '');
$message = clean_input($_POST['message'] ?? '');
$privacyAccepted = isset($_POST['privacy']);

if ($name === '' || !$email || $message === '' || !$privacyAccepted) {
    http_response_code(400);
    echo 'Bitte fuellen Sie alle Pflichtfelder korrekt aus und bestaetigen Sie den Datenschutzhinweis.';
    exit;
}

$to = 'info@musterkueche.de'; // Hier die Empfaengeradresse des Restaurants eintragen.
$subject = 'Neue Anfrage ueber die Restaurant Website';

$body = implode("\n", [
    'Neue Anfrage:',
    '',
    'Name: ' . $name,
    'E-Mail: ' . $email,
    'Telefon: ' . ($phone ?: '-'),
    'Datum: ' . ($date ?: '-'),
    'Personen: ' . ($persons ?: '-'),
    '',
    'Nachricht:',
    $message,
]);

$headers = [
    'From: Restaurant Website <no-reply@example-restaurant.de>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
];

if (mail($to, $subject, $body, implode("\r\n", $headers))) {
    echo 'Vielen Dank. Ihre Anfrage wurde gesendet.';
    exit;
}

http_response_code(500);
echo 'Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es telefonisch oder per E-Mail.';
