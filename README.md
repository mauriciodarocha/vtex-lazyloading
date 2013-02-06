VTEX Lazy Loading
=================

Carrega imagens conforme as mesmas aparecem no viewport do navegador.

Utilizado para melhoramento de performance no carregamento de páginas que contém muitas imagens.

##Início

- modifique sua prateleira
- insira o javascript em sua página

####Para inserir é necessário modificar a prateleira para que o plugin leia o caminho de cada imagem.

O plugin irá procurar pelo caminho da imagem dentro da tag `<noscript>`.

A tag `<noscript>` renderiza seu contéudo apenas se o javascript estiver desativado. Funcionando como alternativa se algum navegador estiver com o javascript desabilitado. Neste caso, o código do "lazy load" não será executado.

Veja parte da prateleira abaixo:
```html
<div class="shelf-image-container">
  <noscript>$product.GetImageTag(29)</noscript>
</div>
```
**Atenção:** A imagem não deve ser inserida em outro lugar da prateleira. Senão perde o sentido do plugin, pois a imagem seria carregada normalmente pelo navegador.

####Insira o javascript em sua página.
```html
<script src="/arquivos/vtex-lazyloading.js" type="text/javascript"></script>
```

*Pronto!*

**Observações:** 
* Esta é a primeira versão deste plugin, e ainda não contém melhoramentos visuais como o icone "carregando" em cada imagem. O que pode ser incoveniente para alguns usuários.
* Com algumas pequenas modificações pode ser utilizado para imagens da prateleira ou qualquer imagem do site. Talvez não para todo o site.
* Faça testes, testes, testes, principalmente no Internet Explorer.


