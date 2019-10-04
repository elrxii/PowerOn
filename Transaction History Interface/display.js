<script>
function showIt(){ 
  var i;
  var length = document.getElementsByTagName('table').length;
  var table = document.getElementsByTagName('table');

  var select = document.getElementById('myselect'); 
  var selectedIndex = select.value;
   
  for (i = 0; i < length; ++i){
    table[i].style.display = 'none';
  }

  document.getElementById(selectedIndex).style.display='inline-block';
}
</script>
