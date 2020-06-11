import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { PokemonsContainer } from './containers/PokemonsContainer'
import './App.css'
export default function App(){

    const client = new ApolloClient({
        uri:'https://graphql-pokemon.now.sh',
    })
    return (
        <div>
            <center>
                <h1>Pokemon App</h1>
                <p> It takes sometime to display the elements!!!</p>
            </center>
            <ApolloProvider client={client}>
                <main>
                    <PokemonsContainer />
                </main>
            </ApolloProvider>
        </div>
    )
}