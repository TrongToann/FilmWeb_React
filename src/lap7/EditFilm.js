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
import { getFilm , addFilmData, updateFilmData } from "../store/features/firmSlice"

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
        onSubmit:(values, {resetForm})=>{
            console.log("âsas")
            dispatch(updateFilmData({id: id, img : img, trailer : trailer})) 
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


    return (
      <div>
        <div className='overlay2'>
            <div className='formForEdit'>
            <form onSubmit={formik.handleSubmit} ref={inputRef}>
                <Stack direction='column' sx={{width: "500px" ,marginTop: '20px', backgroundColor: 'white', border: '2px solid black', borderRadius: '10px', paddingLeft: '6px'}}>
                    <div className='Panner' >Edit Film</div>
                    <TextField
                    label='Id'
                    name="id"
                    sx={{marginTop: '10px', width: '460px', marginLeft: '10px'}} 
                    value={formik.values.id} 
                    onChange={formik.handleChange}
                    />
                    {formik.errors.id && (<Typography variant="caption" color="red">{formik.errors.id}</Typography>)}

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


                    <Button type='submit' variant='contained' sx={{ width : "300px", borderRadius: "10px" , margin : "auto", marginTop: '30px', marginBottom: '30px', backgroundColor : 'black'}}  onClick={()=> {
                                                            dispatch(updateFilmData({id: id, img : img, trailer : trailer})) ;  
                                    }}  >Submit</Button>
                </Stack> 
            </form>
            </div>
        </div>
      </div>
    );
}

export default Input; 