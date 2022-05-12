import './key.css';

export default function Key(props) {
    return(
        <div className={"key "+((props?.styles !== undefined )?props?.styles :"")} onClick={props?.click}>
            {props?.titel}
        </div>
    )
}