import React from "react";
import SummaryDivlhs from "./summary_div_lhs";
import SummaryDivrhs from "./summary_div_rhs";

export default function SummaryDiv(){

    return (
        <>  
        <div className="Summarydiv">
            <div style={{width:"15%"}}>
            <SummaryDivlhs/>
            </div>
            <div style={{width:"85%"}}>
            <SummaryDivrhs/>
            </div>
        </div>
            
        </>
    )
}