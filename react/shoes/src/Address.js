import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";


const Post = (props) => {

    const complete = (data) =>{
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)

        props.setcompany({
            ...props.company,
            address:fullAddress,
        })
        props.handleCloseModal(); 
    }
    const handleClose = () => {
        
        props.handleCloseModal();
    };

    return (
        <>
       
       <div className="postmodal">
                <button className="close-button" onClick={handleClose}>x</button>
                <DaumPostcode
                    autoClose
                    onComplete={complete}
                />
            </div>
        </>
    );
};

export default Post;