document.querySelector("#btn").onclick = function () {

    let inputVal = $("#input").val();


    $.ajax({
        url: "https://fortnite.y3n.co/v2/player/" + inputVal,
        dataType: "json",
        headers: {
            "X-key": "DoPtQoEN2CAzYfyHhqJW"
        },
        success: function (data) {

            console.log(data);
            console.log(data.br.stats.ps4.all);
            $("#data-div").animate({
                opacity: "1"
            }, 500);
            $("#display-name").html("<img src='flag.png' class='flag'> " + data.displayName);
            $("#kd").html("<span class='labels'>K/D:</span> " + data.br.stats.ps4.all.kpd);



            $("#kills").html("<span class='labels'>Kills: </span> " + data.br.stats.ps4.all.kills);
            $("#deaths").html("<span class='labels'>Deaths: </span> " + data.br.stats.ps4.all.deaths);
            $("#played").html("<span class='labels'>Matches Played: </span> " + data.br.stats.ps4.all.matchesPlayed);
            $("#won").html("<span class='labels'>Matches Won: </span>" + data.br.stats.ps4.all.wins);
            $("#score").html("<span class='labels'>Score: </span>" + data.br.stats.ps4.all.score);

        }
    });
}
