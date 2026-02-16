let escolhaUsuario = null;

// Seleciona todos os botões "click"
document.querySelectorAll('.btn-click').forEach(button => {
  button.addEventListener('click', function() {
    // Encontra o card mais próximo (pai com classe billionaire-card)
    const card = this.closest('.billionaire-card');
    
    // Pega o nome do bilionário do atributo data-name
    escolhaUsuario = card.getAttribute('data-name');

    console.log('Você escolheu:', escolhaUsuario);
    // alert(`Você escolheu: ${escolhaUsuario}`);
    location.href = "spendMoney.html";
    //// muda para a página que gasta dinheirooosss
    // location.href = 'https://www.youtube.com/watch?v=GcAsY7xQHb0&list=RDGcAsY7xQHb0&start_radio=1';
  });
});