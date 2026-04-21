function show(){
    let m = parseInt(document.getElementById("txtmoth").value);
    let amt = parseFloat(document.getElementById("amount").value);
    let interestRate = parseFloat(document.getElementById('interest').value);
     let date = document.getElementById("date").value;
    let frist = document.getElementById('frist').value;
    let lest = document.getElementById('lest').value;

    generrate(m, amt, interestRate,date,frist,lest);  
}

function generrate(month, amt, interestRate,date,frist,lest){
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

    let monthlyPrincipal = amt / month;
    let total_amt = amt;
    let balance = amt; // ✅ ប្រើ balance
    let currentDate = new Date(date);
    for(let i = 1; i <= month; i++){

    let interest = balance * interestRate / 100; 
    let total = monthlyPrincipal + interest;

    let day = currentDate.getDate();
    let mon = currentDate.getMonth() + 1; // ✅ ប្តូរឈ្មោះ
    let year = currentDate.getFullYear();

    let formatDate = `${day}-${mon}-${year}`;

    total_interest += interest;
    total_amount += total;

    html += `<tr>
                <td>${i}</td>
                <td>${formatDate}</td>
                <td>${monthlyPrincipal.toFixed(2)}</td>
                <td>${interest.toFixed(2)}</td>
                <td>${total.toFixed(2)}</td>
            </tr>`;

    balance -= monthlyPrincipal;

    // ✅ កើនខែ 1
    currentDate.setMonth(currentDate.getMonth() + 1);
}

    html += `<tr>
                <td colspan="2">Total</td>
                <td>${total_amt.toFixed(2)}</td>
                <td>${total_interest.toFixed(2)}</td>
                <td>${total_amount.toFixed(2)}</td>
            </tr>`;
    
    table.innerHTML = html;
   
}

function show2_db(){
  window.location.href = "dashboard2.html";
 
}
function go_nav(){
  window.location.href = "navba.html";
 
}