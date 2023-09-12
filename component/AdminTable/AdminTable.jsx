import React, { useState,useEffect } from "react";
const Infolist = () => {
    const[infoData,setInfoData] = useState(null);
    useEffect(()=>{
        fetch("").then((res)=>{
            return res.json();
        }).then((resp)=>{
            console.log(resp)
        }).catch((err)=>{
            console.log(err.message)
        })
    },[])

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>FULLNAME</td>
                        <td>organization</td>
                    </tr>
                </thead>

                <tbody>

                </tbody>
            </table>
        </div>
    )
}