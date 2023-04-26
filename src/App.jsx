import Album from "./components/album/Album";
import img from "./components/album/images.jpeg";
function App() {
  return (
    <>
      <Album
        imagen={img}
        titulo="Under the Grave"
        artista="Rozes"
        year="2016"
      />
    </>
  );
}

export default App;
