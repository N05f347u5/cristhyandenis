    // Obtém o ano atual
    const currentYear = new Date().getFullYear();
    
    // Define o ano de nascimento (substitua por seu ano de nascimento)
    const birthYear = 1999;
    
    // Calcula a idade
    const age = currentYear - birthYear;
    
    // Atualiza o elemento HTML com a idade calculada
    document.getElementById("age").textContent = age + " anos";

    // Script JavaScript para alternar entre as abas

        function showTab(tabId) {
            // Esconde todo o conteúdo
            const contents = document.querySelectorAll('.tab-content');
            contents.forEach(content => content.classList.remove('active'));

            // Remove a classe 'active' de todas as abas
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => tab.classList.remove('active'));

            // Exibe o conteúdo da aba selecionada
            document.getElementById(tabId).classList.add('active');

            // Adiciona a classe 'active' à aba clicada
            event.currentTarget.classList.add('active');
        }