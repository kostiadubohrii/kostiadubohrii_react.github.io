import {useState} from 'react';
import './App.css';
import Form from '../form/form';
import dataContex from '../context/context';

const {Provider} = dataContex;

function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text',
        forceChangeMail: forceChangeMail
    });

    function forceChangeMail() {
        setData({...data, mail: 'test@gmail.com'})
    }

    return ( 
        <Provider value={data}>
            <Form text={data.text}/>
            <button 
                onClick={() => setData({
                    mail: "second@example.com",
                    text: 'another text',
                    forceChangeMail: forceChangeMail
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default App;
