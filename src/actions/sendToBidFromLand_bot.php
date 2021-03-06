<?php

$token = "";
$chat_id = "";
define('DELAY', 3000);
define('REDIRECT_URL', 'https://iwellmart.com');

$action = test_input($_POST['act']);
$name = test_input($_POST['name']);
$phone = test_input($_POST['phone']);

if (!empty($action) && $action === 'bid') {

    if (empty($name)) {
        $nameErr = 'Name is empty.';
    } elseif (!preg_match("/^[\s\w]*$/u", $name)) {
        $nameErr = "Мы первый раз видим такое имя, пожалуйста, используйте буквы.";
    }

    if (empty($phone)) {
        $phoneErr = 'Phone is empty.';
    } elseif (!preg_match("/^[\d\s\S]*$/", $phone)) {
        $phoneErr = "Для указания номера телефона используйте цифры.";
    }

    //Собираем в массив то, что будет передаваться боту
    if ($nameErr) {
        echo showAlert(
            $nameErr,
            REDIRECT_URL . '/#trynl'
        );
    } elseif ($phoneErr) {
        echo showAlert(
            $phoneErr,
            REDIRECT_URL . '/#trynl'
        );
    } else {
        $arr = array(
            'Имя: ' => $name,
            'Телефон: ' => $phone
        );

        //Настраиваем внешний вид сообщения в телеграме
        foreach ($arr as $key => $value) {
            $txt .= "<b>" . $key . "</b> " . $value . "%0A";
        };

        //Передаем данные боту
        $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

        if ($sendToTelegram) {
            echo showAlert(
                'Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.'
            );
        } else {
            echo showAlert(
                'Что-то пошло не так. Попробуйте отправить форму ещё раз.',
                REDIRECT_URL . '/#trynl'
            );
        }
    }
}

function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function showAlert($message = 'Message text.', $redirectURL = REDIRECT_URL, $timeout = DELAY)
{
    $script = "
        <script type='text/javascript'>
            window.setTimeout(function() {
                    window.location.href='$redirectURL';
                }, $timeout);
            alert('$message')
        </script>
    ";

    return $script;
}
