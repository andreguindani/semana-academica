

function mascara(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ 
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
     }
    

function validarFormulario(event) {
        event.preventDefault(); 
    
        var nome = document.forms["inscricao"]["nome"].value;
        var matricula = document.forms["inscricao"]["matricula"].value;
        var cpf = document.forms["inscricao"]["cpf"].value;
        var email = document.forms["inscricao"]["email"].value;
        var turma = document.forms["inscricao"]["turma"].value;

        if (nome === "" || matricula === "" || cpf === "" || email === "" || turma === "") {
            alert("Todos os campos obrigatórios devem ser preenchidos.");
            return false;
        }

        salvarInformacoesLocalmente();
    }

function salvarInformacoesLocalmente() {
        var nome = document.forms["inscricao"]["nome"].value;
        var matricula = document.forms["inscricao"]["matricula"].value;
        var cpf = document.forms["inscricao"]["cpf"].value;
        var email = document.forms["inscricao"]["email"].value;
        var turma = document.forms["inscricao"]["turma"].value;
    

        var inscricao = {
            nome: nome,
            matricula: matricula,
            cpf: cpf,
            email: email,
            turma: turma
        };
    


    var inscricaoJSON = JSON.stringify(inscricao);


    localStorage.setItem("inscricao", inscricaoJSON);


    alert("Inscrição efetuada com sucesso");
}


if (localStorage.getItem("total_inscritos") === null) {

    localStorage.setItem("total_inscritos", 0);
}


var totalInscritos = parseInt(localStorage.getItem("total_inscritos"));
totalInscritos = isNaN(totalInscritos) ? 0 : totalInscritos;
totalInscritos++;
localStorage.setItem("total_inscritos", totalInscritos);


var numeroTotalInscritos = localStorage.getItem("total_inscritos");

console.log("Número total de inscritos: " + numeroTotalInscritos);