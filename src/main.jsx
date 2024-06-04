import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Video } from './componentes/Video'
import { ListVideo } from './componentes/ListVideo'
import { videolink } from './data/Videos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListVideo listvideo={videolink} titlename={''}/>
  </React.StrictMode>,
)
