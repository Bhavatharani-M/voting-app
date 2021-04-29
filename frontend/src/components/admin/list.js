import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import  '../user/pollstyle.css';

const List = () => {
    const [vote, setVote] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3003/vote/can").then((res) => {
            setVote(res.data);
        });
    }, []);


    return (
        sessionStorage.getItem("admin")==="true" ?
        <div className="body"> 
                        <div>
                        <a href="/addcan" className="but1">Add candidate</a>
                        <a href="/admin" onClick={()=>{sessionStorage.clear()}} className="but2">Logout</a>
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
                                            <h4 className="card-title">Votes:{i.votes}</h4>
                                        </div>
                                    </div>
                                    </div>
                                    </>
                );
            }) : null}
                    
                                
                            </div>
                        </div>
                    
        </div> : <h1 style={{
            fontSize:'2rem',
            textAlign:"center",
            marginTop:"20%",
        }}> oops!!!You have to login to see this page.... </h1>
    )
}

export default List;
