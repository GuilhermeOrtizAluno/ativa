var count=0;
var password = [];
var aux; 
var puppils = '../../pupils.html'

function buttonAluno(clicked_id) {
    
    switch(count){
        case 0:
            document.getElementById('password-1').classList.add("btn-warning");
            document.getElementById('password-1').classList.remove("btn-primary");
            document.getElementById('password-2').classList.add("btn-warning");
            document.getElementById('password-2').classList.remove("btn-primary");
            document.getElementById('password-3').classList.add("btn-warning");
            document.getElementById('password-3').classList.remove("btn-primary");
            document.getElementById('password-4').classList.add("btn-warning");
            document.getElementById('password-4').classList.remove("btn-primary");
            document.getElementById('password-5').classList.add("btn-warning");
            document.getElementById('password-5').classList.remove("btn-primary");
            document.getElementById('password-6').classList.add("btn-warning");
            document.getElementById('password-6').classList.remove("btn-primary");
            document.getElementById('password-7').classList.add("btn-warning");
            document.getElementById('password-7').classList.remove("btn-primary");
            document.getElementById('password-8').classList.add("btn-warning");
            document.getElementById('password-8').classList.remove("btn-primary");
            document.getElementById('password-9').classList.add("btn-warning");
            document.getElementById('password-9').classList.remove("btn-primary");
        break;
        case 1:
            document.getElementById('password-1').classList.add("btn-success");
            document.getElementById('password-1').classList.remove("btn-warning");
            document.getElementById('password-2').classList.add("btn-success");
            document.getElementById('password-2').classList.remove("btn-warning");
            document.getElementById('password-3').classList.add("btn-success");
            document.getElementById('password-3').classList.remove("btn-warning");
            document.getElementById('password-4').classList.add("btn-success");
            document.getElementById('password-4').classList.remove("btn-warning");
            document.getElementById('password-5').classList.add("btn-success");
            document.getElementById('password-5').classList.remove("btn-warning");
            document.getElementById('password-6').classList.add("btn-success");
            document.getElementById('password-6').classList.remove("btn-warning");
            document.getElementById('password-7').classList.add("btn-success");
            document.getElementById('password-7').classList.remove("btn-warning");
            document.getElementById('password-8').classList.add("btn-success");
            document.getElementById('password-8').classList.remove("btn-warning");
            document.getElementById('password-9').classList.add("btn-success");
            document.getElementById('password-9').classList.remove("btn-warning");
        break;
        case 2:
            document.getElementById('password-1').classList.add("btn-danger");
            document.getElementById('password-1').classList.remove("btn-success");
            document.getElementById('password-2').classList.add("btn-danger");
            document.getElementById('password-2').classList.remove("btn-success");
            document.getElementById('password-3').classList.add("btn-danger");
            document.getElementById('password-3').classList.remove("btn-success");
            document.getElementById('password-4').classList.add("btn-danger");
            document.getElementById('password-4').classList.remove("btn-success");
            document.getElementById('password-5').classList.add("btn-danger");
            document.getElementById('password-5').classList.remove("btn-success");
            document.getElementById('password-6').classList.add("btn-danger");
            document.getElementById('password-6').classList.remove("btn-success");
            document.getElementById('password-7').classList.add("btn-danger");
            document.getElementById('password-7').classList.remove("btn-success");
            document.getElementById('password-8').classList.add("btn-danger");
            document.getElementById('password-8').classList.remove("btn-success");
            document.getElementById('password-9').classList.add("btn-danger");
            document.getElementById('password-9').classList.remove("btn-success");
        break;
        case 3:
            document.getElementById('password-1').classList.add("btn-info");
            document.getElementById('password-1').classList.remove("btn-danger");
            document.getElementById('password-2').classList.add("btn-info");
            document.getElementById('password-2').classList.remove("btn-danger");
            document.getElementById('password-3').classList.add("btn-info");
            document.getElementById('password-3').classList.remove("btn-danger");
            document.getElementById('password-4').classList.add("btn-info");
            document.getElementById('password-4').classList.remove("btn-danger");
            document.getElementById('password-5').classList.add("btn-info");
            document.getElementById('password-5').classList.remove("btn-danger");
            document.getElementById('password-6').classList.add("btn-info");
            document.getElementById('password-6').classList.remove("btn-danger");
            document.getElementById('password-7').classList.add("btn-info");
            document.getElementById('password-7').classList.remove("btn-danger");
            document.getElementById('password-8').classList.add("btn-info");
            document.getElementById('password-8').classList.remove("btn-danger");
            document.getElementById('password-9').classList.add("btn-info");
            document.getElementById('password-9').classList.remove("btn-danger");
        break;
        case 4:
            document.getElementById('password-1').classList.add("btn-darkmagenta");
            document.getElementById('password-1').classList.remove("btn-info");
            document.getElementById('password-2').classList.add("btn-darkmagenta");
            document.getElementById('password-2').classList.remove("btn-info");
            document.getElementById('password-3').classList.add("btn-darkmagenta");
            document.getElementById('password-3').classList.remove("btn-info");
            document.getElementById('password-4').classList.add("btn-darkmagenta");
            document.getElementById('password-4').classList.remove("btn-info");
            document.getElementById('password-5').classList.add("btn-darkmagenta");
            document.getElementById('password-5').classList.remove("btn-info");
            document.getElementById('password-6').classList.add("btn-darkmagenta");
            document.getElementById('password-6').classList.remove("btn-info");
            document.getElementById('password-7').classList.add("btn-darkmagenta");
            document.getElementById('password-7').classList.remove("btn-info");
            document.getElementById('password-8').classList.add("btn-darkmagenta");
            document.getElementById('password-8').classList.remove("btn-info");
            document.getElementById('password-9').classList.add("btn-darkmagenta");
            document.getElementById('password-9').classList.remove("btn-info");
           location.href = puppils;
        break;
    }
    switch(clicked_id){
        case 'password-1': aux = 1; break;
        case 'password-2': aux = 2; break;
        case 'password-3': aux = 3; break;
        case 'password-4': aux = 4; break;
        case 'password-5': aux = 5; break;
        case 'password-6': aux = 6; break;
        case 'password-7': aux = 7; break;
        case 'password-8': aux = 8; break;
        case 'password-9': aux = 9; break;
    }
    password[count] = aux;
    count++;
}
