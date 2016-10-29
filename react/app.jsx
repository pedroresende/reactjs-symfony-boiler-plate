import React from 'react';
import {render} from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    Link,
    browserHistory,
    Redirect,
    IndexRedirect
} from 'react-router';

var Homepage = React.createClass({
    render: function() {
        return (
            <div>HEllo World</div>
        )
    }
});


var Homepage2 = React.createClass({
    render: function() {
        return (
            <div>HEllo World2</div>
        )
    }
});

var Homepage404 = React.createClass({
    render: function() {
        return (
            <div>404</div>
        )
    }
});

render((
        <Router history={browserHistory}>
            <Route path="/">
                <IndexRoute component={Homepage}/>
                <Route path="hi" component={Homepage2}/>
                <Route path="*" component={Homepage404}/>
            </Route>
        </Router>
), document.getElementById('app'));
