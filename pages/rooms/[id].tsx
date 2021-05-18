import React from "react";
import { useRouter } from "next/router";
import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { Profile } from "../../components/Profile";
import { Header } from "../../components/Header";
import BackButton from "../../components/BackButton";
import Room from "../../components/Room";
import Axios from '../../core/axios'


export default function RoomPage({room}) {

  return (
    <>
    <Header/>
    <div className='container mt-40'>
    <BackButton title='All rooms' href='/rooms'/>

    </div>
    <Room title={room.title}/>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  


  
  try{
    const { data } = await Axios.get('/rooms.json')
    const roomid = ctx.query.id
    const room = data.find( obj => obj.id === roomid)
    return{
      props:{
        room,
      }, // Данная функция должна вернуть обьект props
     }
  }catch(error){
    props:{
      rooms:[]
    }
  }
}
