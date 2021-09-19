import React from "react";
import s from './ProfileInfo.module.css';

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType>{

    state = {
        editMode: false
    }

    activatedEditMode = () => {
                this.setState({
                    editMode: true
                })
    }

    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {! this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activatedEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onBlur={this.deactivatedEditMode} autoFocus value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}

