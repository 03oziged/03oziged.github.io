<?php

mail("zheka.derevyanko@gmail.com", "My Subject #mail", "'#mail' Line 1\nLine 2\nLine 3");
if(isset($_POST["send"])) {
    // Выполнили скрипт и назад в форму
    exit('<meta http-equiv="refresh" content="0; url=index.html" />');
}
?>