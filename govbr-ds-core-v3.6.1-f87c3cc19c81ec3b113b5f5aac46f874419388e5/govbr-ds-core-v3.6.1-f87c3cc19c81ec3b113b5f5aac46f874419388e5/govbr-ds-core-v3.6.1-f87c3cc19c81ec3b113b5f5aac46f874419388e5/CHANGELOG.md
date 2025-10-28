# CHANGELOG

## [3.6.1](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/compare/v3.6.0...v3.6.1) (05/12/2024)


### 🐛 CORREÇÕES

* **cookiebar:** adiciona os scripts faltante no pacote npm ([c367c3d](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/c367c3d698d5152fc5925b82eb8f98ab43491427))
* **table:** correção da tabela sem search ([81d391f](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/81d391f7c43a128f9ceb90a08b92de9a04d281e7)), closes [#140](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/140)
* **upload:** ajusta o calculo do tamanho do arquivo quando o arquivo tem tamanho menor que 1KB ([1674d86](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/1674d86816c3a00a0ddcf61a5afc9a5ffdff47d3)), closes [#142](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/142)

## [3.6.0](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/compare/v3.5.3...v3.6.0) (02/10/2024)

### ✨ NOVIDADES

* **tokens:** adiciona css de tokens e scss de utilitarios ([1fd80cd](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/1fd80cd9d1bfe18d67603841e71cf3534a2c3863))

## [3.5.3](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/compare/v3.5.2...v3.5.3) (13/09/2024)


### 🐛 CORREÇÕES

* **wizard:** retira duplicação do initInstanceWizard ([245a572](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/245a572a0805a69030cc0d12ff4dd08b5214deb9))

## [3.5.2](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/compare/v3.5.1...v3.5.2) (15/08/2024)


### 📚 DOCUMENTAÇÃO

* **divider:** correcao das urls de referencia ([9c3fbe2](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/9c3fbe20bd73a102d62856557777a5d608a21b31)), closes [#33](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/33)


### 🐛 CORREÇÕES

* **checkbox:** corrige a criação de rolagem indevida na página causada pelo componente ([3468b01](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/3468b01fb680470b756a54d0daa3dc823fc8bb10)), closes [#124](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/124)
* **menu:** corrige o comportamento do menu contextual ([bceb362](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/bceb362913151f1867895e006496651d16643c9b)), closes [#125](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/125)
* **menu:** corrige problema do menu em telas de celular ([30462db](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/30462db6377b95ded31d8a9819722fbe826de80d)), closes [govbr-ds/govbr-ds-backlogs#620](https://gitlab.com/govbr-ds/govbr-ds-backlogs/issues/620)
* **modal:** corrige a regra de zerar margem do último elemento do elemento modal-body ([6cdd45c](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/6cdd45ce720c3944f721640021ed0ccf35d4ff6d)), closes [#127](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/127)
* **select:** corrige a elemento not found quando clica fora do select ([8c6fcc8](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/8c6fcc877a9b841705dfa823a2b602e2bc93a02f)), closes [#136](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/136)
* **table:** corrige o deslocamento do título ao rolar a página ([1010089](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/1010089e035f02ac23006680804cfa69a895f328)), closes [#128](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/128)
* **table:** retira referencia de função não usada ([c0d66f3](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/c0d66f3863f348f3b8f8193621f86c41a9778a11)), closes [#135](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/135)


### 🔁 REFATORADO

* remove função duplicada ([a38772c](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/a38772c3b84bda7ac2ffc6dc15c80a5abf3139a9))

## [3.5.1](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/compare/v3.5.0...v3.5.1) (26/02/2024)

### 🐛 CORREÇÕES

- **cookiebar a11y:** adapta o cookiebar para o leitor de tela ([f6fc360](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/f6fc360ed7cffb284c24f43d245a9e6ee41606cd)), closes [#80](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/80)
- **pagination-a11y:** correção de acessibilidade do componente ([8741e44](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/8741e44f77b71ecbb4baa76fb71ad227ab37fdb3)), closes [#101](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/101)
- **table:** corrige problemas de acessibilidade no componente ([1a26038](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/1a26038bc970acacfe4e92a01a768388764b52eb)), closes [#111](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/111)

## [3.5.0](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/compare/v3.4.1...v3.5.0) (30/01/2024)

### ✨ NOVIDADES

- **select:** adiciona opção de seleção default por meio do atributo checked ([a19d6a5](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/a19d6a5fbc7aa6dcb83635bef02d2a96515a7f86)), closes [#105](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/105)
- **select:** adiciona tratamento de acessibilidade ([664ff1b](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/664ff1b2b481ccb45a523e832c176ea3aa9e990e))

### 🐛 CORREÇÕES

- (breadcrumbs-a11y) ajusta acessibilidade ([20011da](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/20011da1b134c0b316e17770a46d00adcf5f9d2d)), closes [#78](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/78)
- (input-a11y) ajusta acessibilidade ([5ca0c8d](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/5ca0c8dc5b3c4ac09497a7590f097b2004a420d0))
- (list-a11y) ajusta acessibilidade ([26afe77](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/26afe77d0bb3a8370a5a1e5c06c2eda4bae460ac)), closes [#81](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/81)
- (notification a11y) ajusta acessibilidade ([d0035f9](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/d0035f9897e77ecb149dd46990a4359a047faedf)), closes [#99](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/99)
- (step-a11y) ajusta acessibilidade ([002f849](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/002f84910c19cdac3f05e415ae7558f502d01689)), closes [#106](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/106)
- (tag-a11y) ajusta acessibilidade ([310e55d](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/310e55dd1df4c4cfc92c3649f1cf09e3a428ecb1)), closes [#98](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/98)
- **avatar:** corrige problemas de acessibilidade no componente ([8ebb638](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/8ebb6389bc58a1537a8fa9896991ec181324e816)), closes [#76](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/76)
- **button:** altera superfície dos exemplos escuros, fixes 77 ([ccfda69](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/ccfda6978e3f4b16af86580369ea6e82b9ef3619)), closes [#77](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/77)
- **card:** ajuste no texto do botao de expandir e recolher para melhorias de acessibilidade ([7f9aac6](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/7f9aac6a67805d674e0604770a7d238e4203e91a)), closes [#85](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/85)
- **carousel:** inclusao de atributos para tratar erro de acessibilidade ao navegar pelo teclado ([f73d92a](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/f73d92a907621872e644832be622e25b132602c8)), closes [#79](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/79)
- **colapse:** correcao conflito da tecla space com o click do mouse ([1783aec](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/1783aecf1f88bf6b9db52e7688f96e94dd67f95e))
- corrige a cor da tag ([2ff4004](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/2ff400443c63db24e1fd7d15851f8a7c24830768))
- corrige espaçamentos do Footer ([df8a23c](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/df8a23c069e243cff499a8a996e98ad62f549a85))
- corrige visibilidade do header/footer no menu ([df1db23](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/df1db23547a6210a02f8426df85da517b28ea7e3))
- corrigir a cor da borda no textarea ([d33f3ff](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/d33f3ff9c2c76022855c58eca6b8e655b1beedbf)), closes [govbr-ds/govbr-ds-backlogs#599](https://gitlab.com/govbr-ds/govbr-ds-backlogs/issues/599)
- **datepicker:** ajuste de acessibilidade ([720a0dd](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/720a0dd1535f2e0223924c66a2be188d2a2d4aac))
- **foote:** adiciona atributos roles para acessibilidade do componente footer ([5496f61](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/5496f6155ab035a5cd2ae562719daa2cafd79098)), closes [#91](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/91)
- **loading:** corrige acessibilidade e upload do a11y ([4a6690a](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/4a6690a242693a39ef2b38711347eee40a1be573))
- **loading:** corrige estado loading no componente Button ([8b4313f](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/8b4313f7665ea4484d0afcaa85f7bc95fe950170)), closes [#120](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/120)
- **menu:** corrige problemas de acessibilidade no componente ([0ac06fa](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/0ac06fa4df82ce05a2819cd87910ca141a7ef30e)), closes [#96](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/96)
- **message:** correção de acessibilidade ([003738d](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/003738d45906a29e51b5e0c07a58bfcdd515e090)), closes [#109](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/109)
- **scrim:** incluida funcionalidade de travar a navegacao via tab e o esc para desativar o scrim ([89c5385](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/89c53851669750c44f599fe9fca34a48a5d65b52)), closes [#97](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/97)
- **skiplink:** melhoria de acessibilidade para informar a quantidade de itens ([3f733c4](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/3f733c4c4a0e671479013283a2e604dc9b6a94d2)), closes [#90](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/90)
- **switch:** melhoria de acessibilidade, adiciona semantica de switch para o componente ([b334e88](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/b334e887f44bb7b6203914c1e159e43a5b3eff80)), closes [#87](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/87)
- **tab:** adiciona correção de acessibilidade para o componente tab ([fb6a8c1](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/fb6a8c10f4c7b46f83d7488b5b96a6281997f56e)), closes [#89](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/89)
- **textbox a11y:** ajusta acessiblidade ([4592730](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/45927305dc4ecff356b3236b7090ea2f661ef439))
- **upload-a11y:** corrige o texto do feedback do upload ([2b8bf35](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/2b8bf35086a26ab2da6b8160fa4b46277189340a))
- **upload:** corrige a instancialização do tooltip ([bd8a3bd](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/bd8a3bdc81e5e8960d44c64a80b753feb91eab5b))
- **utilitarios:** correcao de acessibilidade dos utilitarios accordion e collapse ([715738d](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/715738d4f25a6a51b468a56b501484909abee7db)), closes [#73](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/73) [#75](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/75)
- **wizard-a11y:** correçao de acessibilidade ([5d99e3e](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/5d99e3e5c12a2580f046b3b3ac062bc388d0001c)), closes [#107](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/107)

## [3.4.1](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/compare/v3.4.0...v3.4.1) (18/10/2023)

### 🪲 CORREÇÕES

- **scrim:** agora é possível usar o comportamento ([8a040e5](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/8a040e55ed351402153f38212ddc5a5ae62a9092))
- **loading:** corrige CSS que afetava outros elementos nas soluções ([9f8b605](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/9f8b605de44b74da87945d563f57484a11d9f7eb)), closes [#71](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/71)

## [3.4.0](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/compare/v3.3.1...v3.4.0) (03/08/2023)

### ✨ Novidades

- Altera posição do config do datetimepicker ([ba28dda](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/ba28dda7ed9e8445e43c22072e16287460e162da))
- **web components:** inclui chamada na home para os webcomponents ([896a4f6](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/896a4f6c7b425b06ccaa97bf23e49b16f075e77f))

### 📚 Documentação

- **table:** altera as imagens do componente e correção gramatical ([8b20636](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/8b2063676cb0eaba7dfffd17cdb6084fbb1ba7b8))
- atualiza url da wiki ([6de343d](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/6de343d5ddb4f844781451e850a0e68df7e1cf88))
- **switch:** corrige referencias dos icones on e off ([2ab8c09](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/2ab8c09593d58ac7cb7a8dcfddc3959dc1f6beac))
- **switch:** corrige referencias dos icones on e off ([6163a4f](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/6163a4f3e035751a77b3320a917d2cdedb130cd5))
- **list:** remove referencia errada sobre header ([e06652f](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/e06652ffa00ec5cb6d69248d3a852217a79edac7))

### 🪲 Correções

- **emptystate:** ajusta as imagens das diretrizes ([0c7b1ae](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/0c7b1ae613ff0a12da96875d60ae6404f756bd68))
- ajusta margins da home ([bab14bd](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/bab14bd9fccbadcd704e2c29bfe613fb97c773cc))
- altera a build removendo js e report.html ([ac5b501](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/ac5b501c686b1e72413e12a0041fbd58a3ccb55d))
- cookiebar-checkbox ([6c39760](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/6c397609d84dd43b3c3dc50c1b395191173b90b3))
- correção de reticencia quando tem overflow no select ([d69d0c7](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/d69d0c72684a2eed64eda9e0527e47118e62b2ff)), closes [govbr-ds/govbr-ds-backlogs#497](https://gitlab.com/govbr-ds/govbr-ds-backlogs/issues/497)
- **header:** correção do dropdown quando fecha ele no mobile ([0968c17](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/0968c1789455c610aa9680d7532c9cfd7ee21bc5))
- **tipografia:** correção do nome do token font-line-height ([098d977](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/098d977a90d7848ea9a75745fe8c3734127f22c4))
- correção nomeclatura do pipeline ([dff8719](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/dff87198d0590c077fc31021621faca48138e1f7))
- **cookiebar:** corrige erro de inglês na palavra enterprise ([286bfd9](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/286bfd9917cad0047cab0490b0a89c1374a5acb4))
- **tooltip:** corrige o tooltip que retorna erro no console do browser ([7a0bb43](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/7a0bb437ec24b52f8796b0b42ab105036aeafd9a))
- **select:** retira o termo "ops!" da mensagem de empty-state padrão ([0baa6de](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/0baa6de1c59d3f6d0599c168c31592ac79a4e937))

## [3.3.1](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/compare/v3.3.0...v3.3.1) (05/04/2023)

### :bug: Correções

- **tag:** adiciona estado de disabled e altera cor quando pressionada ([b33f043](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/b33f043a86bdbacab945ca51446e7a7f735d7cae))

### :wastebasket: Depreciado

- **menu:** as classes css .menu-social e .sharegroup serão retiradas na proxima versão ([ecf0d69](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/ecf0d699dc77268468d345528677ba66a1eac899))

## [3.3.0](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/compare/v3.2.0...v3.3.0) (03/04/2023)

### :sparkles: Novidades

- atualiza links da wiki ([210e0b1](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/210e0b195b65ec303e1e5a78d08861b62bfe5cee))
- **tela introdução:** implementa site e páginas de introdução ([1139f65](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/1139f65d5f2719f3b2138f3d7b791e93a6971708)), closes [#474](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/474) [#474](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/474) [#474](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/474) [#474](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/474) [#474](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/474) [#480](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/480)

### :memo: Documentação

- **oque ha de novo:** atualiza pagina oque ha de novo com novas atualizações ([4a1bddc](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/4a1bddccdf8800d70c48423dc54fdb170da136f1))
- **comunidades:** correção de icones ([71b253f](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/71b253f0e1a3735c1c19ee6bf65a3d917ca23db3)), closes [#22](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/22) [#22](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/22) [#22](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/22)
- **acessibilidade:** inclui documentacao de acessibilidade nos componentes ([cb2ae22](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/cb2ae22ab7e60bd671b1850006fc7b4dc6fe2fb9)), closes [#554](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/554) [#554](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/554) [#548](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/548) [#554](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/554) [#554](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/554) [#554](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/554) [#554](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/554) [#554](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/554) [#554](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/554) [#554](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/554) [#554](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/554) [#554](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/554) [#554](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/554) [#554](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/554) [#554](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/554) [#554](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/554) [#468](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/468)
- **tipografia:** inclui listas simples na documentação ([cba5e48](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/cba5e48044223f596e9be71f68cfc15212fefa38))
- **acessibilidade:** remove conteúdo de acessibilidade repetido ([cd6b5bf](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/cd6b5bfc4bd518df68fcb15eebf429d81ddca860)), closes [#557](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/557)

### :bug: Correções

- **tag:** adiciona estado selecionado e pressionado(active) na tag de interação persistente ([dc4e962](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/dc4e962986ef8944eade001c319bf413e5032df6))
- **datetimepicker:** adiciona input manual com máscara ([b3174aa](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/b3174aaba94690396e64ee7d1a02b868b8073a17))
- **table:** adiciona o classe no-hover para desativar hover ([175e406](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/175e4068042c29728a2381addd81c0c53aa17596))
- ajusta hierarquia do menu padroes/visao geral ([01360c7](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/01360c7e397aa673fc983a32944a201aec288228))
- **o que ha de novo:** altera numero da versao ([0550701](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/05507019f32e2140da49ee9eb8369f9a971665bc))
- **tela de introducao:** corrige ajustes de ortografia ([a30e661](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/a30e661a7634b95904285270f388ccc72b14a8b3))

## [3.2.0](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/compare/v3.1.0...v3.2.0) (28/12/2022)

### :sparkles: Novidades

- **select:** adiciona icone de busca ([45a8ae4](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/45a8ae48866164981dab937cee552322806ce871))

### :memo: Documentação

- **header:** insere exemplos de links no titulo header ([ecf00c1](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/ecf00c118719343f465189d2535c0509bcf47bf1)), closes [#516](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/516)
- **header:** remove link de ancora na diretriz ([a6d4195](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/a6d419567819413f90d27f1fd34585b200d74ec9)), closes [#516](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/516)
- **header:** remove link de ancora ([edefd85](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/edefd85f3f2ec524b5907c6351847c47cd6722bb)), closes [#516](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/516)

### :bug: Correções

- **Carousel Menu Datetimepicker:** altera o icone angle para chevron ([365ee16](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/365ee16d333d50d4ce0459b5be58942ccc869c3f))
- **datepicker:** altera o icone up and down ([740c594](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/740c59442fde8243b971441f4a24c4ef5f6a0859))
- **checkbox:** aplica desativado sem necessitar da classe especifica ([b271929](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/b271929ac1c8e8a0d58f169ca02fbd2988436399))
- compatibiliza html das redes sociais dos componentes menu e footer ([e09f260](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/e09f260d70b888bf03c6dec68961b5e76df7c656))
- **documentos:** correção do links do checkbox e radio ([8499327](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/8499327419b219dad79cca515d17f20cef17a4af))
- **breadcrumb:** corrige alinhamento do icone home ([5f236d1](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/5f236d18ff0cbb46bf9a5433490a6d478f8a157c))
- **menu:** corrige bordas entre sessões de footer ([201c34c](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/201c34cc99e8c9653d6ba44f7245baa3a3a8d278))
- **footer:** corrige cor de fundo da lista de itens ([969b6b0](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/969b6b0069211b22dd6afd2c5bd9af5237f34eb4))
- **menu:** corrige cor do icone e imagens de exemplos na diretriz ([301b2b0](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/301b2b00f1cfe578d93c30b2ff73c5acd52f6b0d)), closes [#513](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/513)
- **header:** corrige distância entre logo e assinatura ([f16347f](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/f16347f4c58c3afe78abe54a9b6c6a87b951cc3b))
- **item:** corrige estado focus-visible ([c461636](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/c461636adab073dbbb042681875570c97aa3d29f))
- **menu:** corrige icone de angle para chevron down no menu e exemplos ([031a1ab](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/031a1ab58a33098398d7297740b081645a6d2bd5)), closes [#509](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/509)
- **componentes:** corrige icone de angle para chevron em carousel e date ([6590d47](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/6590d47621f881d7e7a322df4b102d64c59b932a)), closes [#495](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/495)
- **footer:** corrige nome de variavel na logo ([158bdfc](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/158bdfcde85c402b15023c1b7e88930decc72b77))
- **button:** corrige nomenclatura de densidade ([31ba003](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/31ba003fcaf5c04483606534d4b41462f2436324)), closes [#507](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/507)
- **padraominimo:** corrige zindex de imagens sobre menu em padrao minimo ([be7ec12](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/be7ec1208c532568e2eef288071b78ffd76010cb)), closes [#337](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/337) [#337](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/337)
- **item:** insere background branco no componente ([2c37da0](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/2c37da0841aef3899fddd4d8c66e7629962143d0)), closes [#505](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/505) [#505](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/issues/505)
- **pagination:** remove ícone de busca da lista de seleção de páginas ([9288442](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/92884425b2e027052330e332f87f5ed336fe688e))
- **datepicker:** retira referencia angle-up ([6c27181](https://gitlab.com/govbr-ds/govbr-ds-dev/govbr-ds-dev-core/commit/6c2718178a59b73c3bb738fc55003d6a19cbd571))
