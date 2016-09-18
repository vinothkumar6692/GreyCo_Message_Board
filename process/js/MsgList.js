var React = require('react');

var AptList = React.createClass({

  handleDelete: function() {
    this.props.onDelete(this.props.whichItem)
  },

  render: function() {
    return(
      <li className="msg-item media">
        <div className="media-left">
          <button className="msg-delete btn btn-xs btn-danger" onClick={this.handleDelete}>
          <span className="glyphicon glyphicon-remove"></span></button>
        </div>
        <div className="msg-info media-body">
          <div className="msg-head">
            <span className="msg-name">{this.props.singleItem.message}</span>
          </div>
        </div>
      </li>
    ) // return
  } // render
}); //AptList

module.exports=AptList;
