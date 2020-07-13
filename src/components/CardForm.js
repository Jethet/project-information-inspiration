import React from "react";

function CardForm(props) {
  return (
    <div className="create-card-page">
      <div className="create-card-container">
        <div id="card-header">
          <h1>Create a new card</h1>
        </div>
        <div className="card-form">
          <form onSubmit={this.handleSubmit}>
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
                  value={this.state.cardTitle || ""}
                  onChange={this.handleChange}
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
                  value={this.state.cardDescription || ""}
                  onChange={this.handleChange}
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
                  value={this.state.searchTags || ""}
                  onChange={this.handleChange}
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
                  value={this.state.dateCreated || ""}
                  onChange={this.handleChange}
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
