import React, {useState, useRef} from 'react'

export default function DragNDrop({data}) {
  const [list,setList] = useState(data)
  const [dragging,setDragging] = useState(data)
  const dragItem = useRef();

  const handleDragStart = (e, params) => {
    console.log("Drag Starting...", params);
    dragItem.current = params;
    setDragging(true)
  }

  const getStyles = () => {
    return 'current dnd-item'
  }
  return (
    <div className="drag-n-drop">
      {list.map((grp,grpI) => (
        <div key={grp.title} className="dnd-group">
        <div className="group-title">{grp.title}</div>
          {grp.items.map((item,itemI) => (
            <div
             draggable 
             onDragStart={(e) => handleDragStart(e, {grpI, itemI})} 
             key={item} className={ dragging? getStyles({grpI, itemI}) : "dnd-item"}>
              {item}
            </div>
          ))}
        </div>
      ))}
      </div>
  )
}
