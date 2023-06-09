function leaderboard() {
    var leaderboard = document.getElementById('leaderboard');
    var tbody = leaderboard.querySelector('tbody');
    var tbodyHtml = '';
  
    var deportivoItaliano = {
        logo: "images/deportivo-italiano.png",
        nombre: "Deportivo Italiano",
        pts: 5+3+3+1+3+1+3,
        pj: 14,
        pg: 5,
        pe: 4,
        pp: 5,
        gf: 4+3+2+2+2+2+1,
        gc: 3+1+1+2+1+2+2+2,
        dif: +2,
        difStr: "+2"
    };
    var atleticoEstudiantes = {
        logo: "images/estudiantes-hernando.png",
        nombre: "Atl. Estudiantes",
        pts: 3+3+3+3+3+3+3+3+3+1+1+3,
        pj: 14,
        pg: 10,
        pe: 2,
        pp: 2,
        gf: 3+2+2+4+1+2+1+1+1,
        gc: 3+1+1,
        dif: +12,
        difStr: "+12"
    };
    var atleticoRioTercero = {
        logo: "images/atletico-Rio-Tercero.png",
        nombre: "Atl. Rio Tercero",
        pts: 6+1+3+3+1+3+1+1+1+3+3+3,
        pj: 14,
        pg: 8,
        pe: 5,
        pp: 1,
        gf: 3+1+2+3+3+2+3+2+3,
        gc: 2+1+2+2+2+1,
        dif: +12,
        difStr: "+12"
    };
    var atleticoIndependiente = {
        logo: "images/independiente-Hernando.png",
        nombre: "Atl. Independiente",
        pts: 1+3+3+1+1,
        pj: 14,
        pg: 2,
        pe: 3,
        pp: 9,
        gf: 2+1+1+2,
        gc: 11+1+3+2+1+2+1+1,
        dif: -16,
        difStr: "-16"
    };
    var atleticoAscasubi = {
        logo: "images/ascasubi.png",
        nombre: "Atlético Ascasubi",
        pts: 1+1+1+3+1+3+1,
        pj: 14,
        pg: 2,
        pe: 5,
        pp: 7,
        gf: 1+2+1+1+1+1+1+2,
        gc: 7+3+3+2+1+1+1+1+2+2,
        dif: -12,
        difStr: "-12"
    };
    var belgranoFC = {
        logo: "images/belgranoFC.png",
        nombre: "Belgrano FC",
        pts: 7+1+3+3+3+3+3+1+1,
        pj: 14,
        pg: 7,
        pe: 4,
        pp: 3,
        gf: 5+1+3+1+2+2+2+3+2+1+2,
        gc: 4+1+4+1+2+2+4+2,
        dif: +4,
        difStr: "+4"
    };
    var agrario = {
        logo: "images/agrario-corralito.png",
        nombre: "Centro Juv. Agrario",
        pts: 4+1+1+1+1+1+1+3,
        pj: 14,
        pg: 2,
        pe: 7,
        pp: 5,
        gf: 1+1+1+1+1+1+1,
        gc: 9+1+1+2+3+2+1,
        dif: -12,
        difStr: "-12"
    };
    var deportivoHuracan = {
        logo: "images/huracan.png",
        nombre: "Deportivo Huracan",
        pts: 2+1+1+1+1+3,
        pj: 14,
        pg: 1,
        pe: 6,
        pp: 7,
        gf: 1+1+1+1+1+1+1,
        gc: 2+1+2+4+1+2+1+2+2+4,
        dif: -14,
        difStr: "-14"
    };
    var deportivoIndependiente = {
        logo: "images/dep-independiente.png",
        nombre: "Dep. Independiente",
        pts: 6+3+3+1+3+1+1+3+3,
        pj: 14,
        pg: 7,
        pe: 3,
        pp: 4,
        gf: 5+3+4+2+1+2+2+2,
        gc: 1+1+2+3+1+1+1+3+2+1,
        dif: +5,
        difStr: "+5"
    };
    var fitzSimon = {
        logo: "images/fitz-simon.png",
        nombre: "Fitz Simon",
        pts: 5+3+3+3+3+3+3+3+1,
        pj: 14,
        pg: 8,
        pe: 3,
        pp: 3,
        gf: 1+1+2+3+2+3+2+2+4+1,
        gc: 1+1+1+1+3+3+1,
        dif: +9,
        difStr: "+9"
    };
    var nauticoRumipal = {
        logo: "images/nautico.png",
        nombre: "Náutico Rumipal",
        pts: 1+3+1+1+1,
        pj: 14,
        pg: 1,
        pe: 4,
        pp: 8,
        gf: 2+1+1+1+2+1+2+2+1,
        gc: 7+2+1+1+2+1+1+2+2+4+1,
        dif: -11,
        difStr: "-11"
    };
    var recreativoElenense = {
        logo: "images/elenense.png",
        nombre: "Recreativo Elenense",
        pts: 10+1+1+1+3,
        pj: 14,
        pg: 4,
        pe: 4,
        pp: 6,
        gf: 13+1+2+2+1+1+2+1+4,
        gc: 4+2+2+2+3+2+1+3+2,
        dif: +6,
        difStr: "+6"
    };
    var nueveDeJulio = {
        logo: "images/sportivo-9-de-julio.png",
        nombre: "Sp. 9 de Julio",
        pts: 7+3+1+3+3+1+3+3,
        pj: 14,
        pg: 7,
        pe: 3,
        pp: 4,
        gf: 8+3+1+4+1+3+2+2+1,
        gc: 1+1+3+1+2+2+2+2+1+2,
        dif: +8,
        difStr: "+8"
    };
    var sportivoBelgrano = {
        logo: "images/sportivo-belgrano.png",
        nombre: "Sportivo Belgrano",
        pts: 7+1+1+1+3+3,
        pj: 14,
        pg: 4,
        pe: 4,
        pp: 6,
        gf: 8+1+1+1+1+2+2+2,
        gc: 4+1+2+1+1+2+3+2+1+1,
        dif: 0,
        difStr: "0"
    };
    var udcisa = {
        logo: "images/udcisa.png",
        nombre: "U.D.C.I.S.A",
        pts: 3+1+3+1+1+1+1+3+1,
        pj: 14,
        pg: 3,
        pe: 6,
        pp: 5,
        gf: 3+1+2+2+1+1+1+1,
        gc: 4+1+1+4+2+1+1+1,
        dif: -3,
        difStr: "-3"
    };
    var vecinosUnidos = {
        logo: "images/vecinos-unidos.png",
        nombre: "Vecinos Unidos",
        pts: 9+1+3+3+3+3+3+3,
        pj: 14,
        pg: 9,
        pe: 1,
        pp: 4,
        gf: 5+1+1+1+2+2+2+3+3+4,
        gc: 1+3+1+2+1+1+1+3,
        dif: +11,
        difStr: "+11"
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
