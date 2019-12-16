import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import createStream from './streams/createstream';
import deleteStream from './streams/deletestream';
import editStream from './streams/editstream';
import listStream from './streams/liststream';
import showStream from './streams/showstream';
import Header from './Header'

const App = () =>{
    return(
        <div>
            <BrowserRouter>
            <div>
                <Header />
                <Route path = "/" exact component ={listStream} />
                <Route path = '/streams/create' exact component ={createStream} />
                <Route path = '/streams/delete' exact component ={deleteStream} />
                <Route path = '/streams/edit' exact component ={editStream} />
                <Route path = '/streams/show' exact component ={showStream} />
            </div>
            </BrowserRouter>
        </div>
    );
}

export default App