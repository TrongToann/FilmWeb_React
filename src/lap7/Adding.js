import {Stack, 
    TextField, 
    Button, 
    InputLabel,
    Select, 
     MenuItem, 
     FormControl, 
     Box,
     FormControlLabel,
     Typography
     } from '@mui/material'
import {useState ,useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import Switch from '@mui/material/Switch';
import { getFilm , addFilmData , updateFilmData } from "../store/features/firmSlice"

import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import {useFormik} from 'formik';



function Input() {
  const inputRef = useRef()
  const filmList = useSelector((state) => state.film.data); 
    const dispatch = useDispatch() 
    useEffect(() => {
        dispatch(getFilm())
    }, [])
    const length = filmList.length ;  
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
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

    const formik = useFormik({
        initialValues: {
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
        onSubmit:(values, {resetForm})=>{
            dispatch(addFilmData({id: length + 1, title: title,img : img, trailer : trailer, country: country, time: time, day: day , type: type,year: year,info: info,item: item, backGround: backGround}))
            resetForm() ;
           
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
        setCountry(formik.values.country)
        setTime(formik.values.time)
        setDay(formik.values.day)
        setType(formik.values.type)
        setYear(formik.values.year)
        setInfo(formik.values.info) 
        setItem(formik.values.item)
        setBackGround(formik.values.backGround)
        
    }, [formik.values])


    return (
      <div>
      <div>
        <form onSubmit={formik.handleSubmit} ref={inputRef}>
          
                <Stack direction='column' sx={{width: "500px" ,marginTop: '20px', backgroundColor: 'white', border: '2px solid black', borderRadius: '10px', paddingLeft: '6px', margin: 'auto'}}>
                    <div className='Panner' >Add New Film</div>
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

                  <Button type='submit' variant='contained' sx={{ width : "300px", borderRadius: "10px" , margin : "auto", marginTop: '30px', marginBottom: '30px', backgroundColor : 'black'}}
                  onClick={() => {dispatch(addFilmData({id: length + 1, title: title,img : img, trailer : trailer, country: country, time: time, day: day , type: type,year: year,info: info,item: item, backGround: backGround}))}}
                  
                  >Submit</Button>
              </Stack> 

        </form>
        </div>



        


    </div>    
    );
}

export default Input; 