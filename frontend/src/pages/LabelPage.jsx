import React from 'react'

export default function LabelPage(){
  return (
    <div>
      <h2>Nutrition Label (Sample)</h2>
      <div className="label-card">
        <div className="label-title">Salty Skipper - Rock Nutrition Facts</div>
        <div><strong>Serving Size:</strong> 1 rock</div>
        <div><strong>Amount Per Serving:</strong> Salt 110 - 130 g</div>
        <hr />
        <div><strong>Ingredients:</strong></div>
        <div>silica (SiO₂), aluminum oxide (Al₂O₃), iron oxide (Fe₂O₃)</div>
        <p style={{color:'crimson', marginTop:12}}><strong>Note:</strong> Not for Consumption</p>
      </div>
    </div>
  )
}
