<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer-6.6.0/src/Exception.php';
    require 'PHPMailer-6.6.0/src/SMTP.php';
    require 'PHPMailer-6.6.0/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    // $mail->Charset = 'UTF-8';
    $mail->CharSet = "utf-8";
    // $mail->setLanguage('ru', 'PHPMailer-6.6.0/language/');
    // возможность встраивать html-теги в письмо
    $mail->IsHTML(true);

    // от кого письмо
    $mail->setFrom('nzhilkevich@yandex.ru', 'Форма заказа');
    // кому
    $mail->addAddress('nzhilkevich@yandex.ru');
    // тема письма
    $mail->Subject = 'Обращение из формы заказа на сайте';

    // $name = $_POST['name'];
    // $tel = $_POST['tel'];
    // $email = $_POST['email'];
    // $company = $_POST['company'];
    // $website = $_POST['website'];
    // $town = $_POST['town'];
    // $services = $_POST['services'];
    // $comments = $_POST['comments'];
    // $date = $_POST['date'];
    // $budget = $_POST['budget'];
    // $check = $_POST['check'];

    //тело письма
    // $body = "
    //     <h1>Заполненная форма заказа на сайте</h1><br>
    //     <p><strong>Телефон:</strong> $tel</p><br>
    //     <p><strong>Эл. почта:</strong> $email</p><br>
    //     <p><strong>Компания:</strong> $company</p><br>
    //     <p><strong>Сайт/аккаунт:</strong> $website</p><br>
    //     <p><strong>Город:</strong> $town</p><br>
    //     <p><strong>Услуга, которая нужна:</strong> $services</p><br>
    //     <p><strong>Пожелания и комментарии к заказу:</strong> $comments</p><br>
    //     <p><strong>Дедлайн:</strong> $date</p>
    //     <p><strong>Бюджет на проект:</strong> $budget</p>
    //     <p><strong>Согласие на обработку персональных данных:</strong> $check</p>
    // "
    $body = '<h1>Заполненная форма заказа на сайте</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['tel']))){
        $body.='<p><strong>Телефон:</strong> '.$_POST['tel'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>Эл. почта:</strong> '.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['company']))){
        $body.='<p><strong>Компания:</strong> '.$_POST['company'].'</p>';
    }
    if(trim(!empty($_POST['website']))){
        $body.='<p><strong>Сайт/аккаунт:</strong> '.$_POST['website'].'</p>';
    }
    if(trim(!empty($_POST['town']))){
        $body.='<p><strong>Город:</strong> '.$_POST['town'].'</p>';
    }
    if(trim(!empty($_POST['services']))){
        $body.='<p><strong>Услуга, которая нужна:</strong> '.$_POST['services'].'</p>';
    }
    if(trim(!empty($_POST['comments']))){
        $body.='<p><strong>Пожелания и комментарии к заказу:</strong> '.$_POST['comments'].'</p>';
    }
    if(trim(!empty($_POST['date']))){
        $body.='<p><strong>Дедлайн:</strong> '.$_POST['date'].'</p>';
    }
    if(trim(!empty($_POST['budget']))){
        $body.='<p><strong>Бюджет на проект:</strong> '.$_POST['budget'].'</p>';
    }
    if(trim(!empty($_POST['check']))){
        $body.='<p><strong>Согласие на обработку персональных данных:</strong> '.$_POST['check'].'</p>';
    }

    // echo $body;

    $mail->Body = $body;

    // отправляем
    if(!$mail->send()){
        $message = 'Ошибка';
    }
    else{
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];
    header('Content-type: application/json');
    echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);
    // json_encode($message,   JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);
    exit();
?>