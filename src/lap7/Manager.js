import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import { CardMedia } from '@mui/material';
import { Link, useNavigate } from "react-router-dom"; 
import {Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Avatar,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import userEvent from "@testing-library/user-event";
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import {useFormik} from 'formik';
import {useState ,useEffect, useRef} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getFilm , deleteFilmData, updateFilmData } from "../store/features/firmSlice"
function Manager() {
    let navigate = useNavigate();
    const filmList = useSelector((state) => state.film.data); 
    const dispatch = useDispatch() 
    useEffect(() => {
        dispatch(getFilm())
    }, [])
    const inputRef = useRef()
    const length = filmList.length ; 
    const [title, setTitle] = useState('');
    const [id, setId] = useState('');
    const [country, setCountry] = useState('');
    const [img, setImg] = useState('');
    const [trailer, setTrailer] = useState(''); 
    const [time, setTime] = useState('');
    const [day, setDay] = useState('');
    const [type, setType] = useState('');
    const [year, setYear] = useState('');
    const [info, setInfo] = useState(''); 
    const [item, setItem] = useState('');
    const [backGround, setBackGround] = useState(''); 
    const handleChange = () => {
            navigate("/FilmList/adding"); 
    }
     const [editFilm , setEditFilm] = useState([]) ;
    const handelLink = (film) => { 
            setEditFilm(film) ;
            document.getElementById('poppp').classList.toggle("show") ;
    }

    const formik = useFormik({
        initialValues: {
            id : '' ,
            title: '',
            country: '',
            img: '',
            trailer: '',
            time: '',
            day: '',
            type: '',
            year: '',
            info: '',
            item: '',
            backGround: '',
            agree:false
            
        },
        
        validationSchema: Yup.object({
            id: Yup.string().required("Required.").min(1, "Must be 1 characters or more"),
            title: Yup.string().required("Required.").min(4, "Must be 4 characters or more"),
            country: Yup.string().required("Required.").min(4, "Must be 4 characters or more"),
            img: Yup.string().required("Required.").min(4, "Must be 4 characters or more"),
            trailer: Yup.string().required("Required.").min(4, "Must be 4 characters or more"),
            time: Yup.string().required("Required.").min(4, "Must be 4 characters or more"),
            day: Yup.string().required("Required.").min(4, "Must be 4 characters or more"),
            type: Yup.string().required("Required.").min(4, "Must be 4 characters or more"),
            year: Yup.string().required("Required.").min(4, "Must be 4 characters or more"),
            info: Yup.string().required("Required.").min(4, "Must be 4 characters or more"),
            item: Yup.string().required("Required.").min(4, "Must be 4 characters or more"),
            backGround: Yup.string().required("Required.").min(4, "Must be 4 characters or more"),
            agree: Yup.boolean().oneOf([true], "The terms and conditions must be accepted.")
        })
    });
    

    useEffect(() => {
        setId(formik.values.id)
        setTitle(formik.values.title)
        setImg(formik.values.img)
        setTrailer(formik.values.trailer)
        setCountry(formik.values.country)
        setTime(formik.values.time)
        setDay(formik.values.day)
        setType(formik.values.type)
        setYear(formik.values.year)
        setInfo(formik.values.info) 
        setItem(formik.values.item)
        setBackGround(formik.values.backGround)
        
    }, [formik.values])

    return(
        <div>
            <h2 style={{textAlign: 'center', fontWeight: 'bold', paddingTop: '20px' }}>List of Films</h2> 
            <div className="users">
    
        <>   
            <Button
              variant="contained"
              sx={{marginBottom: "10px", left: '45.5%', backgroundColor:'black' }}
              onClick={handleChange}
            >
              Add New Film 

            </Button>    
          {filmList.map((film, index) => (
            <div>
                <Accordion id={index}  style={{maxWidth : '1200px', margin: 'auto'}} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ marginBottom : '10px' , boxShadow:' 0px 0px 3px 1px rgb(122, 119, 119) '}} 
              >
                <div style={{paddingTop: "18px", textAlign : "center" , margin: "auto" }} >{film.id}</div>
                <div className="users-info">
                  <div className="avatar">
                    <img src={film.img}  style={{width: "150px" , height: "100px", objectFit: "contain"}} />
                  </div>
                  <div className="users-password" style={{paddingTop: "18px", textAlign : "center" , margin: "auto" }}> 
                    <span style={{ fontWeight: "bold", }}>Title:</span>{" "}
                    {film.title}
                  </div>
                  
                  <div className="users-password" style={{paddingTop: "18px", textAlign : "center" , margin: "auto" }}> 
                    <span style={{ fontWeight: "bold", }}>Country:</span>{" "}
                    {film.country}
                  </div>
                  
                  <div className="users-password" style={{paddingTop: "18px", textAlign : "center" , margin: "auto" }}> 
                    <span style={{ fontWeight: "bold", }}>Time:</span>{" "}
                    {film.time}
                  </div>
                    </div>
              </AccordionSummary>
              <AccordionDetails>
                <div >
                  <div style={{display: 'flex'}}>
                     <div className="email">
                        <span style={{ fontWeight: "bold", }}>Day:</span>{" "}
                        {film.day}
                      </div>
                      <div className="email">
                        <span style={{ fontWeight: "bold", }}>Type:</span>{" "}
                        {film.type}
                      </div>
                       <div className="users-username">
                          <span style={{ fontWeight: "bold" }}>Year:</span>{" "}
                          {film.year}
                      </div>
                      
                  </div>
                  <div style={{display: 'flex'}}>
                     <div className="email">
                        <span style={{ fontWeight: "bold", }}>BackGround:</span>{" "}
                        <img src={film.backGround} style={{width: "150px" , height: "150px", objectFit: "contain"}} />
                      </div>
                       <div className="users-username">
                          <span style={{ fontWeight: "bold" }}>Item:</span>{" "}
                          <img src={film.item} style={{width: "150px" , height: "150px", objectFit: "contain"}} />
                      </div>
                      <div className="email">
                        <span style={{ fontWeight: "bold", }}>Info:</span>{" "}
                        {film.info}
                      </div>
                  </div>
                 


                  <div>
                    
                    <Button style={{
                                     backgroundColor: "rgb(16, 33, 57)",
                                    }} variant="outlined"  onClick={() => handelLink(film)} >Update</Button>
                  </div>
                  <IconButton aria-label="delete" color="error"
                      onClick={(event)=> {
                        if(!window.confirm('Sure ?'))  return 
                        console.log("đã xóa")
                        // dispatch(deleteFilmData({id : film.id}));  
                        }}>
                      <DeleteIcon />
                  </IconButton>
                </div>
              </AccordionDetails>
            </Accordion>
            </div>
          ))}
          
        </>
      

    </div>






     <div>
            <div className="overlay2" id="poppp" >
                <div className='formForEdit'>
                <form onSubmit={formik.handleSubmit} ref={inputRef}>
                    <Stack direction='column' sx={{width: "500px" ,marginTop: '20px', backgroundColor: 'white', border: '2px solid black', borderRadius: '10px', paddingLeft: '6px'}}>
                        <div className='Panner' >Edit Film</div>
                        <TextField
                        label='Id'
                        name="id"
                        sx={{marginTop: '10px', width: '460px', marginLeft: '10px'}} 
                        value={editFilm.id}  
                        
                        />

                        <TextField
                        label='Image'
                        name="img"
                        sx={{marginTop: '10px', width: '460px', marginLeft: '10px'}} 
                        value={formik.values.img} 
                        onChange={formik.handleChange}
                        />
                        {formik.errors.img && (<Typography variant="caption" color="red">{formik.errors.img}</Typography>)}

                        <TextField
                        label='Trailer'
                        name="trailer"
                        sx={{marginTop: '10px', width: '460px', marginLeft: '10px'}} 
                        value={formik.values.trailer} 
                        onChange={formik.handleChange}
                        />
                        {formik.errors.trailer && (<Typography variant="caption" color="red">{formik.errors.trailer}</Typography>)}

                      <div style={{display : 'flex'}}>
                        <Button type='submit' variant='contained' sx={{ width : "180px", borderRadius: "10px" , margin : "auto", marginTop: '30px', marginBottom: '10px', backgroundColor : 'black'}}  onClick={()=> {
                                                                dispatch(updateFilmData({id: editFilm.id, img : img, trailer : trailer})) ;  
                                        }}  >Submit</Button>
                        <Button variant='contained' sx={{ width : "180px", borderRadius: "10px" , margin : "auto", marginTop: '30px', marginBottom: '10px',backgroundColor : 'black'}} onClick={() => handelLink(editFilm)} >Cancel</Button>   
                      </div>  
                                     
                    </Stack> 
                </form>
                </div>
            </div>
      </div>
        </div>
    )
} 
export default Manager ;