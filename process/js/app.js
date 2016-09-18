var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var MessageList = require('./MsgList');
var AddMessage = require('./AddMessage');
var SearchMessage = require('./SearchMessage');

function reverseString(str) {
  return str.split('').reverse().join('');
}

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      msgBodyVisible: false,
      orderBy: 'message',
      orderDir: 'asc',
      queryText: '',
      allMessages: []
    } //return
  }, //getInitialState

  componentDidMount: function() {

  }, //componentDidMount

  componentWillUnmount: function() {
    this.serverRequest.abort();
  }, //componentWillUnmount

  deleteMessage: function(item) {
    var allMsgs = this.state.allMessages;
    var newMsgs = _.without(allMsgs, item);
    this.setState({
      allMessages: newMsgs
    }); //setState
  }, //deleteMessage

  toggleAddDisplay: function() {
    var tempVisibility = !this.state.msgBodyVisible;
    this.setState({
      msgBodyVisible: tempVisibility
    }); //setState
  }, //toggleAddDisplay

  addItem: function(tempItem) {
    var tempMsgs= this.state.allMessages;
    tempItem.message = reverseString(tempItem.message);

    //check if the given message is already present in the list of messages
    var flag = false;
    var allMessages = this.state.allMessages; 

    allMessages.forEach(function(item) {
      if(tempItem.message==item.message){
        flag = true;
      }//if condition
      
    }); //forEach

    //Insert into messageList only if the current message is not present
    if(flag==false){
      tempMsgs.push(tempItem);
    }
    this.setState({
      allMessages: tempMsgs
    }); //setState
  }, //addItem

  reOrder: function(orderBy, orderDir) {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    }); //setState
  }, //reOrder

  searchMsgs(q) {
    this.setState({
      queryText: q
    }); //setState
  }, //searchMsgs

  render: function() {
    var filteredMsgs = [];
    var orderBy = this.state.orderBy;
    var orderDir = this.state.orderDir;
    var queryText = this.state.queryText;
    var allMessages = this.state.allMessages; 

    allMessages.forEach(function(item) {
      item.message = reverseString(item.message);

      if((item.message.toLowerCase().indexOf(queryText)!=-1)){
        item.message = reverseString(item.message);
        filteredMsgs.push(item);
      }
      
    }); //forEach

    filteredMsgs = _.orderBy(filteredMsgs, function(item) {
      return item[orderBy].toLowerCase();
    }, orderDir);//orderBy

    filteredMsgs = filteredMsgs.map(function(item, index) {
      return(
        <MessageList key = { index }
          singleItem = { item }
          whichItem = { item }
          onDelete = { this.deleteMessage } />
      ) //return
    }.bind(this)); //filteredMsgs.map
    return (
      <div className="interface">
        <AddMessage
          bodyVisible = { this.state.msgBodyVisible }
          handleToggle = { this.toggleAddDisplay }
          addMsg = { this.addItem }
        />
        <SearchMessage
          orderBy = { this.state.orderBy }
          orderDir = { this.state.orderDir }
          onReOrder = { this.reOrder }
          onSearch = { this.searchMsgs }
        />
        <ul className="item-list media-list">{filteredMsgs}</ul>
      </div>
    ) //return
  } //render
}); //MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('messageBoard')
); //render
