import React from "react"

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

        return <input type="text" className="square" value={val} onChange={this.handleChange} />
    }
}
