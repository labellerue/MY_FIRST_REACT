import React, { useState, useEffect } from 'react';
import { CountButton, CountButton2 } from './CountButton';
import Leeso from './CountButton';
import axios from 'axios';

console.log('React =>', React);
const Count = () => {
    console.log('useEffect =>', useEffect);
    const [count, setCount] = useState(0);
    const [userData, setUserData] = useState([]);
    console.log(userData);


    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(res=> {
            setUserData(res.data);
        }).catch(err => {
            console.error(err)
        })
    }, [])
    
    const onUp = () => {
        setCount(count + 1);
    }

    const onDown = () => {
        if(count === 0 ){
        }else{
            setCount(count - 1);
        }
    }
    
    const setZero = () => {
        setCount(0);
    }

    // const UserInfos = () => {
    //     const result = userData.map((user, index, array) => {
    //     return <div>Index : {index} / ID : {user.id} , title: {user.title}</div>})
    //     console.log(result);
    //     return result        
    // }

    const UserInfos = props => {
        // const result = props.userInfos.map(function(user, index, array) {
        const result = props.userInfos.map((user, index) => {
            return <div>Index : {index} / ID : {user.id} , title: {user.title}</div>
        })
        return result        
    }

    return (
        <div className="App">
            {/* {userData.map((user, index, array) => {
                // console.log(index);
            return <div>Index : {index} / ID : {user.id} , title: {user.title}</div>
            })} */}
            <UserInfos userInfos={userData}/>
            <div style={{ width: '100px', height: '50px', backgroundColor:'aqua'}}>Counter : {count}</div>
            <div>
                <CountButton title='+' up={onUp} />
                <CountButton title='-' up={onDown} />
                <CountButton title='초기화' up={setZero} />
                <Leeso title='Leeso' up={setZero} />
            </div>
        </div>
    )
}
// const index = 0;
// let test = ` 구인수 구인수 구인수 구인수 구인수  ${index} `;
// https://chanspark.github.io/2017/11/28/ES6-%EA%BF%80%ED%8C%81.html



export default Count;