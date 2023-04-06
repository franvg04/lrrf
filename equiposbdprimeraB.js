function leaderboard() {
    var leaderboard = document.getElementById('leaderboard');
    var tbody = leaderboard.querySelector('tbody');
    var tbodyHtml = '';
  
    var argentinoColonial = {
        logo: "escudosB/argentino-colonial.png",
        nombre: "Argentino Colonial",
        pts: 9,
        pj: 3,
        pg: 3,
        pe: 0,
        pp: 0,
        gf: 11,
        gc: 3,
        dif: +8,
        difStr: "+8"
    };
    var atleticoAlmafuerte = {
        logo: "escudosB/atletico-almafuerte.png",
        nombre: "Atl. Almafuerte",
        pts: 1,
        pj: 3,
        pg: 0,
        pe: 1,
        pp: 2,
        gf: 0,
        gc: 2,
        dif: -2,
        difStr: "-2"
    };
    var atleticoUnionPampayasta = {
        logo: "escudosB/atletico-union-pampayasta.png",
        nombre: "Atl. Union Pampayasta",
        pts: 3,
        pj: 3,
        pg: 1,
        pe: 0,
        pp: 2,
        gf: 2,
        gc: 8,
        dif: -6,
        difStr: "-6"
    };
    var culturalUnion = {
        logo: "escudosB/cultural-union.png",
        nombre: "Cultural Union",
        pts: 6,
        pj: 2,
        pg: 2,
        pe: 0,
        pp: 0,
        gf: 6,
        gc: 2,
        dif: +4,
        difStr: "+4"
    };
    var deportivoCasino = {
        logo: "escudosB/Deportivo-Casino.png",
        nombre: "Deportivo Casino",
        pts: 4,
        pj: 3,
        pg: 1,
        pe: 1,
        pp: 1,
        gf: 5,
        gc: 3,
        dif: +2,
        difStr: "+2"
    };
    var depVillaDelDique = {
        logo: "escudosB/deportivo-villa-del-dique.png",
        nombre: "Dep. Villa del Dique",
        pts: 4,
        pj: 2,
        pg: 1,
        pe: 1,
        pp: 0,
        gf: 4,
        gc: 1,
        dif: +3,
        difStr: "+3"
    };
    var juventudAlianza = {
        logo: "escudosB/juventud-alianza.png",
        nombre: "Juventud Alianza",
        pts: 4,
        pj: 3,
        pg: 1,
        pe: 1,
        pp: 1,
        gf: 4,
        gc: 4,
        dif: 0,
        difStr: "0"
    };
    var juventudUnida = {
        logo: "escudosB/juventud-unida.png",
        nombre: "Juventud Unida",
        pts: 3,
        pj: 2,
        pg: 1,
        pe: 0,
        pp: 1,
        gf: 5,
        gc: 7,
        dif: -2,
        difStr: "-2"
    };
    var libertadHernando = {
        logo: "escudosB/libertad-hernando.png",
        nombre: "Deportivo Libertad",
        pts: 0,
        pj: 2,
        pg: 0,
        pe: 0,
        pp: 2,
        gf: 3,
        gc: 5,
        dif: -2,
        difStr: "-2"
    };
    var socialVgb = {
        logo: "escudosB/socialvgb.png",
        nombre: "S. y D. Villa G. Belgrano",
        pts: 7,
        pj: 3,
        pg: 3,
        pe: 0,
        pp: 0,
        gf: 3,
        gc: 1,
        dif: +2,
        difStr: "+2"
    };
    var sportivoAlmada = {
        logo: "escudosB/sportivo-almada.png",
        nombre: "Sportivo Almada",
        pts: 0,
        pj: 2,
        pg: 0,
        pe: 0,
        pp: 2,
        gf: 3,
        gc: 8,
        dif: -5,
        difStr: "-5"
    };
    var sportivoLaCruz = {
        logo: "escudosB/Sportivo-La-Cruz-1.png",
        nombre: "Sp. La Cruz",
        pts: 0,
        pj: 2,
        pg: 0,
        pe: 0,
        pp: 2,
        gf: 1,
        gc: 7,
        dif: -6,
        difStr: "-6"
    };
    var talleresBerrotaran = {
        logo: "escudosB/talleres-berrotaran.png",
        nombre: "Talleres",
        pts: 4,
        pj: 2,
        pg: 1,
        pe: 1,
        pp: 0,
        gf: 4,
        gc: 0,
        dif: +4,
        difStr: "+4"
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
