function table(){
    let loading = document.getElementById("lod");
    let frist = document.getElementById('frist').value;
    let lest = document.getElementById('lest').value;
    let date = document.getElementById('date').value;
    loading.style.display=('flex');
      setTimeout(() => {
        loading.style.display = 'none';
        window.location.href=("teble.html")
    }, 1000);
    
}
function show(){
   

    let m = document.getElementById("txtmoth").value;
    let amt = document.getElementById("amount").value;
    let date = document.getElementById("date").value;
    let frist = document.getElementById('frist').value;
    let lest = document.getElementById('lest').value;
    // let amt = document.getElementById("interest").value;
    
    let interestRate = document.getElementById('interest').value;

    amt = amt / m;
    let interest = amt * interestRate / 100;
   

    generrate(m, amt, interest,date,frist,lest);  
}

function generrate(moth, amt, interest,date,frist,lest){
    
    const table = document.getElementById('mytable');
    
   
    let html = '';
    html += `<tr>
            <td colspan="5" style="text-align:center;">
                Name: ${frist + ' ' + lest}
            </td>
        </tr>`;
    
    html += `<tr>
                <td>No</td>
                <td>Date</td>
                <td>Principle</td>
                <td>Interest</td>
                <td>Total Payment</td>
            </tr>`;

    let total_interest = 0;
    let total_amount = 0;
    let total_principle = 0;
    let currentDate = new Date(date);
    for(let i = 1; i <= moth; i++){
        let total = amt + interest;
        total_interest += interest;
        total_amount += total;
        total_principle += amt;
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();

        let formatDate = `${day}-${month}-${year}`;
        
        html += `<tr>
                    <td>${i}</td>
                    <td>${formatDate}</td>
                    <td>${amt.toFixed(2)}</td>
                    <td>${interest.toFixed(2)}</td>
                    <td>${total.toFixed(2)}</td>
                </tr>`;
         currentDate.setMonth(currentDate.getMonth() + 1);
        }

        html += `<tr>
                    <td colspan="2">Total</td>
                    <td>${ total_principle.toFixed(2)}</td>
                    <td>${total_interest.toFixed(2)}</td>
                    <td>${total_amount.toFixed(2)}</td>
                </tr>`;

    table.innerHTML = html;
}
function exitApp(){
    window.location.href ="index.html";
}

function show_db(){
  window.location.href = "dashboard.html";
 
}
function go_nav(){
  window.location.href = "navba.html";
 
}