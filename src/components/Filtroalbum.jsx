export const Filtroalbum = ({ album, setAlbum }) => {
  return (
    <div className="username3">
        <label>Album</label>
        <select value={album} onChange={(e) => setAlbum(e.target.value)}>
          <option value="">Choose Your Favorite Album</option>
          <option value="HopeWorld">Hope World</option>
          <option value="JackInTheBox">Jack In The Box</option>
          <option value="JackInTheBoxHOPEEdition">
            Jack In The Box (HOPE Edition)
          </option>
        </select>
    </div>
  );
};
