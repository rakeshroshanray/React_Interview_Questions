import React from 'react'
import {useState,useEffect} from 'react'

function Accordion() {
  const[activeIndex,setActiveIndex] = useState("null");
  const toggleActiveIndex = (index) => {
    setActiveIndex(index === activeIndex? "null" : index)
  }

  const data = [
    {title: "Accordion Header 1",
     content: "this is the content for the accordion",
     action: ["action1", "action2"],

     },
    {title: "Accordion Header 2",
     content: "this is the content for the accordion",
     action: ["action3", "action4"],
     },
  ]

  return (
    <div>
      <h1>Accordion Demo</h1>
      <div>
        {
          data.map((item,index)=> (
            <div>
              <div
                  onClick ={() => toggleActiveIndex(index)} 
              >
                <h3>{item.title}</h3>
                <button>
                  {activeIndex === index? "Close" : "Open"}
                </button>
              </div>
              { activeIndex === index &&(
                <div>
                  <p>{item.content}</p>
                  <div>
                    {item.action.map((action, index)=> (
                      <button >{action}</button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )

          )
        }
      </div>
    </div>
  )
}

export default Accordion;