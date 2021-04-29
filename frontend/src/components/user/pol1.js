import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import './pollstyle.css';

const Poll1 = () => {
    const [vote, setVote] = useState([]);

    useEffect(() => {
        Axios.get("https://voteapp-1.herokuapp.com/vote/can").then((res) => {
            setVote(res.data);
        });
    }, []);

    function voterf(id){
        Axios.put(`https://voteapp-1.herokuapp.com/vote/addvote/${id}`).then((res) =>{
            console.log(res);
            if(res.status===200){
                alert(res.data.message);
                window.location.href="/vote";
                sessionStorage.setItem("vote" , "true");
            }
        })
    }

    return (
        sessionStorage.getItem("user")==="true" ?
        <div className="body"> 
                        <div>
                        <a href="/vote" className="but1">Back</a>
                        <a href="/" onClick={()=>{sessionStorage.clear()}} className="but2">Logout</a>
                        </div>
                        <div className="container-fluid d-flex justify-content-center">
                            <div className="row">
                                
                                {
            vote ? vote.map((i, j) => {
                return (
                    <>
                    <div className="col-md-4">
                                    <div className="card text-center" style={{width:"20rem",height:"28rem"}}>
                                        <div className="overflow">
                                            <img src={
                                                    i.imgurl
                                                }
                                                alt="logo" className="card-img-top shadow" height="300" />
                                        </div>
                                        <div className="card-body text-dark">
                                            <h4 className="card-title">
                                                {
                                                i.name
                                            }</h4>
                                            <p className="card-title" style={{color:"red"}}>{i.party}</p>
                                            <button className="btn btn-outline-success" onClick= {()=>{voterf(i._id)}} >Vote</button>
                                        </div>
                                    </div>
                                    </div>
                                    </>
                );
            }) : null}
                    
                                
                            </div>
                        </div>
                    
        </div> :  <h1 style={{
            fontSize:'2rem',
            textAlign:"center",
            marginTop:"20%",
        }}> oops!!!You have to login to see this page.... </h1>
    )
}

export default Poll1;
