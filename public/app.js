import 'systemjs-hot-reloader/default-listener.js'

import { h, render, Component } from 'preact'

export class HelloWorld extends Component {
  render () {
    return h('h1', null, 'Hello World')
  }
}

const container = document.getElementById('app')

render(h(HelloWorld), container, container.firstChild)
