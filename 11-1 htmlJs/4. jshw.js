const mydiv = document.getElementById("mydiv");

function myfunc() {
    const row = document.getElementById("row").value;
    const col = document.getElementById("col").value;
    let tableHTML = '<table border="1">';
    for(let i = 1; i<=row ; i++){
        tableHTML += '<tr>';
        for(let j=1; j<=col;j++){
            tableHTML += `<td>hello</td>`
        }
        tableHTML += '</tr>'
    
        
    }
    mydiv.innerHTML = tableHTML;
}
