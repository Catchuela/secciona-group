<?php
$servername = "localhost";
$username = "root";
$password = ""; // Default for XAMPP is an empty password
$dbname = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
