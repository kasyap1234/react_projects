function AnimeCard({ anime }) {
  return (
    <article className="anime--card">
      <a href="">
        <figure>
          <img src={anime.image_url} alt="Anime Image" />
        </figure>
        <h3 className="anime--title">{anime.title} </h3>
      </a>
    </article>
  );
}
export default AnimeCard;
