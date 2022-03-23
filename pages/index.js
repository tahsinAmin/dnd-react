import Head from 'next/head'
import Image from 'next/image'
import DragNDrop from '../components/DragNDrop'


const data = [
  {title: 'group 1', items: ['1','2','3']},
  {title: 'group 2', items: ['4','5']}
]

export default function Home() {
  return (
    <div className="App text-center">
      <header className="App-header">
      <DragNDrop data={data}/>
        
      </header>
    </div>
  )
}

// 34:51 - https://youtu.be/Q1PYQPK9TaM?t=2091
