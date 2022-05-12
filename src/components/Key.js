import './key.css';

export default function Key(props) {
    let myStyle = "key "
        + ((props?.styles !== undefined) ? props?.styles : "")
        + ((props?.type === "funtion") ? " keyfuntion " : "")
        + ((props?.type === "clear") ? " keyclear " : "")
        


    return (
        <div className={myStyle} onClick={props?.click}>
            {props?.titel}
        </div>
    )
}