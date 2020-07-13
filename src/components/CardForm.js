import React from "react";

function CardForm(props) {
  return (
    <div className="create-card-page">
      <div className="create-card-container">
        <div id="card-header">
          <h1>Create a new card</h1>
        </div>
        <div className="card-form">
          <form onSubmit={props.handleSubmit}>
            <div className="form-group">
              <label htmlFor="cardTitle">
                Card title:
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter card title"
                  // required
                  autoComplete="off"
                  name="cardTitle"
                  value={props.cardTitle || ""}
                  onChange={props.handleChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="cardDescription">
                Card description:
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter card description"
                  // required
                  autoComplete="off"
                  name="cardDescription"
                  value={props.cardDescription || ""}
                  onChange={props.handleChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="searchTags">
                Search tags:
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter search tags separated by commas"
                  // required
                  autoComplete="off"
                  name="searchTags"
                  value={props.searchTags || ""}
                  onChange={props.handleChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="dateCreated" className="category-form-label">
                Date created:
                <input
                  className="form-control"
                  type="date"
                  name="dateCreated"
                  // required
                  value={props.dateCreated || ""}
                  onChange={props.handleChange}
                />
              </label>
            </div>
            <button type="submit" className="create-button">
              Create new card
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CardForm;
