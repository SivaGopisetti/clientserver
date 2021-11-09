import axios from 'axios';
import React, { useState } from 'react'

function BodyContainer(){ 
    // get request
    const getlistdataData = ()=>{
        axios.get('http://localhost:4000/help').then((response)=>{
        const data = response.data
        let str = '';
        data.forEach(elem => {
            str += `<p> ${elem.name} <p>`
                console.log(elem.name)
                document.getElementById('listdata').innerHTML = str;               
            });                     
         }).catch(()=>{
             console.log('some error in getting data')
         })
     }


    //get request by id 
    const [listdataid, setlistdataid] = useState('')
    function getlistdataId(e){      
    let f =document.getElementById('myinput').value;
    axios.get(`http://localhost:4000/users/${f}`).then((res)=>{
        setlistdataid(res.data.name)
        console.log(res.data.name)

    }).catch((error)=>{
        console.log(error)
    })
}

        //delete by id
        function deletelistdataId(e){      
        let f =document.getElementById('mydeleteinput').value;
        axios.delete(`http://localhost:4000/users/delete${f}`).then((res)=>{      
        }).catch((error)=>{
            console.log(error)
        })}

        //post data
        function postlistdata(){
        let listdataname = document.getElementById('postfavlistdata').value;
        axios.post('http://localhost:4000/users',{
           name: listdataname,
        }).then((res)=>{
            console.log(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
 
    return(
        <>
        <h1 className="h-primary center">listdata</h1>
        <button type="button" className="btn btn-primary" onClick={getlistdataData}>Get listdata</button>
        <p id="listdata"></p>
        <button type="button" className="btn btn-primary" onClick={getlistdataId}>Get listdata By Id</button> 
        <input type="text" name=""  id="myinput"/>
        <p id="listdataid">Your Fav listdata {listdataid}</p>
        <button type="button" className="btn btn-primary" onClick={deletelistdataId}> Delete listdata By Id</button> 
        <input type="text" name=""  id="mydeleteinput"/> <br />
        <button type="button" className="btn btn-primary" onClick={postlistdata}>Post Your Fav listdata </button> 
        <input type="text" name=""  id="postfavlistdata"/>
        

        </>
    );
}
export default BodyContainer;