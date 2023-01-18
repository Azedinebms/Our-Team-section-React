import React, { Component } from "react";


class Member extends Component {

    render() {
        const {pers}=this.props;
        const themember=pers.map(perss => {
   
                return perss.count > 1 ? (
                    <div key={perss.id}>
                        <div>{perss.id}</div>
                        <div>{perss.name}</div>
                        <div>{perss.age}</div>
                        <div>______________________</div>
                    </div>
                ) : null })
        return (
            <div>
                {themember}
            </div>
        )
    }
}



export default Member;