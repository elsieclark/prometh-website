const _           = require('lodash');
const createClass = require('create-react-class');
const React       = require('react');
const Web3        = require('web3');

const prometheusABI = require('../../../web3/prometheus.json').abi;
const promethABI = require('../../../web3/prometh.json').abi;
const agentABI = require('../../../web3/agent.json').abi;

const Agentpage = createClass({
    getDefaultProps: function() {
        return {

        };
    },
    
    getInitialState: function() {
        return {
            web3: false,
            prometheus: {},
            promethAddress: '',
            agentAddress: '',
        };
    },
    
    componentDidMount: function() {
        if (typeof web3 !== 'undefined') {
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
            let prometheus = web3.eth.contract(prometheusABI).at('0xf4bc679d2ae0421b376f9bb0eaae90dd2b47b6c2');
            this.setState({
                web3: true,
                prometheus
            });
        }    
    },
    
    createPrometh: function() {
        if (!this.state.web3) {
            return;
        }
        const hash = this.state.prometheus.createPrometh.sendTransaction(this.state.agentAddress, { from: web3.eth.accounts[0], gas: 1000000 });
        const promethAddress = this.state.prometheus.promeths(this.state.prometheus.promethCount().toNumber() - 1);
        this.setState({ promethAddress });
    },
    
    handleAgentAddress: function(e) {
        this.setState({ agentAddress: e.target.value});
    },
    
    render: function() {
        return <div className='agentpage'>
            <div className='box description'>
                <div className='textArea'>
                    <h3 className='title'>Developing with Prometheus? It couldn't be easier!</h3>
                    <p className='para'>Simply implement an Agent contract with two headers matching those shown to the left, deploy it to the Ethereum blockchain, and then submit the address using the form below. That's it!</p>
                    <p className='para'>In return, you'll get the address of your contract's very own Prometh. Make sure to keep its balance topped up, or else no-one in our global network of Ravens will want to execute the calls.</p>
                </div>
                <div className='codeArea'>
                    <div className='codeBlock'>
                        <div className='codeLine'>{`contract agent { `}</div>
                        <div className='codeLine indent'>{`function promethCost() constant public returns (uint128, uint128) {}`}</div>
                        <div className='codeLine indent'>{`function promethExecute() public {}`}</div>
                        <div className='codeLine'>{`}`}</div>
                    </div>
                </div>
            </div>
            <div className='box submit'>
                <div className='submissionArea'>
                    <input type='text' 
                        className='submissionBox' 
                        placeholder='Agent address' 
                        onChange={this.handleAgentAddress} />
                    <div className='submitButton' 
                        onClick={this.createPrometh}>
                        <p>Create Agent</p>
                    </div>
                </div>
                <div className='addressDisplay'>
                    <p>Prometh address: {this.state.promethAddress}</p>
                </div>
            </div>
            <div className='box footer'>
                <div className='copyright'>© 2017 Prometheus</div>
                <div className='copyright'>Will Clark & Keyan Raahemifar</div>
            </div>
        </div>;
    }
});

module.exports = Agentpage;
