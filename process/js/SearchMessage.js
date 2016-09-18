var React = require('react'); 

var SearchMessages = React.createClass({

  handleSort: function(e) {
    this.props.onReOrder(e.target.id, this.props.orderDir);
  }, //handleSort

  handleOrder: function(e) {
    this.props.onReOrder(this.props.orderBy, e.target.id);
  }, //handleSort

  handleSearch: function(e) {
    this.props.onSearch(e.target.value);
  }, //handleSearch

  render: function() {
    return(
      <div className="row search-messages">
        <div className="col-sm-offset-3 col-sm-6">
          <div className="input-group">
            <input id="SearchMsgs" onChange={ this.handleSearch } placeholder="Search" type="text" className="form-control" aria-label="Search Messages" />
            <div className="input-group-btn">
              <button type="button" className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span className="caret"></span></button>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li><a href="#" id="asc" onClick={ this.handleOrder }>Ascending { (this.props.orderDir === 'asc') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                  <li><a href="#" id="desc" onClick={ this.handleOrder }>Descending { (this.props.orderDir === 'desc') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    ) // return
  } // render
}); //SearchMessages

module.exports = SearchMessages;
