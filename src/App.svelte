<script>
	export let playlists;
	const randomPlaylist = playlists[Math.floor(Math.random() * playlists.length)];
	setTimeout(()=>{
		window.location.href = `https://www.youtube.com/playlist?list=${randomPlaylist}`
	}, 2000);
</script>

<main>
	<h1>Selecting 1 of {playlists.length} playlists...</h1>
</main>

<style>
	main {
		box-sizing: border-box;
		text-align: center;
		padding: 1em;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h1 {
		color: hsl(180deg 50% 35%);
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;

		animation-duration: 3s;
		animation-name: pulse;
		animation-iteration-count: infinite;
		animation-direction: alternate;
	}
	@keyframes pulse {
		from {
			transform: scale(1);
			opacity: 1;
		}
		to {
			transform: scale(3);
			opacity: 0.3;
		}
	}
</style>