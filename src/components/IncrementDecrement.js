import {useDispatch, useSelector} from "react-redux";
import {decNumber, incNumber} from "../action";

export const IncrementDecrement = () => {
    const numberState = useSelector((state) => state.changeNumber)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Increment Decrement Example</h1>
            <div className="container">
                <h4>React Redux Example</h4>
                <div className="quantity">
                    <a className="quantity_minus" onClick={() => dispatch(decNumber())}><span>➖</span></a>
                    <input name={"quantity"} type="text" value={numberState}/>
                    <a className="quantity_minus" onClick={() => dispatch(incNumber())}><span>➕</span></a>
                </div>
            </div>
        </>
    )
}
