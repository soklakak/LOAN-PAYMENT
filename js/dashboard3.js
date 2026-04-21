function show(){
    let m = parseInt(document.getElementById("txtmoth").value);
    let amt = parseFloat(document.getElementById("amount").value);
    let interestRate = parseFloat(document.getElementById('interest').value);
    let date = document.getElementById("date").value;
    let frist = document.getElementById('frist').value;
    let lest = document.getElementById('lest').value;

    generrate(m, amt, interestRate, date, frist, lest);  
}

function generrate(month, amt, interestRate, date, frist, lest){
    const table = document.getElementById('mytable');
    
    let html = '';

    // ✅ Name row
    html += `<tr>
                <td colspan="5" style="text-align:center;">
                    Name: ${frist + ' ' + lest}
                </td>
            </tr>`;

    // ✅ Header
    html += `<tr>
                <td>No</td>
                <td>Date</td>
                <td>Principle</td>
                <td>Interest</td>
                <td>Total Payment</td>
            </tr>`;

    let total_interest = 0;
    let total_amount = 0;

    let balance = amt;
    let currentDate = new Date(date);

    // 👉 Principal paid every 3 months
    let quarterlyPrincipal = amt / (month / 3);

    for(let i = 1; i <= month; i++){

        let principal = 0;

        // 👉 Monthly interest
        let interest = balance * (interestRate / 100);

        // 👉 Pay principal every 3 months
        if(i % 3 === 0){
        principal = quarterlyPrincipal;
        balance -= principal;
        }

        if(i === month){
        principal = balance;   // 👉 នេះហើយ 1000
        balance = 0;
        }
        

        let total = principal + interest;

        // Format date
        let day = currentDate.getDate();
        let mon = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let formatDate = `${day}-${mon}-${year}`;

        total_interest += interest;
        total_amount += total;

        html += `<tr>
                    <td>${i}</td>
                    <td>${formatDate}</td>
                    <td>${principal.toFixed(2)}</td>
                    <td>${interest.toFixed(2)}</td>
                    <td>${total.toFixed(2)}</td>
                </tr>`;

        currentDate.setMonth(currentDate.getMonth() + 1);
    }

    // ✅ Total row
    html += `<tr>
                <td colspan="2">Total</td>
                <td>${amt.toFixed(2)}</td>
                <td>${total_interest.toFixed(2)}</td>
                <td>${total_amount.toFixed(2)}</td>
            </tr>`;
    
    table.innerHTML = html;
}

function show3_db(){
  window.location.href = "dashboard3.html";
}

function go_nav(){
  window.location.href = "navba.html";
}