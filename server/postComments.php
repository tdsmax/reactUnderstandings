<?php
$myfile = fopen("..\\js\\\json\\data.json", "c") or die("Unable to open file!");
$values = ",{ \"idx\": \"6\",  \"author\": \"Singh Piara Aakhde\",  \"text\": \"Commented\"}" . "]";
/*foreach($_POST as $key=>$value) {
	echo $key;
	echo $value;
    $values.= $key . "=" . $value . "\t";
}*/

fseek($myfile, -1, SEEK_END);
fwrite($myfile, $values);
echo fread($myfile, filesize($myfile));
fclose($myfile);
?>
