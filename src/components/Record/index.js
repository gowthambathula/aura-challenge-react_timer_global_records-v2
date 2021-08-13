// Globals
import "./styles.scss";
import React from "react";

// Misc
import PropTypes from "prop-types";

// Component
function Record({ data }) {
  return (
    <div className="aura-record">
      <div className="aura-record-ranking">{data.id}.</div>
      <div className="aura-record-image-container">
        <img className="aura-record-image" src={data.album.imageSrc} />
      </div>
      <div className="aura-record-details-container">
        <div className="aura-record-details-record">{data.album.title}</div>{" "}
        <div className="aura-record-details-artist">{data.artist.name}</div>
      </div>
    </div>
  );
}

Record.propTypes = {
  data: PropTypes.shape({
    album: PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
    artist: PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export { Record };
