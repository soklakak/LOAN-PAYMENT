function table(){
    let loading = document.getElementById("lod");
    let frist = document.getElementById('frist').value;
    let lest = document.getElementById('lest').value;
    let date = document.getElementById('date').value;
    loading.style.display=('flex');
      setTimeout(() => {
        loading.style.display = 'none';
       
    }, 1000);
    
}