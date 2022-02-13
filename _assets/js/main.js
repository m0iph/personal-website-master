function gS() {
	$.getJSON("https://api.lanyard.rest/v1/users/942073146041843712", data => {
		data = data.data;
		if (data.listening_to_spotify) {
			$("#spotify").html(
				`<a class="noAStyle" target="_blank" href="https://open.spotify.com/track/${data.spotify.track_id}"><b>${data.spotify.song}</b> by <i>${data.spotify.artist}</i></a> on <b><a target="_blank" class="noAStyle" href="https://spotify.gg/">Spotify</a></b>`
			);
		} else {
			$("#spotify").html("Not listening to anything");
		}
		if (data.active_on_discord_mobile && !data.active_on_discord_desktop) {
			$("#status").css("color", "#F2A6AB");
		} else if (data.active_on_discord_desktop) {
			$("#status").css("color", "#abffbf");
		} else {
			$("#status").css("color", "#d4d4d4");
		}
	});
}

gS();

setInterval(gS, 5000);
