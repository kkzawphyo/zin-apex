<?php
// Contact form handler for Zin Apex Education
// This file handles the contact form submission

// Enable error reporting for development (disable in production)
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// Set response headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Response array
$response = array(
    'success' => false,
    'message' => '',
    'errors' => array()
);

// Check if request method is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $response['message'] = 'Invalid request method. Only POST requests are allowed.';
    echo json_encode($response);
    exit;
}

// Get and sanitize input data
$name = isset($_POST['name']) ? trim(htmlspecialchars($_POST['name'])) : '';
$email = isset($_POST['email']) ? trim(htmlspecialchars($_POST['email'])) : '';
$phone = isset($_POST['phone']) ? trim(htmlspecialchars($_POST['phone'])) : '';
$interest = isset($_POST['interest']) ? trim(htmlspecialchars($_POST['interest'])) : '';
$currentLevel = isset($_POST['currentLevel']) ? trim(htmlspecialchars($_POST['currentLevel'])) : '';
$message = isset($_POST['message']) ? trim(htmlspecialchars($_POST['message'])) : '';

// Validation
$errors = array();

// Required fields validation
if (empty($name)) {
    $errors['name'] = 'Full name is required.';
}

if (empty($email)) {
    $errors['email'] = 'Email address is required.';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Please enter a valid email address.';
}

if (empty($interest)) {
    $errors['interest'] = 'Please select your area of interest.';
}

// Optional validations
if (!empty($phone) && !preg_match('/^[\+]?[0-9\-\(\)\s]+$/', $phone)) {
    $errors['phone'] = 'Please enter a valid phone number.';
}

// Check for errors
if (!empty($errors)) {
    $response['errors'] = $errors;
    $response['message'] = 'Please correct the following errors:';
    echo json_encode($response);
    exit;
}

// Prepare email content
$to = 'info@zinapex.edu'; // Change this to your actual email
$subject = 'New Inquiry from Zin Apex Education Website';

// Email body
$emailBody = "
<html>
<head>
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #030213; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #030213; }
        .value { margin-left: 10px; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>🎓 New Inquiry - Zin Apex Education</h2>
        </div>
        <div class='content'>
            <h3>Contact Form Submission Details</h3>
            
            <div class='field'>
                <span class='label'>Full Name:</span>
                <span class='value'>{$name}</span>
            </div>
            
            <div class='field'>
                <span class='label'>Email:</span>
                <span class='value'>{$email}</span>
            </div>
            
            <div class='field'>
                <span class='label'>Phone:</span>
                <span class='value'>" . (!empty($phone) ? $phone : 'Not provided') . "</span>
            </div>
            
            <div class='field'>
                <span class='label'>Interest:</span>
                <span class='value'>{$interest}</span>
            </div>
            
            <div class='field'>
                <span class='label'>Current Japanese Level:</span>
                <span class='value'>" . (!empty($currentLevel) ? $currentLevel : 'Not specified') . "</span>
            </div>
            
            <div class='field'>
                <span class='label'>Message:</span>
                <div class='value' style='margin-top: 10px; padding: 15px; background: white; border-left: 4px solid #030213;'>
                    " . (!empty($message) ? nl2br($message) : 'No additional message provided.') . "
                </div>
            </div>
            
            <div class='field'>
                <span class='label'>Submitted:</span>
                <span class='value'>" . date('Y-m-d H:i:s') . "</span>
            </div>
            
            <div class='field'>
                <span class='label'>IP Address:</span>
                <span class='value'>" . $_SERVER['REMOTE_ADDR'] . "</span>
            </div>
        </div>
        <div class='footer'>
            <p>This email was sent from the Zin Apex Education website contact form.</p>
            <p>Please respond to the customer within 24 hours.</p>
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = array(
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: Website Contact Form <noreply@zinapex.edu>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
);

// Send email
$emailSent = mail($to, $subject, $emailBody, implode("\r\n", $headers));

if ($emailSent) {
    // Success response
    $response['success'] = true;
    $response['message'] = 'Thank you for your inquiry! We will contact you within 24 hours.';
    
    // Optional: Save to database
    saveToDatabase($name, $email, $phone, $interest, $currentLevel, $message);
    
    // Optional: Send auto-reply to customer
    sendAutoReply($email, $name);
    
} else {
    // Error response
    $response['message'] = 'Sorry, there was an error sending your message. Please try again later or contact us directly.';
}

echo json_encode($response);

// Function to save inquiry to database (optional)
function saveToDatabase($name, $email, $phone, $interest, $currentLevel, $message) {
    // Database configuration
    $servername = "localhost";
    $username = "your_db_username";
    $password = "your_db_password";
    $dbname = "your_database_name";
    
    try {
        // Create connection
        $pdo = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Prepare SQL statement
        $sql = "INSERT INTO inquiries (name, email, phone, interest, current_level, message, created_at, ip_address) 
                VALUES (:name, :email, :phone, :interest, :current_level, :message, NOW(), :ip_address)";
        
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':name' => $name,
            ':email' => $email,
            ':phone' => $phone,
            ':interest' => $interest,
            ':current_level' => $currentLevel,
            ':message' => $message,
            ':ip_address' => $_SERVER['REMOTE_ADDR']
        ]);
        
        return true;
    } catch(PDOException $e) {
        // Log error (don't show to user)
        error_log("Database error: " . $e->getMessage());
        return false;
    }
}

// Function to send auto-reply to customer (optional)
function sendAutoReply($customerEmail, $customerName) {
    $subject = 'Thank you for your inquiry - Zin Apex Education';
    
    $autoReplyBody = "
    <html>
    <head>
        <title>Thank You - Zin Apex Education</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #030213; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .footer { background-color: #f9f9f9; padding: 20px; text-align: center; }
            .btn { background-color: #030213; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>🎓 Zin Apex Education</h2>
                <p>Study in Japan</p>
            </div>
            <div class='content'>
                <h3>Thank you for your inquiry, {$customerName}!</h3>
                
                <p>We have received your inquiry and appreciate your interest in studying in Japan with Zin Apex Education.</p>
                
                <p><strong>What happens next?</strong></p>
                <ul>
                    <li>Our expert counselors will review your inquiry within 24 hours</li>
                    <li>We'll contact you via email or phone to discuss your goals</li>
                    <li>We'll provide personalized guidance based on your current level and interests</li>
                    <li>We'll schedule a free consultation session if needed</li>
                </ul>
                
                <p>In the meantime, feel free to:</p>
                <ul>
                    <li>Browse our course offerings and success stories on our website</li>
                    <li>Follow us on social media for daily updates</li>
                    <li>Contact us directly if you have urgent questions</li>
                </ul>
                
                <div style='text-align: center; margin: 30px 0;'>
                    <a href='#' class='btn'>Visit Our Website</a>
                </div>
                
                <p><strong>Contact Information:</strong></p>
                <p>
                    📧 Email: info@zinapex.edu<br>
                    📱 Myanmar: +95-1-234-567<br>
                    📱 Japan: +81-3-1234-5678<br>
                    🏢 Yangon: 123 Sule Pagoda Road, Kyauktada Township<br>
                    🏢 Tokyo: 3-15-7 Shibuya, Shibuya-ku
                </p>
            </div>
            <div class='footer'>
                <p>This is an automated message. Please do not reply to this email.</p>
                <p>Follow us: Facebook | Instagram | YouTube</p>
                <p>&copy; 2024 Zin Apex Education. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $headers = array(
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        'From: Zin Apex Education <info@zinapex.edu>',
        'X-Mailer: PHP/' . phpversion()
    );
    
    return mail($customerEmail, $subject, $autoReplyBody, implode("\r\n", $headers));
}

/*
Database schema for inquiries table (MySQL):

CREATE TABLE inquiries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    interest VARCHAR(100) NOT NULL,
    current_level VARCHAR(50),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    status ENUM('new', 'contacted', 'converted', 'closed') DEFAULT 'new',
    notes TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX idx_email ON inquiries(email);
CREATE INDEX idx_created_at ON inquiries(created_at);
CREATE INDEX idx_status ON inquiries(status);
*/
?>