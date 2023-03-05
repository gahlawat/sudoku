import React from 'react'

const inputStyle = {
    width: '2rem',
    height: '2rem',
};

export default class Square extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event: any) {
        this.props.onInputChange(event, this.props.row, this.props.col)
    }

    render() {
        let val = this.props.value
        if (! val) {
            val = ''
        }

        return <input style={inputStyle} type='text' value={val} onChange={this.handleChange} />
    }
}
