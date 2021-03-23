//import example from './images/example.png'
//import example1 from './images/example1.svg'
import './style/main.scss'
// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Interesting!'

// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(heading)