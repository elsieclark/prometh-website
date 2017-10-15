(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.main = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _ = require('lodash');
var createClass = require('create-react-class');
var React = require('react');

var stringList = ['Asynchronous Ethereum.', 'Reliable. And powerful.', 'Blockchain State Machines.', 'Trustless. Always.'];

var AboutPage = createClass({
    getDefaultProps: function getDefaultProps() {
        return {};
    },

    getInitialState: function getInitialState() {
        return {
            cursorVisible: false,
            currentString: 'Asynchronous Ethereum',
            currentStringIndex: 0,
            editingString: true
        };
    },

    toggleCursor: function toggleCursor() {
        var _this = this;

        this.setState({
            cursorVisible: this.state.editingString ? true : !this.state.cursorVisible
        });
        setTimeout(function () {
            _this.toggleCursor();
        }, 600);
    },

    removeCharacters: function removeCharacters() {
        var _this2 = this;

        if (!this.state.currentString) {
            this.holdCharacters();
            this.setState({
                currentStringIndex: (this.state.currentStringIndex + 1) % stringList.length
            });
            return;
        }
        this.setState({
            currentString: this.state.currentString.slice(0, -1),
            editingString: true
        });
        setTimeout(function () {
            _this2.removeCharacters();
        }, 30);
    },

    addCharacters: function addCharacters() {
        var _this3 = this;

        if (this.state.currentString === stringList[this.state.currentStringIndex]) {
            this.holdCharacters();
            return;
        }
        this.setState({
            currentString: stringList[this.state.currentStringIndex].slice(0, this.state.currentString.length + 1),
            editingString: true
        });
        if (stringList[this.state.currentStringIndex][this.state.currentString.length - 1] == '.') {
            setTimeout(function () {
                _this3.addCharacters();
            }, 800);
        } else {
            setTimeout(function () {
                _this3.addCharacters();
            }, 90);
        }
    },

    holdCharacters: function holdCharacters() {
        var _this4 = this;

        this.setState({
            editingString: !this.state.editingString
        });

        if (this.state.currentString) {
            setTimeout(function () {
                _this4.removeCharacters();
            }, 4000);
        } else {
            setTimeout(function () {
                _this4.addCharacters();
            }, 400);
        }
    },

    componentDidMount: function componentDidMount() {
        var _this5 = this;

        setTimeout(function () {
            _this5.toggleCursor();
        }, 600);
        this.holdCharacters();
    },

    render: function render() {
        return React.createElement(
            'div',
            { className: 'aboutpage' },
            React.createElement(
                'div',
                { className: 'standstill' },
                React.createElement(
                    'h3',
                    { className: 'tagline' },
                    'Prometheus ',
                    React.createElement(
                        'span',
                        null,
                        'is'
                    )
                ),
                React.createElement(
                    'h3',
                    { className: 'tagline second' },
                    this.state.currentString,
                    React.createElement('div', { className: 'cursor' + (this.state.cursorVisible ? '' : ' hidden') })
                )
            ),
            React.createElement(
                'div',
                { className: 'box part3' },
                React.createElement(
                    'div',
                    { className: 'para' },
                    React.createElement(
                        'div',
                        { className: 'subPara' },
                        React.createElement(
                            'h3',
                            null,
                            'Asynchronous Ethereum. Right now, and any other time.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'by the whims of their usersFunctions can be called asynchronously in the future, if and whenever a certain condition arises.'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'para' },
                    React.createElement(
                        'div',
                        { className: 'subPara' },
                        React.createElement(
                            'h3',
                            null,
                            'Unleash your DApp with the power of a State Machine.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Most contracts are bound Functions can be called asynchronously in the future, if and whenever a certain condition arises.'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'para' },
                    React.createElement(
                        'div',
                        { className: 'subPara' },
                        React.createElement(
                            'h3',
                            null,
                            'Distributed. Trustless. Versatile. Prometheus.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Most contracts are bound Functions can be called asynchronously in the future, if and whenever a certain condition arises.'
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'box diagram' },
                React.createElement('div', { className: 'backdrop' }),
                React.createElement(
                    'div',
                    { className: 'column' },
                    React.createElement(
                        'h3',
                        null,
                        'Agents'
                    ),
                    React.createElement(
                        'p',
                        { className: 'description' },
                        'Any of your contracts can be an agent. By defining a couple of functions, Agents can recieve asynchronous callbacks based on any possible function of its state.'
                    ),
                    React.createElement(
                        'div',
                        { className: 'boxes' },
                        React.createElement(
                            'div',
                            { className: 'agent' },
                            React.createElement('div', { className: 'line' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'agent' },
                            React.createElement('div', { className: 'line' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'agent' },
                            React.createElement('div', { className: 'line' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'agent' },
                            React.createElement('div', { className: 'line' })
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'column' },
                    React.createElement(
                        'h3',
                        null,
                        'Promeths'
                    ),
                    React.createElement(
                        'p',
                        { className: 'description' },
                        'Each Prometh is bound to a single Agent, and it removes the need for trust. It stores the Ether rewards on the your behalf, to ensure neither side can cheat the other.'
                    ),
                    React.createElement(
                        'div',
                        { className: 'boxes' },
                        React.createElement('div', { className: 'prometh' }),
                        React.createElement('div', { className: 'prometh' }),
                        React.createElement('div', { className: 'prometh' }),
                        React.createElement('div', { className: 'prometh' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'column' },
                    React.createElement(
                        'h3',
                        null,
                        'Prometheus'
                    ),
                    React.createElement(
                        'p',
                        { className: 'description' },
                        'A single central contract. It\'s job is to build your Promeths, and keep track of them for the Ravens to find. Prometheus is open source, and independently verifiable.'
                    ),
                    React.createElement(
                        'div',
                        { className: 'boxes' },
                        React.createElement('div', { className: 'prometheus' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'column' },
                    React.createElement(
                        'h3',
                        null,
                        'Ravens'
                    ),
                    React.createElement(
                        'p',
                        { className: 'description' },
                        'A large pool of users running our open-source Node client, "Raven". They get paid to supply gas, when and where you want. It\'s an Ether payout for far less work than mining.'
                    ),
                    React.createElement(
                        'div',
                        { className: 'boxes' },
                        React.createElement('div', { className: 'spacer' }),
                        React.createElement(
                            'div',
                            { className: 'raven' },
                            React.createElement('div', { className: 'line' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'raven' },
                            React.createElement('div', { className: 'line' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'raven' },
                            React.createElement('div', { className: 'line' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'raven' },
                            React.createElement('div', { className: 'line' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'raven' },
                            React.createElement('div', { className: 'line' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'raven' },
                            React.createElement('div', { className: 'line' })
                        ),
                        React.createElement('div', { className: 'spacer' })
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'box footer' },
                React.createElement(
                    'div',
                    { className: 'copyright' },
                    '\xA9 2017 Prometheus.'
                ),
                React.createElement(
                    'div',
                    { className: 'copyright' },
                    'Will Clark & Keyan Raahemifar'
                )
            )
        );
    }
});

module.exports = AboutPage;

},{"create-react-class":"create-react-class","lodash":"lodash","react":"react"}],2:[function(require,module,exports){
'use strict';

var _ = require('lodash');
var createClass = require('create-react-class');
var React = require('react');

var Agentpage = createClass({
    getDefaultProps: function getDefaultProps() {
        return {};
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'agentpage' },
            'Agentpage Component Ready.'
        );
    }
});

module.exports = Agentpage;

},{"create-react-class":"create-react-class","lodash":"lodash","react":"react"}],3:[function(require,module,exports){
'use strict';

var _ = require('lodash');
var createClass = require('create-react-class');
var React = require('react');

var Fourohfour = createClass({
    getDefaultProps: function getDefaultProps() {
        return {};
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'fourohfour' },
            'Fourohfour Component Ready.'
        );
    }
});

module.exports = Fourohfour;

},{"create-react-class":"create-react-class","lodash":"lodash","react":"react"}],"/Users/willclark/Documents/repos/prometh-website/client/main/main.jsx":[function(require,module,exports){
'use strict';

var _ = require('lodash');
var createClass = require('create-react-class');
var createRouter = require('pico-router').createRouter;
var Link = require('pico-router').Link;
var React = require('react');

var AboutPage = require('./aboutpage/aboutpage.jsx');
var AgentPage = require('./agentpage/agentpage.jsx');
var RavenPage = require('./ravenpage/ravenpage.jsx');
var FourOhFour = require('./fourohfour/fourohfour.jsx');

var TopBar = require('../shared/topbar/topbar.jsx');

var Router = createRouter({
    '/': React.createElement(AboutPage, null),
    '/develop': React.createElement(AgentPage, null),
    '/download': React.createElement(RavenPage, null),
    '/*': React.createElement(FourOhFour, null)
});

var navBarLinks = [{
    name: 'About',
    link: '/'
}, {
    name: 'Develop',
    link: '/develop'
}, {
    name: 'Download',
    link: '/download'
}];

var Main = createClass({
    getDefaultProps: function getDefaultProps() {
        return {
            url: '/'
        };
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'main' },
            React.createElement(TopBar, { pages: navBarLinks }),
            React.createElement(Router, { defaultUrl: this.props.url })
        );
    }
});

module.exports = Main;

},{"../shared/topbar/topbar.jsx":5,"./aboutpage/aboutpage.jsx":1,"./agentpage/agentpage.jsx":2,"./fourohfour/fourohfour.jsx":3,"./ravenpage/ravenpage.jsx":4,"create-react-class":"create-react-class","lodash":"lodash","pico-router":"pico-router","react":"react"}],4:[function(require,module,exports){
'use strict';

var _ = require('lodash');
var createClass = require('create-react-class');
var React = require('react');

var Ravenpage = createClass({
    getDefaultProps: function getDefaultProps() {
        return {};
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'ravenpage' },
            'Ravenpage Component Ready.'
        );
    }
});

module.exports = Ravenpage;

},{"create-react-class":"create-react-class","lodash":"lodash","react":"react"}],5:[function(require,module,exports){
'use strict';

var _ = require('lodash');
var cx = require('classnames');
var createClass = require('create-react-class');
var React = require('react');
var Link = require('pico-router').Link;

var TopBar = createClass({
    getDefaultProps: function getDefaultProps() {
        return {
            pages: []
        };
    },
    getInitialState: function getInitialState() {
        return {
            currentPage: '/'
        };
    },
    getCurrentPage: function getCurrentPage(e) {
        this.setState({
            currentPage: decodeURI(e.currentTarget.href.split(window.location.origin)[1])
        });
    },

    componentDidMount: function componentDidMount() {
        this.setState({
            currentPage: decodeURI(window.location.href.split(window.location.origin)[1])
        });
    },

    renderPageLinks: function renderPageLinks() {
        var _this = this;

        return _.map(this.props.pages, function (page) {
            return React.createElement(
                Link,
                { className: cx('pageLink', { activePage: _this.state.currentPage === page.link }), href: '' + page.link, onClick: _this.getCurrentPage },
                page.name
            );
        });
    },

    render: function render() {
        return React.createElement(
            'div',
            { className: 'topbar' },
            React.createElement(
                'h3',
                { className: 'siteName' },
                'Prometheus'
            ),
            React.createElement(
                'nav',
                { className: 'pageLinkList' },
                this.renderPageLinks()
            )
        );
    }
});

module.exports = TopBar;

},{"classnames":"classnames","create-react-class":"create-react-class","lodash":"lodash","pico-router":"pico-router","react":"react"}]},{},[])("/Users/willclark/Documents/repos/prometh-website/client/main/main.jsx")
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvbWFpbi9hYm91dHBhZ2UvYWJvdXRwYWdlLmpzeCIsImNsaWVudC9tYWluL2FnZW50cGFnZS9hZ2VudHBhZ2UuanN4IiwiY2xpZW50L21haW4vZm91cm9oZm91ci9mb3Vyb2hmb3VyLmpzeCIsImNsaWVudC9tYWluL21haW4uanN4IiwiY2xpZW50L21haW4vcmF2ZW5wYWdlL3JhdmVucGFnZS5qc3giLCJjbGllbnQvc2hhcmVkL3RvcGJhci90b3BiYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLElBQWMsUUFBUSxRQUFSLENBQXBCO0FBQ0EsSUFBTSxjQUFjLFFBQVEsb0JBQVIsQ0FBcEI7QUFDQSxJQUFNLFFBQWMsUUFBUSxPQUFSLENBQXBCOztBQUVBLElBQU0sYUFBYSxDQUNmLHdCQURlLEVBRWYseUJBRmUsRUFHZiw0QkFIZSxFQUlmLG9CQUplLENBQW5COztBQVFBLElBQU0sWUFBWSxZQUFZO0FBQzFCLHFCQUFpQiwyQkFBVztBQUN4QixlQUFPLEVBQVA7QUFHSCxLQUx5Qjs7QUFPMUIscUJBQWlCLDJCQUFXO0FBQ3hCLGVBQU87QUFDSCwyQkFBZSxLQURaO0FBRUgsMkJBQWUsdUJBRlo7QUFHSCxnQ0FBb0IsQ0FIakI7QUFJSCwyQkFBZTtBQUpaLFNBQVA7QUFNSCxLQWR5Qjs7QUFnQjFCLGtCQUFjLHdCQUFXO0FBQUE7O0FBQ3JCLGFBQUssUUFBTCxDQUFjO0FBQ1YsMkJBQWUsS0FBSyxLQUFMLENBQVcsYUFBWCxHQUEyQixJQUEzQixHQUFrQyxDQUFDLEtBQUssS0FBTCxDQUFXO0FBRG5ELFNBQWQ7QUFHQSxtQkFBVyxZQUFNO0FBQUMsa0JBQUssWUFBTDtBQUFxQixTQUF2QyxFQUF5QyxHQUF6QztBQUNILEtBckJ5Qjs7QUF1QjFCLHNCQUFrQiw0QkFBVztBQUFBOztBQUN6QixZQUFJLENBQUMsS0FBSyxLQUFMLENBQVcs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UyxNQUFLLGNBQTNIO0FBQ0YscUJBQUs7QUFESCxhQUFQO0FBR0gsU0FKTSxDQUFQO0FBS0gsS0E3QnNCOztBQStCdkIsWUFBUSxrQkFBVztBQUNmLGVBQU87QUFBQTtBQUFBLGNBQUssV0FBVSxRQUFmO0FBQ0g7QUFBQTtBQUFBLGtCQUFJLFdBQVUsVUFBZDtBQUFBO0FBQUEsYUFERztBQUVIO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGNBQWY7QUFDSyxxQkFBSyxlQUFMO0FBREw7QUFGRyxTQUFQO0FBTUg7QUF0Q3NCLENBQVosQ0FBZjs7QUF5Q0EsT0FBTyxPQUFQLEdBQWlCLE1BQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IF8gICAgICAgICAgID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBjcmVhdGVDbGFzcyA9IHJlcXVpcmUoJ2NyZWF0ZS1yZWFjdC1jbGFzcycpO1xuY29uc3QgUmVhY3QgICAgICAgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5jb25zdCBzdHJpbmdMaXN0ID0gW1xuICAgICdBc3luY2hyb25vdXMgRXRoZXJldW0uJyxcbiAgICAnUmVsaWFibGUuIEFuZCBwb3dlcmZ1bC4nLFxuICAgICdCbG9ja2NoYWluIFN0YXRlIE1hY2hpbmVzLicsXG4gICAgJ1RydXN0bGVzcy4gQWx3YXlzLicsXG5dO1xuXG5cbmNvbnN0IEFib3V0UGFnZSA9IGNyZWF0ZUNsYXNzKHtcbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJzb3JWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGN1cnJlbnRTdHJpbmc6ICdBc3luY2hyb25vdXMgRXRoZXJldW0nLFxuICAgICAgICAgICAgY3VycmVudFN0cmluZ0luZGV4OiAwLFxuICAgICAgICAgICAgZWRpdGluZ1N0cmluZzogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgdG9nZ2xlQ3Vyc29yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJzb3JWaXNpYmxlOiB0aGlzLnN0YXRlLmVkaXRpbmdTdHJpbmcgPyB0cnVlIDogIXRoaXMuc3RhdGUuY3Vyc29yVmlzaWJsZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge3RoaXMudG9nZ2xlQ3Vyc29yKCk7fSwgNjAwKTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlQ2hhcmFjdGVyczogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5jdXJyZW50U3RyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmhvbGRDaGFyYWN0ZXJzKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nSW5kZXg6ICh0aGlzLnN0YXRlLmN1cnJlbnRTdHJpbmdJbmRleCArIDEpICUgc3RyaW5nTGlzdC5sZW5ndGgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRTdHJpbmc6IHRoaXMuc3RhdGUuY3VycmVudFN0cmluZy5zbGljZSgwLCAtMSksXG4gICAgICAgICAgICBlZGl0aW5nU3RyaW5nOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7dGhpcy5yZW1vdmVDaGFyYWN0ZXJzKCk7fSwgMzApO1xuICAgIH0sXG5cbiAgICBhZGRDaGFyYWN0ZXJzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFN0cmluZyA9PT0gc3RyaW5nTGlzdFt0aGlzLnN0YXRlLmN1cnJlbnRTdHJpbmdJbmRleF0pIHtcbiAgICAgICAgICAgIHRoaXMuaG9sZENoYXJhY3RlcnMoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRTdHJpbmc6IHN0cmluZ0xpc3RbdGhpcy5zdGF0ZS5jdXJyZW50U3RyaW5nSW5kZXhdLnNsaWNlKDAsIHRoaXMuc3RhdGUuY3VycmVudFN0cmluZy5sZW5ndGggKyAxKSxcbiAgICAgICAgICAgIGVkaXRpbmdTdHJpbmc6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc3RyaW5nTGlzdFt0aGlzLnN0YXRlLmN1cnJlbnRTdHJpbmdJbmRleF1bdGhpcy5zdGF0ZS5jdXJyZW50U3RyaW5nLmxlbmd0aCAtIDFdID09ICcuJykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7dGhpcy5hZGRDaGFyYWN0ZXJzKCk7fSwgODAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge3RoaXMuYWRkQ2hhcmFjdGVycygpO30sIDkwKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGhvbGRDaGFyYWN0ZXJzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlZGl0aW5nU3RyaW5nOiAhdGhpcy5zdGF0ZS5lZGl0aW5nU3RyaW5nLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U3RyaW5nKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHt0aGlzLnJlbW92ZUNoYXJhY3RlcnMoKTt9LCA0MDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge3RoaXMuYWRkQ2hhcmFjdGVycygpO30sIDQwMCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHt0aGlzLnRvZ2dsZUN1cnNvcigpO30sIDYwMCk7XG4gICAgICAgIHRoaXMuaG9sZENoYXJhY3RlcnMoKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdhYm91dHBhZ2UnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0YW5kc3RpbGwnPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RhZ2xpbmUnPlByb21ldGhldXMgPHNwYW4+aXM8L3NwYW4+PC9oMz5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0YWdsaW5lIHNlY29uZCc+e3RoaXMuc3RhdGUuY3VycmVudFN0cmluZ308ZGl2IGNsYXNzTmFtZT17YGN1cnNvciR7dGhpcy5zdGF0ZS5jdXJzb3JWaXNpYmxlID8gJycgOiAnIGhpZGRlbid9YH0gLz48L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94IHBhcnQzJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFyYSc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdWJQYXJhJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBc3luY2hyb25vdXMgRXRoZXJldW0uIFJpZ2h0IG5vdywgYW5kIGFueSBvdGhlciB0aW1lLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBieSB0aGUgd2hpbXMgb2YgdGhlaXIgdXNlcnNGdW5jdGlvbnMgY2FuIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseSBpbiB0aGUgZnV0dXJlLCBpZiBhbmQgd2hlbmV2ZXIgYSBjZXJ0YWluIGNvbmRpdGlvbiBhcmlzZXMuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFyYSc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdWJQYXJhJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVbmxlYXNoIHlvdXIgREFwcCB3aXRoIHRoZSBwb3dlciBvZiBhIFN0YXRlIE1hY2hpbmUuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TW9zdCBjb250cmFjdHMgYXJlIGJvdW5kIEZ1bmN0aW9ucyBjYW4gYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5IGluIHRoZSBmdXR1cmUsIGlmIGFuZCB3aGVuZXZlciBhIGNlcnRhaW4gY29uZGl0aW9uIGFyaXNlcy48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXJhJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N1YlBhcmEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpc3RyaWJ1dGVkLiBUcnVzdGxlc3MuIFZlcnNhdGlsZS4gUHJvbWV0aGV1cy5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Nb3N0IGNvbnRyYWN0cyBhcmUgYm91bmQgRnVuY3Rpb25zIGNhbiBiZSBjYWxsZWQgYXN5bmNocm9ub3VzbHkgaW4gdGhlIGZ1dHVyZSwgaWYgYW5kIHdoZW5ldmVyIGEgY2VydGFpbiBjb25kaXRpb24gYXJpc2VzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3ggZGlhZ3JhbSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2tkcm9wJyAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4nPlxuICAgICAgICAgICAgICAgICAgICA8aDM+QWdlbnRzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+QW55IG9mIHlvdXIgY29udHJhY3RzIGNhbiBiZSBhbiBhZ2VudC4gQnkgZGVmaW5pbmcgYSBjb3VwbGUgb2YgZnVuY3Rpb25zLCBBZ2VudHMgY2FuIHJlY2lldmUgYXN5bmNocm9ub3VzIGNhbGxiYWNrcyBiYXNlZCBvbiBhbnkgcG9zc2libGUgZnVuY3Rpb24gb2YgaXRzIHN0YXRlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JveGVzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhZ2VudCc+PGRpdiBjbGFzc05hbWU9J2xpbmUnIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWdlbnQnPjxkaXYgY2xhc3NOYW1lPSdsaW5lJyAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FnZW50Jz48ZGl2IGNsYXNzTmFtZT0nbGluZScgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhZ2VudCc+PGRpdiBjbGFzc05hbWU9J2xpbmUnIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4nPlxuICAgICAgICAgICAgICAgICAgICA8aDM+UHJvbWV0aHM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz5FYWNoIFByb21ldGggaXMgYm91bmQgdG8gYSBzaW5nbGUgQWdlbnQsIGFuZCBpdCByZW1vdmVzIHRoZSBuZWVkIGZvciB0cnVzdC4gSXQgc3RvcmVzIHRoZSBFdGhlciByZXdhcmRzIG9uIHRoZSB5b3VyIGJlaGFsZiwgdG8gZW5zdXJlIG5laXRoZXIgc2lkZSBjYW4gY2hlYXQgdGhlIG90aGVyLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JveGVzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9tZXRoJz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9tZXRoJz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9tZXRoJz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9tZXRoJz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbic+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5Qcm9tZXRoZXVzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+QSBzaW5nbGUgY2VudHJhbCBjb250cmFjdC4gSXQncyBqb2IgaXMgdG8gYnVpbGQgeW91ciBQcm9tZXRocywgYW5kIGtlZXAgdHJhY2sgb2YgdGhlbSBmb3IgdGhlIFJhdmVucyB0byBmaW5kLiBQcm9tZXRoZXVzIGlzIG9wZW4gc291cmNlLCBhbmQgaW5kZXBlbmRlbnRseSB2ZXJpZmlhYmxlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JveGVzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9tZXRoZXVzJz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbic+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5SYXZlbnM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz5BIGxhcmdlIHBvb2wgb2YgdXNlcnMgcnVubmluZyBvdXIgb3Blbi1zb3VyY2UgTm9kZSBjbGllbnQsIFwiUmF2ZW5cIi4gVGhleSBnZXQgcGFpZCB0byBzdXBwbHkgZ2FzLCB3aGVuIGFuZCB3aGVyZSB5b3Ugd2FudC4gSXQncyBhbiBFdGhlciBwYXlvdXQgZm9yIGZhciBsZXNzIHdvcmsgdGhhbiBtaW5pbmcuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94ZXMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlcicgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYXZlbic+PGRpdiBjbGFzc05hbWU9J2xpbmUnIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmF2ZW4nPjxkaXYgY2xhc3NOYW1lPSdsaW5lJyAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhdmVuJz48ZGl2IGNsYXNzTmFtZT0nbGluZScgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYXZlbic+PGRpdiBjbGFzc05hbWU9J2xpbmUnIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmF2ZW4nPjxkaXYgY2xhc3NOYW1lPSdsaW5lJyAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhdmVuJz48ZGl2IGNsYXNzTmFtZT0nbGluZScgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZXInIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94IGZvb3Rlcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvcHlyaWdodCc+wqkgMjAxNyBQcm9tZXRoZXVzLjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb3B5cmlnaHQnPldpbGwgQ2xhcmsgJiBLZXlhbiBSYWFoZW1pZmFyPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFib3V0UGFnZTtcbiIsImNvbnN0IF8gICAgICAgICAgID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBjcmVhdGVDbGFzcyA9IHJlcXVpcmUoJ2NyZWF0ZS1yZWFjdC1jbGFzcycpO1xuY29uc3QgUmVhY3QgICAgICAgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5cbmNvbnN0IEFnZW50cGFnZSA9IGNyZWF0ZUNsYXNzKHtcbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgIH07XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2FnZW50cGFnZSc+XG4gICAgICAgICAgICBBZ2VudHBhZ2UgQ29tcG9uZW50IFJlYWR5LlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQWdlbnRwYWdlO1xuIiwiY29uc3QgXyAgICAgICAgICAgPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IGNyZWF0ZUNsYXNzID0gcmVxdWlyZSgnY3JlYXRlLXJlYWN0LWNsYXNzJyk7XG5jb25zdCBSZWFjdCAgICAgICA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cblxuY29uc3QgRm91cm9oZm91ciA9IGNyZWF0ZUNsYXNzKHtcbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgIH07XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2ZvdXJvaGZvdXInPlxuICAgICAgICAgICAgRm91cm9oZm91ciBDb21wb25lbnQgUmVhZHkuXG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3Vyb2hmb3VyO1xuIiwiY29uc3QgXyAgICAgICAgICAgID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBjcmVhdGVDbGFzcyAgPSByZXF1aXJlKCdjcmVhdGUtcmVhY3QtY2xhc3MnKTtcbmNvbnN0IGNyZWF0ZVJvdXRlciA9IHJlcXVpcmUoJ3BpY28tcm91dGVyJykuY3JlYXRlUm91dGVyO1xuY29uc3QgTGluayAgICAgICAgID0gcmVxdWlyZSgncGljby1yb3V0ZXInKS5MaW5rO1xuY29uc3QgUmVhY3QgICAgICAgID0gcmVxdWlyZSgncmVhY3QnKTtcblxuY29uc3QgQWJvdXRQYWdlICA9IHJlcXVpcmUoJy4vYWJvdXRwYWdlL2Fib3V0cGFnZS5qc3gnKTtcbmNvbnN0IEFnZW50UGFnZSAgPSByZXF1aXJlKCcuL2FnZW50cGFnZS9hZ2VudHBhZ2UuanN4Jyk7XG5jb25zdCBSYXZlblBhZ2UgID0gcmVxdWlyZSgnLi9yYXZlbnBhZ2UvcmF2ZW5wYWdlLmpzeCcpO1xuY29uc3QgRm91ck9oRm91ciA9IHJlcXVpcmUoJy4vZm91cm9oZm91ci9mb3Vyb2hmb3VyLmpzeCcpO1xuXG5jb25zdCBUb3BCYXIgICA9IHJlcXVpcmUoJy4uL3NoYXJlZC90b3BiYXIvdG9wYmFyLmpzeCcpO1xuXG5jb25zdCBSb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xuICAgICcvJzogPEFib3V0UGFnZSAvPixcbiAgICAnL2RldmVsb3AnOiA8QWdlbnRQYWdlIC8+LFxuICAgICcvZG93bmxvYWQnOiA8UmF2ZW5QYWdlIC8+LFxuICAgICcvKic6IDxGb3VyT2hGb3VyIC8+XG59KTtcblxuY29uc3QgbmF2QmFyTGlua3MgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnQWJvdXQnLFxuICAgICAgICBsaW5rOiAnLycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdEZXZlbG9wJyxcbiAgICAgICAgbGluazogJy9kZXZlbG9wJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0Rvd25sb2FkJyxcbiAgICAgICAgbGluazogJy9kb3dubG9hZCdcbiAgICB9LFxuXTtcblxuY29uc3QgTWFpbiA9IGNyZWF0ZUNsYXNzKHtcbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXJsOiAnLydcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICAgICAgICA8VG9wQmFyIHBhZ2VzPXtuYXZCYXJMaW5rc30gLz5cbiAgICAgICAgICAgIDxSb3V0ZXIgZGVmYXVsdFVybD17dGhpcy5wcm9wcy51cmx9IC8+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYWluO1xuIiwiY29uc3QgXyAgICAgICAgICAgPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IGNyZWF0ZUNsYXNzID0gcmVxdWlyZSgnY3JlYXRlLXJlYWN0LWNsYXNzJyk7XG5jb25zdCBSZWFjdCAgICAgICA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cblxuY29uc3QgUmF2ZW5wYWdlID0gY3JlYXRlQ2xhc3Moe1xuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgfTtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ncmF2ZW5wYWdlJz5cbiAgICAgICAgICAgIFJhdmVucGFnZSBDb21wb25lbnQgUmVhZHkuXG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSYXZlbnBhZ2U7XG4iLCJjb25zdCBfICAgICAgICAgICA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgY3ggICAgICAgICAgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5jb25zdCBjcmVhdGVDbGFzcyA9IHJlcXVpcmUoJ2NyZWF0ZS1yZWFjdC1jbGFzcycpO1xuY29uc3QgUmVhY3QgICAgICAgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgTGluayAgICAgICAgPSByZXF1aXJlKCdwaWNvLXJvdXRlcicpLkxpbms7XG5cbmNvbnN0IFRvcEJhciA9IGNyZWF0ZUNsYXNzKHtcbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFnZXM6IFtdLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAnLydcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGdldEN1cnJlbnRQYWdlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY3VycmVudFBhZ2U6IGRlY29kZVVSSShlLmN1cnJlbnRUYXJnZXQuaHJlZi5zcGxpdCh3aW5kb3cubG9jYXRpb24ub3JpZ2luKVsxXSlcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50UGFnZTogZGVjb2RlVVJJKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pWzFdKVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgcmVuZGVyUGFnZUxpbmtzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF8ubWFwKHRoaXMucHJvcHMucGFnZXMsIChwYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPExpbmsgY2xhc3NOYW1lPXtjeCgncGFnZUxpbmsnLCB7IGFjdGl2ZVBhZ2U6IHRoaXMuc3RhdGUuY3VycmVudFBhZ2UgPT09IHBhZ2UubGluayB9KX0gaHJlZj17YCR7cGFnZS5saW5rfWB9IG9uQ2xpY2s9e3RoaXMuZ2V0Q3VycmVudFBhZ2V9PlxuICAgICAgICAgICAgICAgIHtwYWdlLm5hbWV9XG4gICAgICAgICAgICA8L0xpbms+O1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSd0b3BiYXInPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nc2l0ZU5hbWUnPlByb21ldGhldXM8L2gzPlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J3BhZ2VMaW5rTGlzdCc+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUGFnZUxpbmtzKCl9XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRvcEJhcjtcbiJdfQ==
