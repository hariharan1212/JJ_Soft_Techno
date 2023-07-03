import React from "react";
import ContentHeadder from "./content_headder.js"
import SummaryHeadder from "./content_summary_headder.js";
import SummaryDiv from "./meeting_summar_div.js";

 export default function Contentbar(){
    return (
        <>
        <div className="contentbar">
            <div>
            <ContentHeadder/>
            </div>
            <div>
            <SummaryHeadder/>
            </div>
            <div>
            <SummaryDiv/>
            </div>
        </div>
        </>
    )
 }