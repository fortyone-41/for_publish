<?php 

$todos = [];
for($i=0;i<11;i++) {
  $todos[].id = $i;
  $todos[].complete = false;
  $todos[].title = "Title #".$i;
}

echo json_encode($todos);
?>