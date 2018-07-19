<?php
	if ($_POST) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$org = $_POST['org'];
		$message = $_POST['message'];
		
		
		$to = "eservices@misa.org.ph";
		$subject ="MISA Inquiry";
		$from = $email;
		
		$body = "					Name: $name\n
					Org: $org\n
					Message: $message\n";
					
		mail($to, $subject, $body, "From: ".$name." <".$email.">\r\n"
			."Reply-To: ".$email."\r\n"
			."X-Mailer: PHP/" . phpversion());
		
	}
?>