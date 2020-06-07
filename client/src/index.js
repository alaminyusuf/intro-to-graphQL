import React from 'react'
import ReactDom from 'react-dom'
import '@babel/polyfill'
import Client from 'shopify-buy'
import App from './App'

const client = Client.buildClient({
  domain: 'https://groocerfy.myshopify.com/',
  storefrontAccessToken: 'a82ac7682c1a52b0acefe4e896169f45',
})

const root = document.getElementById('app')
ReactDom.render(<App client={client} />, root)
