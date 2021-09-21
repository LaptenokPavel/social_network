import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css';


type ProfileStatusType = {
    status: string
    updateUserStatus:(status: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}


export class ProfileStatus extends React.Component<ProfileStatusType>{


    state:StateType = {
        editMode: false,
        status: this.props.status
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
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        return(
            this.setState ({
                status: e.currentTarget.value} )
        )
}

componentDidUpdate(prevProps: ProfileStatusType, prevState:StateType) {
if (prevProps.status !== this.props.status){
    this.setState ({
        status: this.props.status
    })
}
}

    render() {
        return (
            <div>
                {! this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activatedEditMode}>{this.props.status || '------'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} onBlur={this.deactivatedEditMode} autoFocus value={this.state.status} />
                </div>
                }
            </div>
        )
    }
}

