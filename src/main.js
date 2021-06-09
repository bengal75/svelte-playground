import App from "./App.svelte";
import { playlists } from "./playlists";

const app = new App({
  target: document.body,
  props: {
    playlists: playlists,
  },
});

export default app;
