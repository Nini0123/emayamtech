<?php
header('Access-Control-Allow-Origin: *');


$servername = "localhost";
$username = "emayamtech";
$password = "Vcge@eMayam2023";
$dbname = "emayamtech";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if (isset($_POST['firstName'])) {
    $firstName = $_POST['firstName'];
} else {
    $firstName = '';
}

if (isset($_POST['lastName'])) {
    $lastName = $_POST['lastName'];
} else {
    $lastName = '';
}

if (isset($_POST['email'])) {
    $email = $_POST['email'];
} else {
    $email = '';
}

if (isset($_POST['phone'])) {
    $phone = $_POST['phone'];
} else {
    $phone = '';
}

if (isset($_POST['subject'])) {
    $subject = $_POST['subject'];
} else {
    $subject = '';
}

if (isset($_POST['message'])) {
    $message = $_POST['message'];
} else {
    $message = '';
}


$sql = "INSERT INTO contact (firstName, lastName, email, phone, subject, message)
VALUES ('$firstName', '$lastName', '$email', '$phone', '$subject', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
?>