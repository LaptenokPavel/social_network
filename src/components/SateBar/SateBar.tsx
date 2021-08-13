import React from "react";
import s from './SateBar.module.css';
import {SateBarPage} from "../../redux/satebar-reducer";
import {DialogItems} from "../Dialogs/DialogsItem/DialogItems";

type SateBar = {
    valueSateBar:SateBarPage[]
}
const SateBar: React.FC<SateBar> = (props) => {
    return (
      <div>


      </div>
    )
}
export default SateBar;