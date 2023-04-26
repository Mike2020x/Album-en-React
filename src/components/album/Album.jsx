import { useState } from "react";
export default function Album({ imagen, titulo, artista }) {
  const [active, setActive] = useState(false);
  return (
    <div className="album">
      <div className="card_img">
        <img src={imagen} alt="" />
      </div>
      <div className="card_info">
        <h1 className="card_info_artist">{artista}</h1>
        <p>solista</p>
        <h3 className="card_info_title">{titulo}</h3>
        <span className="card_info_year">(2016)</span>
        <div className="card_info_gender">
          <span className="gender">dance</span>
          <button
            className={`heart-button ${active ? "active" : ""}  `}
            onClick={() => setActive(!active)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="heart"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                className="heart"
                d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
