var MainComponent = React.createClass({
    render() {
        return(
            <div id="header">
            <Header/>
            </div>
            );
    }
});
var Dropdown=React.createClass({
    render(){
        return(
            <div className="dropdown-menus">
              <i className="fa fa-caret-up"></i>
             <ul className="br-list1">
             <li><a href="#">Vehicles</a></li>
             <li><a href="#">Events</a></li>
             <li><a href="#">Locations</a></li>
             <li><a href="#">Watchlist</a></li>
             <li><a href="#">Wishlists</a></li>
             </ul>
             <ul className="br-list2">
             <li><a href="#">Recently Viewed</a></li>
             <li><a href="#">Search History</a></li>
             <li><a href="#">Saved Searches</a></li>
             </ul></div>
            );
    }
});
var Header=React.createClass({
    getInitialState: function() {
        return {windowWidth: window.innerWidth};
    },
    handleResize: function(e) {
        this.setState({windowWidth: window.innerWidth});
    },

    componentDidMount: function() {
        window.addEventListener('resize', this.handleResize);
    },

    componentWillUnmount: function() {
        window.removeEventListener('resize', this.handleResize);
    },
    render(){
        var style={
            width:this.state.windowWidth
        }
        return(
            <div className="header" style={style}>            
             <img src="../images/autobahnLogo.png"/>
             <h3>MarketPlace</h3>
             <span id="br1-cat">
             <a  href="#">Browse<i className="fa fa-caret-down"></i></a>           
             <Dropdown/></span>
             <span id="br2-cat"><a href="#">Sell<i className="fa fa-caret-down"></i></a></span>
             <input type="text" placeholder="Search All" className="search"/><i className="fa fa-search"></i>
              <span id="lg1-menu"><p>Help</p><i className="fa fa-question-circle"></i>
              <p>Brandon</p><i className="fa fa-cog"></i></span>
            </div>
            );
    }
});
ReactDOM.render(<MainComponent/>,document.getElementById('container'));