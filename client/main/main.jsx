const _           = require('lodash');
const createClass = require('create-react-class');
const React       = require('react');


const Main = createClass({
	getDefaultProps : function(){
		return {

		};
	},
	render : function(){
		return <div className='main'>
            Main Component Ready.
		</div>;
	}
});

module.exports = Main;
