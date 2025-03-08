
<?php 
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $firstName = htmlspecialchars($_POST['first_name']);
    $lastName = htmlspecialchars($_POST['last_name']);
    $contactNumber = htmlspecialchars($_POST['contact_number']);
    $email = htmlspecialchars($_POST['email']);
    $city = htmlspecialchars($_POST['city']);
    $state = htmlspecialchars($_POST['state']);
    $country = htmlspecialchars($_POST['country']);
    $service = htmlspecialchars($_POST['service']);
    $messageContent = htmlspecialchars($_POST['message']);

    $to = 'admin@sns-global.com'; // Update with correct email
    $subject = "SNS Global Inquiry";

    $message = "
    <html>
    <head>
        <title>SNS Global Inquiry</title>
    </head>
    <body>
        <p><strong>First Name:</strong> $firstName</p>
        <p><strong>Last Name:</strong> $lastName</p>
        <p><strong>Contact Number:</strong> $contactNumber</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>City:</strong> $city</p>
        <p><strong>State:</strong> $state</p>
        <p><strong>Country:</strong> $country</p>
        <p><strong>Service Selected:</strong> $service</p>
        <p><strong>Message:</strong> $messageContent</p>
    </body>
    </html>";

    $headers = "From: noreply@sns-global.com\r\n"; 
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "<script>alert('Thank you for your submission.'); window.location.href = '/index.html';</script>";
    } else {
        echo "<script>alert('Error: Please try again later.'); window.location.href = '/contact-us.html';</script>";
    }
}
?>
