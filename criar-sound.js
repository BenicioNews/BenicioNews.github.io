const fs=require("fs");
const index_do_sounds="index-do-sounds.html";

var sound=getElementById("audio");
var titulo=getElementById("titulo");
var tituloid=titulo.replace(/\s+/g, '');
const botao=`<div style="text-decoration:none; -webkit-tap-highlight-color: transparent;width:49%"><audio id="${tituloid}"> <source src='${sound}' type='audio/mpeg'></audio>
  <button onclick="const ${tituloid}=getElementById('${tituloid}')
 if (${tituloid}.paused) {
      ${tituloid}.play();
    } else {
      ${tituloid}.pause();
    }
;"    
    onmousedown="this.style.setProperty('--escala', '0.7'); this.style.setProperty('--brilho', '0.7');" 
    onmouseup="this.style.setProperty('--escala', '1'); this.style.setProperty('--brilho', '1');" 
    onmouseleave="this.style.setProperty('--escala', '1'); this.style.setProperty('--brilho', '1');"
    onmouseenter="this.style.setProperty('--escala', '1');"
    ontouchstart="this.style.setProperty('--escala', '0.7'); this.style.setProperty('--brilho', '0.7');"
    ontouchend="this.style.setProperty('--escala', '1'); this.style.setProperty('--brilho', '1');"
    style="
      background: transparent; 
      border: none; 
      padding: 0; 
      cursor: pointer; 
      outline: none; 
      -webkit-tap-highlight-color: transparent;
      --escala: 1;
      --brilho: 1;      
      transform: scale(var(--escala)) !important;
      filter: brightness(var(--brilho)) !important;
      transition: transform 0.1s ease-in-out, filter 0.1s ease-in-out !important;
    "

><img src="botão.png" width="400px"></img></button><br><a href="${tituloid}.html" style="text-decoration:none;-webkit-tap-highlight-color: transparent"><b style="font-size:45px;color:black">${titulo}</b></a></div>`
fs.readFile(index_do_sounds, 'utf8', (err, html) => {
    if (err) throw err;

    const htmlModificado = html.replace('</body>', `${botao}\n</body>`);

    fs.writeFile(caminhoArquivo, htmlModificado, 'utf8', (err) => {
        if (err) throw err;
        console.log('Botão personalizado criado e adicionado com sucesso!');
    });
const nomeDoArquivo = "${tituloid}"+".html"
const conteudo = `<!DOCTYPE html>

<html lang="pt">
<head>
  <meta name="description"content="Audios feitos pelos benicios">
  <meta name="viewport">
  <meta name="robots">
  <meta charset="UTF-8">
  <meta http-competitive="X-UA-Compatible" content="IE=edge">
  <meta name="format-detection">
  <meta name="author" content="Jimmy Neutron da Shopee">
  <meta name="keywords" content="BenicioNews,benicio meme">
  <link rel="apple-touch-icon" sizes="180x180" href="../Benicio.png">
  <link rel="icon" type="image/png" sizes="192x192" href="../Benicio.png">
  <link rel="icon" type="image/png" sizes="32x32" href="../Benicio.png">

  <title>BenicioSounds</title>
</head>
<body>
  <div style="background-color: orange; width: 100%; height: 100px;margin=0;padding:20px 0;">
  <a href="index-do-sounds.html" style="-webkit-tap-highlight-color: transparent"><img src="../Benicio.jpg" width="80px" alt="Benicio"></a>
  <a href="index-do-sounds.html" style="text-decoration:none;-webkit-tap-highlight-color: transparent"><b style="font-size:64px;color:black">BenicioSounds</b></a>
  </div>
  <br><br><br>
  <h1 style="font-size:100px">${titulo}</h1>
  <div style="text-align:center;text-decoration:none; -webkit-tap-highlight-color: transparent"><audio id="${tituloid}"> <source src='${sound}' type='audio/mpeg'></audio>
  <button onclick="const ${tituloud}=getElementById('${tituloid}')
 if (${tituloid}.paused) {
      ${tituloid}.play();
    } else {
      ${tituloid}.pause();
    }
;"    
    onmousedown="this.style.setProperty('--escala', '0.7'); this.style.setProperty('--brilho', '0.7');" 
    onmouseup="this.style.setProperty('--escala', '1.0'); this.style.setProperty('--brilho', '1');" 
    onmouseleave="this.style.setProperty('--escala', '1'); this.style.setProperty('--brilho', '1');"
    onmouseenter="this.style.setProperty('--escala', '1.0');"
    ontouchstart="this.style.setProperty('--escala', '0.7'); this.style.setProperty('--brilho', '0.7');"
    ontouchend="this.style.setProperty('--escala', '1'); this.style.setProperty('--brilho', '1');"
    style="
      background: transparent; 
      border: none; 
      padding: 0; 
      cursor: pointer; 
      outline: none; 
      -webkit-tap-highlight-color: transparent;
      --escala: 1;
      --brilho: 1;      
      transform: scale(var(--escala)) !important;
      filter: brightness(var(--brilho)) !important;
      transition: transform 0.1s ease-in-out, filter 0.1s ease-in-out !important;
    "

><img src="botão.png" width="600px"></img></button></div>
</body>
</html>
`;
fs.writeFile(nomeDoArquivo, conteudoHTML, (err) => {
    if (err) throw err;
    console.log(`Sucesso! O arquivo "${nomeDoArquivo}" foi criado.`);
});