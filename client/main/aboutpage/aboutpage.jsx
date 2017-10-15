const _           = require('lodash');
const createClass = require('create-react-class');
const React       = require('react');

const stringList = [
    'Asynchronous Ethereum.',
    'Reliable. And powerful.',
    'Blockchain State Machines.',
    'Trustless. Always.',
];

const timeouts = [];


const AboutPage = createClass({
    getDefaultProps: function() {
        return {

        };
    },

    getInitialState: function() {
        return {
            cursorVisible: false,
            currentString: 'Asynchronous Ethereum',
            currentStringIndex: 0,
            editingString: true,
        };
    },

    toggleCursor: function() {
        this.setState({
            cursorVisible: this.state.editingString ? true : !this.state.cursorVisible,
        });
        timeouts[0] = setTimeout(() => {this.toggleCursor();}, 600);
    },

    removeCharacters: function() {
        if (!this.state.currentString) {
            this.holdCharacters();
            this.setState({
                currentStringIndex: (this.state.currentStringIndex + 1) % stringList.length,
            });
            return;
        }
        this.setState({
            currentString: this.state.currentString.slice(0, -1),
            editingString: true,
        });
        timeouts[1] = setTimeout(() => {this.removeCharacters();}, 30);
    },

    addCharacters: function() {
        if (this.state.currentString === stringList[this.state.currentStringIndex]) {
            this.holdCharacters();
            return;
        }
        this.setState({
            currentString: stringList[this.state.currentStringIndex].slice(0, this.state.currentString.length + 1),
            editingString: true,
        });
        if (stringList[this.state.currentStringIndex][this.state.currentString.length - 1] == '.') {
            timeouts[1] = setTimeout(() => {this.addCharacters();}, 800) ;
        } else {
            timeouts[1] = setTimeout(() => {this.addCharacters();}, 90);
        }

    },

    holdCharacters: function() {
        this.setState({
            editingString: !this.state.editingString,
        });

        if (this.state.currentString) {
            timeouts[1] = setTimeout(() => {this.removeCharacters();}, 4000);
        } else {
            timeouts[1] = setTimeout(() => {this.addCharacters();}, 400);
        }
    },

    componentDidMount: function() {
        setTimeout(() => {this.toggleCursor();}, 600);
        this.holdCharacters();
    },
    
    componentWillUnmount: function() {
        clearTimeout(timeouts[0]);
        clearTimeout(timeouts[1]);
    },

    render: function() {
        return <div className='aboutpage'>
            <div className='standstill'>
                <h3 className='tagline'>Prometheus <span>is</span></h3>
                <h3 className='tagline second'>{this.state.currentString}<div className={`cursor${this.state.cursorVisible ? '' : ' hidden'}`} /></h3>
            </div>
            <div className='box part3'>
                <div className='para'>
                    <div className='subPara'>
                        <h3>
                            Asynchronous Ethereum. Right now, and any other time.
                        </h3>
                        <p>
                            There's safety in numbers. By crowdsourcing asynchronous function calls across a wide enough population, we can build a callback marketplace.
                        </p>
                    </div>
                </div>
                <div className='para'>
                    <div className='subPara'>
                        <h3>
                            Unleash your DApp with the power of a State Machine.
                        </h3>
                        <p>Prometheus gives your contracts the ability to act upon changes of state within the Ethereum network. With new oracles being created every day, that's a whole world of possibilities.</p>
                    </div>
                </div>
                <div className='para'>
                    <div className='subPara'>
                        <h3>
                            Distributed. Trustless. Versatile. Prometheus.
                        </h3>
                        <p>Prometheus contains all the neccesary safeguards to protect users and customers from each other, allowing for a stable, trustless, and open-source ecosystem. </p>
                    </div>
                </div>
            </div>
            <div className='box diagram'>
                <div className='backdrop' />
                <div className='column'>
                    <h3>Agents</h3>
                    <p className='description'>Any of your contracts can be an agent. By defining a couple of functions, Agents can recieve asynchronous callbacks based on any possible function of its state.</p>
                    <div className='boxes'>
                        <div className='agent'><div className='line' /></div>
                        <div className='agent'><div className='line' /></div>
                        <div className='agent'><div className='line' /></div>
                        <div className='agent'><div className='line' /></div>
                    </div>
                </div>
                <div className='column'>
                    <h3>PromEths</h3>
                    <p className='description'>Each PromEth is bound to a single Agent, and it removes the need for trust. It stores the Ether rewards on the your behalf, to ensure neither side can cheat the other.</p>
                    <div className='boxes'>
                        <div className='prometh'></div>
                        <div className='prometh'></div>
                        <div className='prometh'></div>
                        <div className='prometh'></div>
                    </div>
                </div>
                <div className='column'>
                    <h3>Prometheus</h3>
                    <p className='description'>A single central contract. It's job is to build your Promeths, and keep track of them for the Ravens to find. Prometheus is open source, and independently verifiable.</p>
                    <div className='boxes'>
                        <div className='prometheus'></div>
                    </div>
                </div>
                <div className='column'>
                    <h3>Ravens</h3>
                    <p className='description'>A large pool of users running our open-source Node client, "Raven". They get paid to supply gas, when and where you want. It's an Ether payout for far less work than mining.</p>
                    <div className='boxes'>
                        <div className='spacer' />
                        <div className='raven'><div className='line' /></div>
                        <div className='raven'><div className='line' /></div>
                        <div className='raven'><div className='line' /></div>
                        <div className='raven'><div className='line' /></div>
                        <div className='raven'><div className='line' /></div>
                        <div className='raven'><div className='line' /></div>
                        <div className='spacer' />
                    </div>
                </div>
            </div>
            <div className='box footer'>
                <div className='copyright'>© 2017 Prometheus.</div>
                <div className='copyright'>Will Clark & Keyan Raahemifar</div>
            </div>
        </div>;
    }
});

module.exports = AboutPage;
