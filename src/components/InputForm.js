import React from "react";

const style = {
    form: {
        width: "100%",
        margin: "10px"
    },
    input: {
        width: "2em",
        textAlign: "center"
    },
    label: {
        marginRight: "5px"
    }
}


const InputForm = ({ onChange, title, placeholder }) => {
    return (
        <form style={style.form}>
            <label style={style.label}>{title}</label>
            <input style={style.input} onChange={onChange} placeholder={placeholder} />
        </form>
    )
}

export default InputForm;
