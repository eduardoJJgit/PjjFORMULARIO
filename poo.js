function validaForm(){
    d = document.cadastro;
    //validar nome
    if (d.nome.value == ""){
              alert("O campo NOME  deve ser preenchido!");
              d.nome.style.backgroundColor="#ffd6d6";
              d.nome.style.color="#000000";
             d.nome.focus();
              return false;
    }
    //validar user
   
   
   
     if (d.email.value == ""){
            alert("O campo EMAIL  deve ser preenchido!");
            d.email.style.backgroundColor="#ffd6d6";
            d.email.style.color="#000000";
            d.email.focus();
            return false;
  }
  //validar email(verificao de endereco eletrônico)
  parte1 = d.email.value.indexOf("@");
  parte3 = d.email.value.length;
  if (!(parte1 >= 3 && parte3 >= 9)) {
            alert ("O campo EMAIL  deve ser conter um endereco eletronico!");
            d.email.style.backgroundColor="#ffd6d6";
            d.email.style.color="#000000";
            d.email.focus();
             return false;
             
  }if (d.telefone.value == ""){
              alert("O campo TELEFONE deve ser preenchido!");
              d.telefone.style.backgroundColor="#ffd6d6";
              d.telefone.style.color="#000000";
          
              d.telefone.focus();
        return false;
    
    
}if (d.cpf.value == ""){
              alert("O campo CPF deve ser preenchido!");
              d.cpf.style.backgroundColor="#ffd6d6";
              d.cpf.style.color="#000000";
             
              d.cpf.focus();
               return false;
    }
    
    
       if (d.sexo.value == ""){
              alert("O campo SEXO deve ser preenchido!");
              d.sexo.style.backgroundColor="#ffd6d6";
              d.sexo.style.color="#000000";
             d.sexo.focus();
              return false;
    }
   
  
    
      if (d.equipe.value == ""){
              alert("O campo EQUIPE deve ser preenchido!");
              d.equipe.style.backgroundColor="#ffd6d6";
              d.equipe.style.color="#000000";
             d.equipe.focus();
              return false;
    }
 
   if (d.nascimento.value == ""){
              alert("O campo NASCIMENTO deve ser preenchido!");
              d.nascimento.style.backgroundColor="#ffd6d6";
              d.nascimento.style.color="#000000";
             d.nascimento.focus();
              return false;
    }
      if (d.abs.value == ""){
              alert("VAI PARTICIPAR DO ABSOLUTO INFORME (SIM OU NAO)");
              d.abs.style.backgroundColor="#f70000";
              d.abs.style.color="#000000";
             d.abs.focus();
              return false; 
    }
    if (d.nomeprofessor.value == ""){
              alert("INFORME O NOME DO SEU PROFESSOR(A)");
              d.nomeprofessor.style.backgroundColor="#ffd6d6";
              d.nomeprofessor.style.color="#000000";
             d.nomeprofessor.focus();
              return false; 
              
    }  
    
   
   if (d.ucomboBox.value == ""){
              alert("O campo FAIXA deve ser preenchido!");
              d.ucomboBox.style.backgroundColor="#ffd6d6";
              d.ucomboBox.style.color="#000000";
             d.ucomboBox.focus();
              return false;
    }
 
   if (d.uucomboBox.value == ""){
              alert("O campo PESO deve ser preenchido!");
              d.uucomboBox.style.backgroundColor="#ffd6d6";
              d.uucomboBox.style.color="#000000";
             d.uucomboBox.focus();
              return false; 
   
    
 
    }  
document.cadastro.submit();
  
}



 
function Abrir_Pagina(URL,Configuracao) {
window.open(URL,'',Configuracao);      
} 
 src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js">
 type='text/javascript'>

$(function() {
$(".btn-toggle").click(function(e) {
e.preventDefault();
el = $(this).data('element');
$(el).toggle();
});
});
 
 type='text/javascript'>

$(function() {
$(".btn-toggle1").click(function(e) {
e.preventDefault();
el = $(this).data('element');
$(el).toggle();
});
});

 type="text/javascript" src="funcs1.js">

 type='text/javascript'>

$(function() {
$(".btn-toggle").click(function(e) {
e.preventDefault();
el = $(this).data('element');
$(el).toggle();
});
});
 type='text/javascript'>

$(function() {
$(".btn-toggle1").click(function(e) {
e.preventDefault();
el = $(this).data('element');
$(el).toggle();
});
});
</script>
<script type="text/javascript">
function valida_cpf(cpf)
{
cpf = cpf.replace('.','');
cpf = cpf.replace('-','');
var numeros, digitos, soma, i, resultado, digitos_iguais;
digitos_iguais = 1;
if (cpf.length < 11)
 return false;
for (i = 0; i < cpf.length - 1; i++)
 if (cpf.charAt(i) != cpf.charAt(i + 1))
       {
       digitos_iguais = 0;
       break;
       }
if (!digitos_iguais)
 {
 numeros = cpf.substring(0,9);
 digitos = cpf.substring(9);
 soma = 0;
 for (i = 10; i > 1; i--)
       soma += numeros.charAt(10 - i) * i;
 resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
 if (resultado != digitos.charAt(0))
       return false;
 numeros = cpf.substring(0,10);
 soma = 0;
 for (i = 11; i > 1; i--)
       soma += numeros.charAt(11 - i) * i;
 resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
 if (resultado != digitos.charAt(1))
       return false;
 return true;
 }
else
 return false;
}

function faz()
{
document.getElementById('msgOK').style.display = 'none'; 
document.getElementById('msgErro').style.display = 'none'; 
var cpf = document.getElementById('numero').value;

if(valida_cpf(cpf))
document.getElementById('msgOK').style.display = 'block'; 
else
document.getElementById('msgErro').style.display = 'block'; 
}



function ValidarCPF(strCPF) {
var Soma;
var Resto;
strCPF = strCPF.replace(/\D/g, ''); // Permite apenas números
Soma = 0;
if (strCPF == "00000000000") return false;

for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
Resto = (Soma * 10) % 11;

if ((Resto == 10) || (Resto == 11)) Resto = 0;
if (Resto != parseInt(strCPF.substring(9, 10))) return false;

Soma = 0;
for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
Resto = (Soma * 10) % 11;

if ((Resto == 10) || (Resto == 11)) Resto = 0;
if (Resto != parseInt(strCPF.substring(10, 11))) return false;
return true;
}

$(document).ready(function() {
$("#cpf").blur(function() {
var teste = ValidarCPF($(this).val());
$("#resposta").html((teste ? 'Válido' : '<h2><font color="red">CPF Inválido</font></h2>'));
if (teste) {
$("#cadastrar").removeAttr("disabled");
} else {

return false;
}
});
});
