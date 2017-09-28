import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import HelloMessage from './components/HelloMessage';
import MarkdownEditor from './components/MarkdownEditor';
import Timer from './components/Timer';
import Welcome from './components/Welcome';
import WelcomeClass from './components/Welcome-class';
import Tick from './components/functional/tick';
import Clock from './components/classbased/clock';
import ActionLink from './components/functional/ActionLink';
import LogProps from './components/functional/logProps';
import NameForm from './components/classbased/form';
import Calculator from './components/liftingstateup/Calculator';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<HelloMessage />, document.getElementById('hello'));
ReactDOM.render(<MarkdownEditor />, document.getElementById('markdowneditor'));
ReactDOM.render(<Timer />, document.getElementById('timer'));
ReactDOM.render(<Tick />, document.getElementById('tick'));
ReactDOM.render(<Clock />, document.getElementById('clock'));
ReactDOM.render(<Welcome name="Tony" />, document.getElementById('welcome'));
ReactDOM.render(<WelcomeClass firstName="Tony" lastName='Khatkar' />, document.getElementById('welcome_class'));
ReactDOM.render(<ActionLink />, document.getElementById('actionlink'));
// ReactDOM.render(<LogProps />, document.getElementById('logprops'));
ReactDOM.render(<NameForm />, document.getElementById('form'));
ReactDOM.render(<Calculator />, document.getElementById('calculator'));

registerServiceWorker();