import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton({ onToggleFavorite, isFavorite, id }) {
  // const [isFavorite, setIsFavorite] = useState(false);
  return (
    <button
      className="favorite-button"
      onClick={() => {
        onToggleFavorite({ id });
        // setIsFavorite(!isFavorite);
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
