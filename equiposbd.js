function leaderboard() {
    var leaderboard = document.getElementById('leaderboard');
    var tbody = leaderboard.querySelector('tbody');
    var tbodyHtml = '';
  
    var deportivoItaliano = {
        logo: "images/deportivo-italiano.png",
        nombre: "Deportivo Italiano",
        pts: 7+1+1,
        pj: 6,
        pg: 2,
        pe: 3,
        pp: 1,
        gf: 4+1,
        gc: 1+1+1,
        dif: +2,
        difStr: "+2"
    };
    var atleticoEstudiantes = {
        logo: "images/estudiantes-hernando.png",
        nombre: "Atl. Estudiantes",
        pts: 6+3+1,
        pj: 6,
        pg: 3,
        pe: 1,
        pp: 1,
        gf: 6+3+2,
        gc: 2+2,
        dif: +4+3,
        difStr: "+7"
    };
    var atleticoRioTercero = {
        logo: "images/atletico-Rio-Tercero.png",
        nombre: "Atl. Rio Tercero",
        pts: 6+3,
        pj: 5,
        pg: 3,
        pe: 0,
        pp: 2,
        gf: 6+3+1,
        gc: 4+2+2,
        dif: +2,
        difStr: "+2"
    };
    var atleticoIndependiente = {
        logo: "images/independiente-Hernando.png",
        nombre: "Atl. Independiente",
        pts: 7,
        pj: 5,
        pg: 2,
        pe: 1,
        pp: 2,
        gf: 4+1,
        gc: 5+1,
        dif: -1,
        difStr: "-1"
    };
    var atleticoAscasubi = {
        logo: "images/ascasubi.png",
        nombre: "Atlético Ascasubi",
        pts: 3+1,
        pj: 5,
        pg: 1,
        pe: 1,
        pp: 4,
        gf: 1,
        gc: 3+2,
        dif: -4,
        difStr: "-4"
    };
    var belgranoFC = {
        logo: "images/belgranoFC.png",
        nombre: "Belgrano FC",
        pts: 5,
        pj: 6,
        pg: 1,
        pe: 2,
        pp: 3,
        gf: 2+1+2,
        gc: 1+3+1+3,
        dif: -3,
        difStr: "-3"
    };
    var agrario = {
        logo: "images/agrario-corralito.png",
        nombre: "Centro Juv. Agrario",
        pts: 9+3,
        pj: 5,
        pg: 4,
        pe: 0,
        pp: 1,
        gf: 4+4+1,
        gc: 3,
        dif: +1+4+1,
        difStr: "+6"
    };
    var deportivoHuracan = {
        logo: "images/huracan.png",
        nombre: "Deportivo Huracan",
        pts: 1+3,
        pj: 5,
        pg: 1,
        pe: 1,
        pp: 3,
        gf: 1+2+1,
        gc: 3+3,
        dif: -2,
        difStr: "-2"
    };
    var deportivoIndependiente = {
        logo: "images/dep-independiente.png",
        nombre: "Dep. Independiente",
        pts: 3+3+3,
        pj: 6,
        pg: 3,
        pe: 0,
        pp: 3,
        gf: 3+2+3,
        gc: 3+1+1+2,
        dif: +1,
        difStr: "+1"
    };
    var fitzSimon = {
        logo: "images/fitz-simon.png",
        nombre: "Fitz Simon",
        pts: 8+1,
        pj: 5,
        pg: 2,
        pe: 3,
        pp: 0,
        gf: 3+1+1,
        gc: 1+1+1,
        dif: +2,
        difStr: "+2"
    };
    var nauticoRumipal = {
        logo: "images/nautico.png",
        nombre: "Náutico Rumipal",
        pts: 1+1,
        pj: 5,
        pg: 0,
        pe: 2,
        pp: 3,
        gf: 2+2,
        gc: 5+4+2,
        dif: -7,
        difStr: "-7"
    };
    var recreativoElenense = {
        logo: "images/elenense.png",
        nombre: "Recreativo Elenense",
        pts: 3+1,
        pj: 5,
        pg: 1,
        pe: 1,
        pp: 3,
        gf: 1+1,
        gc: 2+1+1,
        dif: -2,
        difStr: "-2"
    };
    var nueveDeJulio = {
        logo: "images/sportivo-9-de-julio.png",
        nombre: "Sp. 9 de Julio",
        pts: 7,
        pj: 5,
        pg: 2,
        pe: 1,
        pp: 2,
        gf: 5+2+1,
        gc: 5+2,
        dif: +1,
        difStr: "+1"
    };
    var sportivoBelgrano = {
        logo: "images/sportivo-belgrano.png",
        nombre: "Sportivo Belgrano",
        pts: 3+3+3+3,
        pj: 6,
        pg: 4,
        pe: 0,
        pp: 2,
        gf: 2+3+3+2,
        gc: 5+1+1+1,
        dif: +2,
        difStr: "+2"
    };
    var udcisa = {
        logo: "images/udcisa.png",
        nombre: "U.D.C.I.S.A",
        pts: 4,
        pj: 5,
        pg: 1,
        pe: 1,
        pp: 3,
        gf: 4+1,
        gc: 4+3+3,
        dif: -3-2,
        difStr: "-5"
    };
    var vecinosUnidos = {
        logo: "images/vecinos-unidos.png",
        nombre: "Vecinos Unidos",
        pts: 4+3+3+3,
        pj: 6,
        pg: 4,
        pe: 1,
        pp: 1,
        gf: 4+1+3+1,
        gc: 5+2,
        dif: +2,
        difStr: "+2"
    };
  
    var players = [
      deportivoItaliano,
      atleticoAscasubi,
      atleticoEstudiantes,
      atleticoIndependiente,
      atleticoRioTercero,
      deportivoHuracan,
      deportivoIndependiente,
      udcisa,
      belgranoFC,
      sportivoBelgrano,
      nauticoRumipal,
      nueveDeJulio,
      fitzSimon,
      agrario,
      vecinosUnidos,
      recreativoElenense

    ]; 

    
    players.sort(function(a,b) {
        if(b.pts === a.pts){
            if (Number(b.dif) === Number(a.dif)) {
                return Number((b.gf) - Number(a.gf)) 
            } else {
                return Number((b.dif) - Number(a.dif))
            }
        } else{
          return Number((b.pts) - Number(a.pts))
        }  
    });
    
    for (var player of players) {
        index = (players.indexOf(player)+1)
        tbodyHtml += '<tr><td class="posicion">'+ index + '</td><td width="35px" align="center">'+ '<img src=' + player.logo + ' alt="" align="center" width="30px" height="30px">' + '</td><td>' + player.nombre + '</td><td class="center-stats" style="font-weight: 1000;">' + player.pts + '</td><td class="center-stats">' + player.pj + '</td><td class="center-stats">' + player.pg + '</td><td class="center-stats">' + player.pe + '</td><td class="center-stats">' + player.pp + '</td><td class="center-stats">' + player.gf + '</td><td class="center-stats">' + player.gc +'</td><td class="center-stats" id="difGoles">' + player.difStr +'</td></tr>';

    }
    
    tbody.innerHTML = tbodyHtml;
  }
  
  leaderboard();
