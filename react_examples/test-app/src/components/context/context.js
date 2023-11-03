import {createContext, useState} from 'react';

const dataContex = createContext({
	mail: "name@example.com",
	text: 'some text',
	forceChangeMail: () => {},
});

export default dataContex;