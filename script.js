function openPage(id) {
  document.getElementById('landing').style.display = 'none';
  document.getElementById(id).style.display = 'block';
}

function goBack() {
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  document.getElementById('landing').style.display = 'block';
}