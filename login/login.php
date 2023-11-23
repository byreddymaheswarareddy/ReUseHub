// login.php

<?php

// Get username and password from POST request
$username = $_POST['username']; 
$password = $_POST['password'];

// Validate credentials against database
$isValid = validateCredentials($username, $password); 

if ($isValid) {
  // Start user session
  session_start();
  $_SESSION['user'] = $username;

  // Redirect to main page
  header('Location: main.php');
} else {
  // Show error message
  echo "Invalid username or password";
}

function validateCredentials($username, $password)
{
  // Check against database
  // ...

  $isValid = false;

  // Return true if valid
  return $isValid;
}

?>
