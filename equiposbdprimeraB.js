function leaderboard() {
    var leaderboard = document.getElementById('leaderboard');
    var tbody = leaderboard.querySelector('tbody');
    var tbodyHtml = '';
  
    var argentinoColonial = {
        logo: "escudosB/argentino-colonial.png",
        nombre: "Argentino Colonial",
        pts: 9+1+1+3+3,
        pj: 10,
        pg: 5,
        pe: 2,
        pp: 3,
        gf: 11+2+2+2,
        gc: 3+3+2+1+3,
        dif: +5,
        difStr: "+5"
    };
    var atleticoAlmafuerte = {
        logo: "escudosB/atletico-almafuerte.png",
        nombre: "Atl. Almafuerte",
        pts: 1+3+3,
        pj: 9,
        pg: 2,
        pe: 1,
        pp: 6,
        gf: 2+3+1+1+1,
        gc: 2+1+1+3+2+2+3,
        dif: -6,
        difStr: "-6"
    };
    var atleticoUnionPampayasta = {
        logo: "escudosB/atletico-union-pampayasta.png",
        nombre: "Atl. Union Pampayasta",
        pts: 3+1+3,
        pj: 9,
        pg: 2,
        pe: 1,
        pp: 6,
        gf: 2+1+1+1,
        gc: 8+2+1+1+2,
        dif: -9,
        difStr: "-9"
    };
    var culturalUnion = {
        logo: "escudosB/cultural-union.png",
        nombre: "Cultural Union",
        pts: 6+3+3+3,
        pj: 9,
        pg: 5,
        pe: 0,
        pp: 4,
        gf: 6+2+3+1+3,
        gc: 2+3+2+4+1+1,
        dif: +2,
        difStr: "+2"
    };
    var deportivoCasino = {
        logo: "escudosB/Deportivo-Casino.png",
        nombre: "Deportivo Casino",
        pts: 4+1+1+1+3+1,
        pj: 10,
        pg: 2,
        pe: 5,
        pp: 3,
        gf: 5+3+1+1+1+3+2,
        gc: 3+3+3+3+1+1+2,
        dif: 0,
        difStr: "0"
    };
    var depVillaDelDique = {
        logo: "escudosB/deportivo-villa-del-dique.png",
        nombre: "Dep. Villa del Dique",
        pts: 4+3+3+3,
        pj: 9,
        pg: 4,
        pe: 1,
        pp: 4,
        gf: 4+1+2+1+2+4,
        gc: 1+4+3+1+1+3+2,
        dif: +3,
        difStr: "+3"
    };
    var juventudAlianza = {
        logo: "escudosB/juventud-alianza.png",
        nombre: "Juventud Alianza",
        pts: 4+3+3+3+3,
        pj: 9,
        pg: 5,
        pe: 1,
        pp: 3,
        gf: 4+4+3+2+2+1,
        gc: 4+1+2+1+2,
        dif: +6,
        difStr: "+6"
    };
    var juventudUnida = {
        logo: "escudosB/juventud-unida.png",
        nombre: "Juventud Unida",
        pts: 3+3+1+1,
        pj: 8,
        pg: 2,
        pe: 2,
        pp: 4,
        gf: 5+1+1+2,
        gc: 7+2+1+2+1+3,
        dif: -7,
        difStr: "-7"
    };
    var libertadHernando = {
        logo: "escudosB/libertad-hernando.png",
        nombre: "Deportivo Libertad",
        pts: 0+3+3+1+3,
        pj: 8,
        pg: 3,
        pe: 1,
        pp: 4,
        gf: 3+1+1+3+1+1+3,
        gc: 5+1+4+2,
        dif: -3,
        difStr: "-3"
    };
    var socialVgb = {
        logo: "escudosB/socialvgb.png",
        nombre: "S. y D. Villa G. Belgrano",
        pts: 7+1+3+3+3+3+1,
        pj: 9,
        pg: 6,
        pe: 3,
        pp: 0,
        gf: 3+2+2+3+1+2,
        gc: 1+1+2+2,
        dif: +3+2+1+1,
        difStr: "+7"
    };
    var sportivoAlmada = {
        logo: "escudosB/sportivo-almada.png",
        nombre: "Sportivo Almada",
        pts: 1+3,
        pj: 9,
        pg: 1,
        pe: 1,
        pp: 7,
        gf: 3+3+1+1+2,
        gc: 8+3+2+1+2+3+2+1,
        dif: -12,
        difStr: "-12"
    };
    var sportivoLaCruz = {
        logo: "escudosB/Sportivo-La-Cruz-1.png",
        nombre: "Sp. La Cruz",
        pts: 3+3+3+1+3,
        pj: 9,
        pg: 4,
        pe: 1,
        pp: 4,
        gf: 4+2+3+1+2+2,
        gc: 7+1+1+3+1+1,
        dif: 0,
        difStr: "0"
    };
    var talleresBerrotaran = {
        logo: "escudosB/talleres-berrotaran.png",
        nombre: "Talleres",
        pts: 4+3+3+3+3+3+3,
        pj: 8,
        pg: 7,
        pe: 1,
        pp: 0,
        gf: 4+4+3+3+3+1+3,
        gc: 1+2+1,
        dif: +17,
        difStr: "+17"
    };
    
  
    var players = [
      argentinoColonial,
      atleticoAlmafuerte,
      atleticoUnionPampayasta,
      culturalUnion,
      deportivoCasino,
      depVillaDelDique,
      juventudAlianza,
      juventudUnida,
      libertadHernando,
      socialVgb,
      sportivoAlmada,
      sportivoLaCruz,
      talleresBerrotaran,

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
