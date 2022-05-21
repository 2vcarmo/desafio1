// Pegando o ID do botão calcular e colocando em uma variavel global

const calcular = document.getElementById('calcular');

// Inicio da funçõo IMC
function imc () {

  // Declaração de váriaveis
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  let select = document.getElementById('sexo').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  // Condicional para definir o sexo
  if(select == 1) 
    select = 'Masculino'
  else 
    select = 'Feminino'
  

  // Condicional para definir a categoria
  if(idade < 12) {
    categoria = 'Infantil'
  } else if (idade >= 12 && idade <= 20) {
    categoria = 'Juvenil'
  } else if (idade >= 21 && idade <= 65) {
    categoria = 'Adulto'
  } else {
    categoria = 'Idoso'
  }

  // Condicional para saber se os valores estão definidos!
  if(nome !== '' && altura !== '' && peso !== '') {

    // Calculo para saber o imc do indivíduo e aredondando o valor
    const valorImc = (peso / (altura * altura)).toFixed(2);

    // Variáveis que serão alteradas
    let imcDesejavel = '';
    let resultadoIMC;
    let riscos = '';
    let recomendacaoInicial = ''

    // Condicionais pra definir o IMC do indivíduo
    if(valorImc < 20 ) {
      imcDesejavel = 'entre 20 e 24';
      resultadoIMC = valorImc;
      riscos = 'Muitas complicações de saúde como doenças pulmonares e cardiovasculares podem estar associadas ao baixo peso.'
      recomendacaoInicial = 'Inclua carboidratos simples em sua dieta,além de proteínas indispensáveis para ganho de massa magra. Procure um profissional '
    } else if(valorImc <= 24) {
      imcDesejavel = 'entre 20 e 24';
      resultadoIMC = valorImc;
      riscos = 'Seu peso está ideal para suas referências.'
      recomendacaoInicial = 'Mantenha uma dieta saudável e faça seus exames periódicos.'
    } else if(valorImc <= 29) {
      imcDesejavel = 'entre 20 e 24';
      resultadoIMC = valorImc;
      riscos = 'Aumento de peso apresenta risco moderado para outras doenças crônicas e cardiovasculares.'
      recomendacaoInicial = 'Adote um tratamento baseado em dieta balanceada, exercício físico e medicação. A ajuda de um profissional pode ser interessante'
    } else if(valorImc <= 35) {
      imcDesejavel = 'entre 20 e 24';
      resultadoIMC = valorImc;
      riscos = 'Quem tem obesidade vai estar mais exposto a doenças graves e ao risco de mortalidade.'
      recomendacaoInicial = 'Adote uma dieta alimentar rigorosa, com o acompanhamento de um nutricionista e um médico especialista (endócrino)'
    } else {
      imcDesejavel = 'entre 20 e 24';
      resultadoIMC = valorImc;
      riscos = 'O obeso mórbido vive menos, tem alto risco de mortalidade geral por diversas causas.'
      recomendacaoInicial = 'Procure com urgência o acompanhamento de um nutricionista para realizar reeducação alimentar, um psicólogo e um médico especialista (endócrino).'
    }

    // Seção do diagnóstico prévio
    resultado.innerHTML = 
    `<strong>Diagnóstico Prévio:</strong><br><br>
    <strong>Nome:</strong> ${nome}<br>
    <strong>Sexo:</strong> ${select}<br>
    <strong>idade:</strong> ${idade} anos<br>
    <strong>Altura:</strong> ${altura}<br>
    <strong>Peso:</strong> ${peso} kg<br>
    <strong>Categoria:</strong> ${categoria}<br>
    <strong>IMC Desejável:</strong> ${imcDesejavel}<br>
    <strong>Resultado IMC:</strong> ${resultadoIMC}<br>
    <strong>Riscos:</strong> ${riscos}<br> 
    <strong>Recomendação inicial:</strong> ${recomendacaoInicial}`

  // Resultado caso o indivíduo não coloque nenhum valor!
  } else {
    resultado.innerHTML = 'Você não digitou nada!!!'
  }

}

// Adcionando o evento de clique no botão e chamando a função IMC
calcular.addEventListener('click', imc);