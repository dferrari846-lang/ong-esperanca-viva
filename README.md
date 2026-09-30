# 🌱 ONG Esperança Viva

> Transformando vidas através do amor e da solidariedade

Uma plataforma web moderna e responsiva para a ONG Esperança Viva, dedicada a promover inclusão social, educação e assistência para comunidades vulneráveis há mais de 10 anos.

## 🎯 Sobre o Projeto

A **ONG Esperança Viva** é uma organização sem fins lucrativos focada em oferecer:

- 📚 **Suporte Socioeducativo** - Educação de qualidade para todos
- 💼 **Capacitação Profissional** - Preparação para o mercado de trabalho
- 🤝 **Apoio Comunitário** - Assistência integral às comunidades vulneráveis

## 🚀 Iniciativas Sociais

### 🍽️ Prato Cheio
Distribuição mensal de cestas básicas e marmitas nutritivas para famílias em situação de extrema vulnerabilidade social.

### 💻 Projeto Futuro Digital
Aulas gratuitas de inclusão digital, programação e capacitação profissional em tecnologia para jovens da comunidade.

### 🌱 Mãos que Nutrem
Criação e manutenção de hortas comunitárias sustentáveis, promovendo segurança alimentar e agricultura familiar.

### 👴❤️ Acolher e Cuidar
Atendimento psicológico, visitas socioafetivas e suporte humanizado para idosos e pessoas em isolamento social.

## 💎 Nossos Pilares

| Pilar | Descrição |
|-------|-----------|
| 🔍 **Transparência** | Gestão aberta de todos os recursos arrecadados |
| 🫱 **Inclusão** | Oportunidades iguais para todos os cidadãos |
| 💕 **Empatia** | Acolhimento humano em todas as nossas frentes de atuação |

## 📁 Estrutura do Projeto

```
ong-esperanca-viva/
├── index.html          # Página inicial - Hero, Sobre, Pilares e Preview dos Projetos
├── projetos.html       # Página com todos os projetos em detalhes
├── cadastro.html       # Formulário de inscrição para voluntários
├── style.css           # Estilos CSS responsivos
├── script.js           # JavaScript para validação e interatividade
└── README.md           # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5** (65.3%) - Estrutura semântica
- **CSS3** (19.2%) - Estilos responsivos e modernos
- **JavaScript** (15.5%) - Validação de formulários e interatividade

## 📱 Responsividade

O projeto é totalmente responsivo e funciona perfeitamente em:
- ✅ Desktop (1920px e acima)
- ✅ Tablet (768px a 1024px)
- ✅ Mobile (até 767px)

## 🎨 Paleta de Cores

```css
--primary-color: #2e7d32        /* Verde - Esperança */
--secondary-color: #f57c00      /* Laranja - Energia */
--error-color: #d32f2f          /* Vermelho - Alerta */
--bg-light: #f9f9f9             /* Cinza claro - Fundo */
--text-color: #333333           /* Cinza escuro - Texto */
```

## 📋 Funcionalidades

### ✅ Página Inicial (index.html)
- Seção hero com call-to-action
- Informações sobre a instituição
- Apresentação dos pilares da ONG
- Preview dos 4 principais projetos
- Botão para ver todos os projetos

### ✅ Página de Projetos (projetos.html)
- Apresentação completa de todos os projetos
- Cards com imagens, descrições e call-to-action
- Layout em grid responsivo

### ✅ Página de Cadastro (cadastro.html)
- Formulário de inscrição para voluntários
- Campos para dados pessoais (nome, email, CPF, telefone)
- Seleção de projeto de interesse
- Seleção de disponibilidade de horário
- Campo para experiências e observações
- Validação de formulário via JavaScript
- Mensagem de sucesso após submissão

## 🔗 Navegação

Todas as páginas possuem:
- **Header** com logo e menu de navegação consistente
- **Links funcionais** entre as páginas
- **Footer** com informações de contato

### Menu de Navegação
- 🏠 **Início** → index.html
- 📚 **Projetos** → projetos.html
- 🤲 **Seja Voluntário** → cadastro.html

## 📧 Contato

- **Email:** [contato@esperancaviva.org.br](mailto:contato@esperancaviva.org.br)
- **Telefone:** [(11) 98765-4321](tel:+5511987654321)

## ♿ Acessibilidade

O projeto segue boas práticas de acessibilidade:
- ✅ Semântica HTML5 apropriada
- ✅ Roles ARIA (`role="banner"`, `role="main"`, `role="contentinfo"`)
- ✅ Atributos `aria-label` e `aria-current`
- ✅ Atributos `aria-required` nos campos obrigatórios
- ✅ Imagens com `alt` descritivos
- ✅ Contraste de cores acessível
- ✅ Navegação por teclado funcional

## 🔐 Segurança & Validação

- Validação de formulário com HTML5 (`required`, `type="email"`, `minlength`)
- Atributos `maxlength` para limitar entrada de dados
- Campos obrigatórios marcados com asterisco (*)
- Mensagens de erro dinâmicas via JavaScript

## 📊 Otimizações

- 📸 **Imagens lazy-loaded** para melhor performance
- 🎨 **CSS moderno** com variáveis (CSS Custom Properties)
- 🔄 **Grid responsivo** com `auto-fit` e `minmax`
- ⚡ **Sem dependências externas** - Código puro HTML/CSS/JS

## 🚀 Como Usar

### 1. Clonar o repositório
```bash
git clone https://github.com/dferrari846-lang/ong-esperanca-viva.git
cd ong-esperanca-viva
```

### 2. Abrir o projeto
```bash
# Abra o arquivo index.html em seu navegador
# Ou use um servidor local:
python -m http.server 8000
# Depois acesse: http://localhost:8000
```

### 3. Estrutura de pastas (recomendada)
```
ong-esperanca-viva/
├── index.html
├── projetos.html
├── cadastro.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

## 📝 Formulário de Voluntariado

O formulário coleta:
- **Dados Pessoais:** Nome, Email, CPF, Telefone
- **Interesse:** Projeto de interesse, Disponibilidade de horário
- **Observações:** Experiências anteriores e habilidades

## 🎯 Próximas Melhorias

- [ ] Integração com backend para salvar cadastros
- [ ] Sistema de autenticação de voluntários
- [ ] Painel administrativo
- [ ] Galeria de fotos dos projetos
- [ ] Blog/Notícias
- [ ] Sistema de doações online
- [ ] Integração com redes sociais
- [ ] Versão em múltiplos idiomas

## 👥 Contribuições

Contribuições são bem-vindas! Por favor:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos

Agradecemos a todos os voluntários, doadores e apoiadores que tornam possível a transformação de vidas através da solidariedade.

---

**Desenvolvido com ❤️ para a ONG Esperança Viva**

*Transformando vidas através do amor e da solidariedade* 🌱
