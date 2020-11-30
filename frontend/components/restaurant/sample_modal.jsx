import React from 'react'

class SampleModal extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return(
            <div className="modal-background">
                <div className="modal-child">
                    <h1>I am a sample modal</h1>
                    <button onClick={this.props.handleModal}>Close Modal</button>
                </div>
            </div>
        )
    };
};

export default SampleModal;