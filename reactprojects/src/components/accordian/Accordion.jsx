//single selection accordian
import React from 'react'
import data from './data'
import { useState } from 'react'

export function Accordion() {

  const [selected, setSelected] = useState(null);
  const [isMultiSelectionEnabled, setIsMultiSelectionEnabled] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  function handleSingalSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiSelected = [...multiSelected];
    
    const isAlreadySelected = cpyMultiSelected.indexOf(getCurrentId)

    console.log(isAlreadySelected);

    if (isAlreadySelected === -1) cpyMultiSelected.push(getCurrentId);
    else cpyMultiSelected.splice(isAlreadySelected, 1);

    setMultiSelected(cpyMultiSelected); 
  }

  console.log(selected);
  
  return (
    <div className="wrapper">
      <button onClick={() => setIsMultiSelectionEnabled(!isMultiSelectionEnabled)} className='btn'>Enable Multi Selection</button>
      <div className="accordion">
        {
          data && data.length > 0 ?
            data.map(dataItem => <div className='item' key={dataItem.id}>
              <div onClick={isMultiSelectionEnabled ? 
                () => handleMultiSelection(dataItem.id) : 
                () => handleSingalSelection(dataItem.id)
                } className="title">

                <h3>{dataItem.question}</h3>
                <span>
                  {(isMultiSelectionEnabled
                    ? multiSelected.includes(dataItem.id)
                    : selected === dataItem.id)
                    ? "−"
                    : "+"}
                </span>
              </div>
              {
                (isMultiSelectionEnabled
                  ? multiSelected.includes(dataItem.id)
                  : selected === dataItem.id) && (
                  <div className='content'>
                    {dataItem.answer}
                </div>  
                )
              }
              </div>)

            : <div>No data found</div>
        }

      </div>
    </div>
  )
}