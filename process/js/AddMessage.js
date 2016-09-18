var React = require('react');

var AddAppointment = React.createClass({

  toggleMsgDisplay: function() {
    this.props.handleToggle();
  },

  handleAdd: function(e) {
    var tempItem = {
      message: this.refs.inputMessage.value
    } //tempItem
    e.preventDefault();
    this.props.addMsg(tempItem);
  }, //handleAdd

  render: function() {

    var displayMsgBody = {
      display: this.props.bodyVisible ? 'block' : 'none'
    };

    return(
      <div className="panel panel-primary">
        <div className="panel-heading Msg-addheading" onClick={ this.toggleMsgDisplay }>
        <span className="glyphicon glyphicon-plus"></span> Add Message</div>
        <div className="panel-body" style={ displayMsgBody }>

          <form className="add-appointment form-horizontal"
          onSubmit={ this.handleAdd }>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="message">Message</label>
              <div className="col-sm-10">
                <input type="text" className="form-control"
                  id="message" ref="inputMessage" placeholder="Enter Your Messsage" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary pull-right">Add Message</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    )//return
  } //render
}); // AddAppointment

module.exports = AddAppointment;
