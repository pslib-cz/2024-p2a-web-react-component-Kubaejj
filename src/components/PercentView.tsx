// kdyz komponenta tak musim mit
//constantu do ktere ulozim funkci ktera musi vracet komponentu v reactu,
import { FC } from "react"; // function component = FC
import style from './PercentView.module.css' // css module
/*
type PercentViewType = {
value: number,
max: number,
color: (percent: number) => string
}
// ...zbytek = rest operator - vsechny ostatni propsy
// spread {value, max} 
const PercentView: FC<PercentViewType> = ({ max, ...zbytek}) => {
    console.log(zbytek)
    return (
        <div className={style.PercentView}>
        {max}
        </div>
    )
}
    */
type PercentViewType = {
    value: number,
    max: number,
    makeColor: (percent: number) => string // props = delagat c#
}


const PercentView: FC<PercentViewType> = ({ max, value, makeColor }) => { //základ, export - explicitně     nebyla by to react komponenta kdyby jsme tam napsal jen PercentViewType bez fc

    return (
        <div className={style.percentview}>
            <p>{Math.round((value / max) * 100)}%</p>
            <div className={style.percentviewbar}>
                <div className={style.bar} style={{ backgroundColor: makeColor(value / max), width: `${(value / max) * 100}%` }}>

                </div>
            </div>
        </div>
    )
}


/* nejjednodusi komponenta a nejvic basic
export const PercentView = () => {
    return (
        <div>
            Ahoj
        </div>
    )
}

*/



export default PercentView
