import React from 'react'
import "./YoutubeCard.css"
import {Button, Typography} from "@mui/material";
import { FaTrash } from 'react-icons/fa';
import {useDispatch} from 'react-redux';
import { deleteYoutube, getUser } from '../../action/user'
const YoutubeCard = ({
  url ="https://www.youtube.com/channel/UClXZ6LP5dubwI1We2fVkE7g",
  title = "NARC TECH",
  image,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
   await dispatch(deleteYoutube(id));
    dispatch(getUser());
  }
  return (
    <div className="youtubeCard">
    <a href={url} target="blank">
    <img src={image} alt="Video"/>
      <Typography>{title}</Typography>
    </a>
    {isAdmin && (
      <Button
      style={{
        margin:"auto",
        display:"block",
        color:"rgba(40,40,40,0.7)"
      }}

      onClick={()=>deleteHandler(id)}
      ><FaTrash/></Button>
    )}
    </div>
  );
}

export default YoutubeCard;