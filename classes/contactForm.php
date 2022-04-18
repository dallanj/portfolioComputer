<?php
// !!!important for PHPMailer
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
// !!!important for PHPMailer

// database connection
include('../inc/db.php');

require '../vendor/autoload.php';

$beginPgp = "-----BEGIN PGP PUBLIC KEY BLOCK-----";


if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['recaptcha_response'])) { 
    // Build POST request
    require '../classes/recaptcha.php';
	
	// Take action based on the score returned:
    if ($recaptcha->score >= 0.5) 
    {
    	// Verified
        if(empty($_POST['name']) || empty($_POST['email'] || empty($_POST['message']))) {
            $alert['message'] = 'Please fill in all fields';
            $alert['type'] = 'error';
        } else if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $alert['message'] = 'Email is not a valid email address';
            $alert['type'] = 'error';
        } else if (!ctype_alpha($_POST['name'])) {
            $alert['message'] = 'Your name may only contain letters';
            $alert['type'] = 'error';
        } else if(!empty($_POST['pgp']) && substr($_POST['pgp'],0,strlen($beginPgp)) !== $beginPgp) {   
            $alert['message'] = 'You have entered an invalid PGP key';
            $alert['type'] = 'error';
        } else if((!empty($_POST['pgp']) && substr($_POST['pgp'],0,strlen($beginPgp)) == $beginPgp) || empty($_POST['pgp'])) {
            @include_once '../vendor_pgp/autoload.php';
        
            $pgp = "-----BEGIN PGP PUBLIC KEY BLOCK-----

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
=9lFF
-----END PGP PUBLIC KEY BLOCK-----";

            $args['message'] = $_POST['message'];
            $ascii_key = $pgp;
            $key = OpenPGP_Message::parse(OpenPGP::unarmor($ascii_key, "PGP PUBLIC KEY BLOCK"));

            $plain_data  = new OpenPGP_LiteralDataPacket(
            $args['message'],
            array('format' => 'u', 'filename' => 'encrypted.gpg')
            );

            $encrypted = OpenPGP_Crypt_Symmetric::encrypt(
            $key,
            new OpenPGP_Message(array($plain_data))
            );

            $args['message'] = OpenPGP::enarmor($encrypted->to_bytes(), "PGP MESSAGE");
            
            $to = 'contact@dallan.ca';

            $subject = "dallan.ca contact form";

            $message = "Name: ".$_POST['name']."</br>";
            $message .= "Email: ".$_POST['email']."</p>";
            $message .= "<pre>".$args['message']."</pre>";
            if(isset($_POST['pgp'])) {
                $message .= "<p><pre>".$_POST['pgp']."</pre></br>";
            }
            
            // Instantiation and passing `true` enables exceptions
            $mail = new PHPMailer(true);

            try {
                //Server settings
                $mail->isSMTP();                                            // Send using SMTP
                $mail->Host       = '';
                // Set the SMTP server to send through
                $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
                $mail->Username   = 'contact@dallan.ca';
                // SMTP username
                $mail->Password   = '';// SMTP password
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
                
                //$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
                $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

                //Recipients
                $mail->setFrom('contact@dallan.ca', $_POST['name']);
                $mail->addAddress($to, 'Dallan');     // Add a recipient
                // $mail->addAddress('ellen@example.com');               // Name is optional
                $mail->addReplyTo($_POST['email'], $_POST['name']);
                
                // Content
                $mail->isHTML(true);                                  // Set email format to HTML
                $mail->Subject = $subject;
                $mail->Body    = $message;

                $mail->send();
                $alert['message'] = 'Success! Your message has been sent, thank you!';
                $alert['type'] = 'success';
            } catch (Exception $e) {
                //echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
                $alert['message'] = 'Error! Message could not be sent';
                $alert['type'] = 'error';
            }
        }
    }
	else
	{
        // Not verified - show form error
        $alert['message'] = 'Error! Captcha has failed, please try again';
        $alert['type'] = 'error';
	}

    echo json_encode($alert);
}