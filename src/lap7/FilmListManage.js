import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import { CardMedia } from '@mui/material';
import { Link, useNavigate } from "react-router-dom"; 
import { shadows } from '@mui/system';
import Switch from '@mui/material/Switch';
import {Stack,
    Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Avatar,
  TextField,
  FormControlLabel,
  Button,
  IconButton,
} from "@mui/material";
import userEvent from "@testing-library/user-event";
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import {useFormik} from 'formik';
import {useState ,useEffect, useRef} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getFilm , deleteFilmData, updateFilmData, addFilmData } from "../store/features/firmSlice"
function FilmListManage() {
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
     const [detailFilm , setDetailFilm] = useState([]) ;
    const handelLink = (film) => { 
            setEditFilm(film) ;
            document.getElementById('poppp').classList.toggle("show") ;
    }
    const handelLinkDetail = (film) => { 
            setDetailFilm(film) ;
            document.getElementById('popppDetail').classList.toggle("show") ;
    }
    const handelAdd = () => {
            document.getElementById('popppAdd').classList.toggle("show") ;
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
        <div style={{backgroundColor: 'rgb(241,239,241)', paddingBottom: '200px'}}>
            <h2 style={{textAlign: 'center', fontWeight: 'bold', paddingTop: '20px' }}>List of Films</h2> 
            <div className="users">
            <Button
              variant="contained"
              sx={{marginBottom: "10px", left: '45.5%', backgroundColor:'black' }}
              onClick={()=> {handelAdd()}} 
            >
              Add New Film 
            </Button> 
            <Box 
                sx={{
                boxShadow: 3,
                width: '1200px',
                height: 'auto',
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                p: 1,
                m: 1,
                borderRadius: 2,
                margin: 'auto' ,
                
                 }}
            >
                <table style={{maxWidth: '1200px', margin: 'auto' }}> 
                <thead style={{fontWeight: '800', backgroundColor: 'rgb(252,251,253)', borderBottom: '2px solid rgb(235,233,235)'}}>
                    <tr >
                        <th>Year</th>
                        <th style={{paddingLeft: '50px'}}   >Image</th>
                        <th>Title</th>
                        <th style={{paddingRight: '50px'}}>Country</th>
                        <th>Time</th> 
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody  style={{backgroundColor: 'rgb(255,255,255)' }}>
                    {filmList.map((film, index) => (
                        <tr key={film.id} className="hoverBeauti" style={{ borderBottom: '2px solid rgb(235,233,235)'}}>
                            <td>{film.id}</td>
                            <td>
                                <img src={film.img} style={{width:'150px' , height:'100px', objectFit: 'contain'}} />
                            </td>
                            <td>{film.title}</td>
                            <td style={{paddingRight: '50px'}}>{film.country}</td>
                            <td>{film.time}</td>
                            <td>
                                <div style={{backgroundColor: '#e8fadf' , color:'#71dd37', maxWidth: '90px' , textAlign: 'center', borderRadius: '5px', cursor: 'pointer' }}
                                onClick={()=> {handelLinkDetail(film)}} 
                                >
                                    View Detail
                                </div>
                            </td>
                            <td>
                                <div style={{backgroundColor: '#d7f5fc' , color:'#03c3ec', maxWidth: '90px' , textAlign: 'center', borderRadius: '5px', cursor: 'pointer' }}
                                 onClick={() => handelLink(film)}
                                >
                                    Edit Film
                                </div>
                            </td>
                            <td>
                                <div style={{backgroundColor: '#ffe0db' , color:'#ff3e1d', maxWidth: '90px' , textAlign: 'center', borderRadius: '5px', cursor: 'pointer' }}
                                 onClick={(event)=> {
                        if(!window.confirm('Sure ?'))  return 
                         dispatch(deleteFilmData({id : film.id}));  
                        }}
                                >
                                    Delete Film
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </Box>
            </div>



                <div>
                    <div className="overlayDetail" id="popppDetail" >
                        <div className='formForDetail'>
                        <form onSubmit={formik.handleSubmit} ref={inputRef}>
                                <div className='Panner' >{detailFilm.title}</div>
                                        <img src={detailFilm.img} style={{width:'170px' , height:'170px', objectFit: 'fill', position: 'absolute', top:'-35px', left: '15%', borderRadius: '50%', border: '4px solid black'}} />
                                <Box 
                        sx={{
                        boxShadow: 3,
                        width: '920px',
                        height: 'auto',
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                        color: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                        p: 1,
                        m: 1,
                        borderRadius: 2,
                        margin: 'auto' ,
                        border: '6px solid black '
                        }}
                    >
                        <table style={{maxWidth: '920px', margin: 'auto' }}> 
                        <thead style={{fontWeight: '800', backgroundColor: 'rgb(252,251,253)', borderBottom: '2px solid rgb(235,233,235)'}}>
                            <tr >
                                <th>Info</th>
                                <th style={{paddingLeft: '30px'}}>Day</th>
                                
                                <th>Type</th>
                                
                            </tr>
                        </thead>
                        <tbody style={{backgroundColor: 'rgb(255,255,255)' }}>
                            
                                <tr key={detailFilm.id} style={{ borderBottom: '2px solid rgb(235,233,235)'}}>
                                    <td>{detailFilm.info}</td>
                                    <td style={{paddingLeft: '30px', minWidth: '300px'}} >
                                        {detailFilm.day}
                                    </td>
                                    
                                    <td>{detailFilm.type}</td>
                                    
                                    
                                </tr>
                                <tr>
                                     <td> 
                                        <span style={{fontWeight: '600'}}  >BackGround:</span> 
                                        <img src={detailFilm.backGround} style={{width:'300px' , height:'200px', objectFit: 'contain'}} />
                                    </td>

                                   
                                    <td style={{paddingRight: '50px'}}>
                                        <span style={{fontWeight: '600', display: 'block'}}  >Trailer:</span> 
                                        {detailFilm.trailer}
                                    </td>
                                    <td>
                                        <span style={{fontWeight: '600', display: 'block'}}  >Year:</span> 
                                        {detailFilm.year}</td>
                                </tr>
                        </tbody>
                        </table>
                        <div style={{display : 'flex'}}>
                                <Button variant='contained' sx={{ width : "180px", borderRadius: "10px" , margin : "auto", marginTop: '30px', marginBottom: '10px',backgroundColor : 'black'}} 
                                onClick={()=> {handelLinkDetail(detailFilm)}} 
                                 >
                                    Done
                                </Button>   
                            </div>  
                        </Box>
                        </form>
                        </div>
                    </div>
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






    <div className="overlayAdd" id="popppAdd" >
                <div className='formForAdd'>
         <div>
        <form onSubmit={formik.handleSubmit} ref={inputRef}>
          
                <Stack direction='column' sx={{width: "600px" ,marginTop: '20px', backgroundColor: 'white', border: '2px solid black', borderRadius: '10px', paddingLeft: '6px', paddingRight: '9px', margin: 'auto'}}>
                    <div className='PannerAdd' >Add New Film</div>
                    <div style={{display: 'flex'}}>
                         <TextField
                            label='Title'
                            name="title"
                            sx={{marginTop: '10px', width: '460px', marginLeft: '10px'}} 
                            value={formik.values.title} 
                            onChange={formik.handleChange}
                            />
                            {formik.errors.title && (<Typography variant="caption" color="red">{formik.errors.title}</Typography>)}

                        <TextField
                            label='Image'
                            name="img"
                            sx={{marginTop: '10px', width: '460px', marginLeft: '10px'}} 
                            value={formik.values.img} 
                            onChange={formik.handleChange}
                            />
                            {formik.errors.img && (<Typography variant="caption" color="red">{formik.errors.img}</Typography>)}


                    </div>
                  <div style={{display: 'flex'}}>
                        <TextField
                        label='Trailer'
                        name="trailer"
                        sx={{marginTop: '10px', width: '460px', marginLeft: '10px'}} 
                        value={formik.values.trailer} 
                        onChange={formik.handleChange}
                        />
                        {formik.errors.trailer && (<Typography variant="caption" color="red">{formik.errors.trailer}</Typography>)}

                        <TextField
                        label='Country'
                        name="country"
                        sx={{marginTop: '10px', width: '460px', marginLeft: '10px'}} 
                        value={formik.values.country} 
                        onChange={formik.handleChange}
                        />
                        {formik.errors.country && (<Typography variant="caption" color="red">{formik.errors.country}</Typography>)}
                    </div>

                    <div style={{display: 'flex'}}>
                            <TextField
                            label='Time'
                            name="time"
                            sx={{marginTop: '10px', width: '460px', marginLeft: '10px'}} 
                            value={formik.values.time} 
                            onChange={formik.handleChange}
                            />
                            {formik.errors.time && (<Typography variant="caption" color="red">{formik.errors.time}</Typography>)}

                            <TextField
                            label='Day'
                            name="day"
                            sx={{marginTop: '10px', width: '460px', marginLeft: '10px'}} 
                            value={formik.values.day} 
                            onChange={formik.handleChange}
                            />
                            {formik.errors.day && (<Typography variant="caption" color="red">{formik.errors.day}</Typography>)}
                </div>
                 <div style={{display: 'flex'}}>
                  <TextField
                  label='Type'
                  name="type"
                  sx={{marginTop: '10px', width: '460px', marginLeft: '10px'}} 
                  value={formik.values.type} 
                  onChange={formik.handleChange}
                  />
                  {formik.errors.type && (<Typography variant="caption" color="red">{formik.errors.type}</Typography>)}

                  <TextField
                  label='Year'
                  name="year"
                  sx={{marginTop: '10px', width: '460px', marginLeft: '10px'}} 
                  value={formik.values.year} 
                  onChange={formik.handleChange}
                  />
                  {formik.errors.year && (<Typography variant="caption" color="red">{formik.errors.year}</Typography>)}
                </div>

                  <TextField
                  label='Info'
                  name="info"
                  sx={{marginTop: '10px', width: '460px', marginLeft: '10px'}} 
                  value={formik.values.info} 
                  onChange={formik.handleChange}
                  />
                  {formik.errors.info && (<Typography variant="caption" color="red">{formik.errors.info}</Typography>)}

                    <TextField
                  label='Item'
                  name="item"
                  sx={{marginTop: '10px', width: '460px', marginLeft: '10px'}} 
                  value={formik.values.item} 
                  onChange={formik.handleChange}
                  />


                  <TextField
                  label='BackGround'
                  name="backGround"
                  sx={{marginTop: '10px', width: '460px', marginLeft: '10px'}} 
                  value={formik.values.backGround} 
                  onChange={formik.handleChange}
                  />
                  {formik.errors.backGround && (<Typography variant="caption" color="red">{formik.errors.backGround}</Typography>)}

                  <FormControlLabel sx={{marginLeft: '100px'}} control={<Switch/>} label="Agree to terms and conditions." name='agree' value={formik.values.agree} onClick={formik.handleChange}/>
                  {formik.errors.agree && (<Typography variant="caption" color="red">{formik.errors.agree}</Typography>)}

                  <div style={{display: 'flex'}} >
                    <Button type='submit' variant='contained' sx={{ width : "200px", borderRadius: "10px" , margin : "auto", marginTop: '30px', marginBottom: '30px', backgroundColor : 'black'}}
                  onClick={() => {dispatch(addFilmData({id: length + 1, title: title,img : img, trailer : trailer, country: country, time: time, day: day , type: type,year: year,info: info,item: item, backGround: backGround}))}}
                  
                  >Submit</Button>
                  <Button type='submit' variant='contained' sx={{ width : "200px", borderRadius: "10px" , margin : "auto", backgroundColor : 'black'}}
                  onClick={()=> {handelAdd()}} 
                  
                  >Cancel</Button>
                  </div>
              </Stack> 

        </form>
        </div>                                   

    </div>
    </div>



        </div>
    )
}
export default FilmListManage ;