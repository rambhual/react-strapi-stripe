import React from "react";

export const NewsList = ({
  author,
  content,
  description,
  publishedAt,
  urlToImage
}) => {
  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={urlToImage} alt="Placeholder image" />>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={urlToImage} alt="Placeholder image" />>
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{author}</p>
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <div className="content">
            {content.substr(0, 200).concat(` More...`)}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
