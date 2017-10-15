const _           = require('lodash');
const createClass = require('create-react-class');
const React       = require('react');


const Ravenpage = createClass({
    getDefaultProps: function() {
        return {

        };
    },
    render: function() {
        return <div className='ravenpage'>
            Ravenpage Component Ready.
        </div>;
    }
});

module.exports = Ravenpage;
