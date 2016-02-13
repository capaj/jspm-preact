import 'systemjs-hot-reloader/default-listener.js'

import preact, { h, render, Component } from 'preact'

// export class HelloWorld extends Component {
//   render () {
//     return h('h1', null, 'Hello World')
//   }
// }

const container = document.getElementById('app')
const original = container.cloneNode(true)
render(h('h1', null, 'Hello World'), container)

export function __unload () {
	container.remove() // since preact appends newly rendered to into the container, we need to manually clean it or we get a duplicated DOM every rerender
	document.body.appendChild(original.cloneNode(true))
}
