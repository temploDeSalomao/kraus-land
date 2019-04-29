<?php 
error_reporting(E_ALL);
ini_set('display_errors','On');
// require_once 'mailler/config.php'; 
global $acao, $nome, $email, $telefone, $produto, $modelo, $quantidade, $mensagem;

$acao=$_POST['acao'];

$GLOBALS['nome']= isset ($_POST['nome']) ? $_POST['nome']  : '';
$GLOBALS['email'] =isset ($_POST['email']) ? $_POST['email']  : '';
$GLOBALS['telefone'] =isset ($_POST['telefone']) ? $_POST['telefone']  : '';
$GLOBALS['produto'] =isset ($_POST['produto']) ? $_POST['produto']  : '';
$GLOBALS['modelo'] =isset ($_POST['modelo']) ? $_POST['modelo']  : '';
$GLOBALS['quantidade']=isset ($_POST['quantidade']) ? $_POST['quantidade']  : '';
$GLOBALS['mensagem']=isset ($_POST['mensagem']) ? $_POST['mensagem']  : '';

switch ($acao) {
	case 'form':
			$mensagem = "<b>Informações do contato:</b><span style='font-size: 12px;'><br> <i>Nome do produto</i>: ".$GLOBALS['produto'].";&nbsp;&nbsp;&nbsp;<i>Modelo</i>:". 
			$GLOBALS['modelo'] ."&nbsp;&nbsp; Quantidade:".$GLOBALS['quantidade']."</span><br>
			<br><b>Mensagem:</b><br><span style='font-size: 12px;'>" .$GLOBALS['mensagem'] ."</span>" ;
		break;
}

$email='<!doctype html> <meta charset="UTF-8"> 
		<div style="box-sizing:border-box;border:2px solid #303030;max-width:900px;width:900px;min-height:150px;background:#fff;border-radius:10px; color:#fff;"> <h2 style="box-sizing:border-box;background:#303030;color:#fff;padding:16px;display:block;margin:0;border-top-left-radius:5px;border-top-right-radius:5px">Kraus Muller</h2> <div style="box-sizing:border-box;max-width:900px;width:100%;min-height:150px;padding:20px;background:rgba(0,0,0,.93);text-transform:uppercase"><img style="box-sizing:border-box;display:block;margin:15px auto" src="https://www.krausmuller.com.br/wp-content/themes/krausmuller_3xceler/images/common/logo.png" class="CToWUd"> <p style="box-sizing:border-box"></p><div style="box-sizing:border-box;margin-top:27px"><span class="im"> <h3 style="box-sizing:border-box">Informações de contato</h3> <header style="box-sizing:border-box"> <div style="box-sizing:border-box;font-weight:bold;width:calc(100%/3);float:left;border-top:1px solid #000;border-left:1px solid #000;padding:0 20px;padding:10px">Nome - E-mail </div><div style="box-sizing:border-box;font-weight:bold;width:calc(100%/3);float:left;border-top:1px solid #000;padding:0 20px;padding:10px"></div><div style="box-sizing:border-box;font-weight:bold;width:calc(100%/3);float:left;border-top:1px solid #000;border-left:1px solid #000;padding:0 20px;padding:10px;border-right:1px solid #000">Telefone </div></header> </span> <div style="box-sizing:border-box"> <div style="box-sizing:border-box;border-bottom:1px solid #000;width:calc(100%/3);float:left;border-top:1px solid #000;border-left:1px solid #000;padding:0 20px;padding:10px">'.$GLOBALS['nome'].' - <span style="font-size:11px;">( '. $GLOBALS['email']. ')</span></div><div style="box-sizing:border-box;border-bottom:1px solid #000;width:calc(100%/3);float:left;border-top:1px solid #000;padding:0 20px;padding:10px">&nbsp;</div><div style="box-sizing:border-box;border-bottom:1px solid #000;width:calc(100%/3);float:left;border-top:1px solid #000;border-left:1px solid #000;padding:0 20px;padding:10px;border-right:1px solid #000"><a style="color:#fff; text-decoration: none" href="tel:'.$GLOBALS['telefone'].'" target="_blank">'.$GLOBALS['telefone'].'</a></div></div></div><div style="box-sizing:border-box;border:1px solid #303030;clear:both;padding:0 20px;margin-top:20px;display:inline-block;width:100%;padding:10px">Mensagem: </div><div style="box-sizing:border-box;list-style:none;clear:both;line-height:34px;border:1px solid #303030;margin-top:0;padding:20px">'.$GLOBALS['mensagem'].'</div></div></div>';



echo $email;


// $mail = new PHPMailer\PHPMailer\PHPMailer();

// $mail->IsSMTP();
// $mail->Host = "mail.gabaritandoenem.com.br";

// // optional
// // used only when SMTP requires authentication  
// $mail->SMTPAuth = true;
// $mail->Username = 'no-reply@gabaritandoenem.com.br';
// $mail->Password = '3xceler3033';
// $mail->CharSet = 'UTF-8';


// $mail->setFrom('no-reply@gabaritandoenem.com.br', 'Gabaritando');
// $mail->addAddress('vitorblsantos@gmail.com', 'My Friend');
// $mail->Subject  = 'First PHPMailer Message';
// $mail->IsHTML(true);  
// $mail->Body=$email;
// if(!$mail->send()) {
//   echo 'Message was not sent.';
//   echo 'Mailer error: ' . $mail->ErrorInfo;
// } else {
//   	header("Location: /");
// }

