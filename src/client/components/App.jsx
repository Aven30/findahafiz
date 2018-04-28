import React from 'react';
import Header from './Header';
import Layout from './Layout';
import {SessionProvider, SessionConsumer} from './context/SessionContext';

const App = () => (
    <SessionProvider>
        <Header />
        <Layout />
    </SessionProvider>
);

export default App