const _            = require('lodash');
const createClass  = require('create-react-class');
const createRouter = require('pico-router').createRouter;
const Link         = require('pico-router').Link;
const React        = require('react');

const AboutPage  = require('./aboutpage/aboutpage.jsx');
const AgentPage  = require('./agentpage/agentpage.jsx');
const RavenPage  = require('./ravenpage/ravenpage.jsx');
const FourOhFour = require('./fourohfour/fourohfour.jsx');

const TopBar   = require('../shared/topbar/topbar.jsx');

const Router = createRouter({
    '/': <AboutPage />,
    '/develop': <AgentPage />,
    '/*': <FourOhFour />
});

const navBarLinks = [
    {
        name: 'About',
        link: '/',
    },
    {
        name: 'Develop',
        link: '/develop',
    },
];

const Main = createClass({
    getDefaultProps: function() {
        return {
            url: '/'
        };
    },
    render: function() {
        return <div className='main'>
            <TopBar pages={navBarLinks} />
            <Router defaultUrl={this.props.url} />
        </div>;
    }
});

module.exports = Main;
