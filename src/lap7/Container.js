import {faCalendarDay,faHourglass,faBars} from '@fortawesome/free-solid-svg-icons'
import {faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Typography ,Card , CardActionArea  , CardContent   } from '@mui/material'; 
import { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom' 
import { Button , Grid} from '@mui/material' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark  } from "@fortawesome/free-solid-svg-icons"
import request from '../utils/request';
import Pagination from '../Pagination/index';
import queryString from 'query-string'
const useStyles = makeStyles({
    rootMedia: {
        maxWidth : 1400 ,
        backgroundColor : 'rgb(23, 32, 50)', 
        height: 700 
    },
    root: {
        maxWidth : 1400 ,
        backgroundColor : 'rgb(23, 32, 50)', 
        
    } , 
    media : {
        height : 700 ,
        zIndex : 1 ,
        position : 'relative', 
    } , 
    position : {
        position : "absolute", 
        color : "white" ,
        zIndex : 10
    } , 
    text : {
        color : 'white' , 
        backgroundColor : 'rgb(23, 32, 50)' ,
        width : 1000 , 
        display : 'flex' ,
        height : 'auto' ,
    } ,
    button : {
        color : 'white' ,
        height : 40 ,
    } , 
    flex : {
        display : 'flex' 
    },
    image : {
        height : 500 
    }, 
    information : {
        height : 150, 
        color : 'white' ,
        background : 'rgb(20, 23, 31)' , 
        border : '2px solid black' , 
    }, 
    firstInfor : {
        height : 50
    },
    rootImage : {
        '&:hover': {
             
            border : '1px solid white' ,
    }
}
}) ; 




function Container() {
    useEffect(() => {
     request('filmList','GET', null).then(res => {
        setfilmListAll(res.data)  
    }) 
   },[]) 
    const [filmListAll , setfilmListAll] = useState([]) ; 
    const [filmList , setfilmList] = useState([]) ;
    const [filter, setFilter] = useState({
        page: 1,
        limit: 4 , 
        
    })
    const handlePageChange = (newPage) => {
    console.log('New Page:' , newPage); 
    setFilter({
        ...filter, 
        page : newPage , 
    })
    setPagination({
        ...filter, 
        page : newPage , 
        totalRows : filmListAll.length
    })
}
    const [pagination, setPagination] = useState({
        page : 1 , 
        limit: 10, 
        totalRows : 11 ,
    }) ;
    const paramString = queryString.stringify(filter)  
    useEffect(() => {
     request(`filmList?${paramString}`,'GET', null).then(res => {
        setfilmList(res.data)  
    }) 
   },[filter]) 
    const classes = useStyles() ; 
     const [film , setFilm] = useState([]) ; 
     
     const [video , setVideo] = useState([]) ; 
    const handelLink = (Film) => { 
            setFilm(Film) ;
            document.getElementById('poppp').classList.toggle("show") ;
    }
    const handelVideo = (film) => { 
            setVideo(film) ;
            document.getElementById('poppp2').classList.toggle("showww") ;
    }
    return (
        <Grid sx={{ width: '100%' }} className="contain_all" >
        <Grid sx={{ width: '90%' }} margin={'auto'}  >
                    <Card  className={classes.rootMedia}  >
                <div class="contain_slide">
                        <div class="contain_background">
                             <img src="./assets/johnwick3.png" alt=""/> 
                        </div> 
                    <div class="background_title">
                      <div class="above_title">
                        <ul class="above_list">
                            <li class="above_item">Action/Thriller</li>
                            <li class="above_item">
                                <FontAwesomeIcon icon={faCalendarDay} className="above_item_icon" />
                                2019</li>
                            <li class="above_item">
                                <FontAwesomeIcon icon={faHourglass} className="above_item_icon" /> 
                                2h11</li>
                        <   li class="above_item">
                            <FontAwesomeIcon icon={faBars} className="above_item_icon" />
                            4K</li>
                        </ul>
                         </div>
                        <div class="below_title">John Wick: Chapter 3 - Parabellum</div>
                 </div>
            </div>
             </Card>

             <div class="Contain_Main">
            <div class="navbar_product">
                <div class="navbar_product_first">
                    <div class="first_item_filter">
                        <span class="item_filter_title">All genres</span>
                        <i class="fa-solid fa-chevron-down"></i>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div class="second_item_filter">
                        <span class="item_filter_title">All the years</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </div>
                <div class="navbar_product_second">
                    <ul class="second_item_list">
                        <li class="second_filter_choose">Featured</li>
                        <li class="second_filter_choose choosen">Popular</li>
                        <li class="second_filter_choose">Newest</li>
                    </ul>
                </div>
            </div>
        </div>
             <Grid container spacing={5} marginTop={5}  >
             {filmList.map((Film, index) => (
                <Grid item xs={3} className={classes.rootImage}> 
                        <Card  className={classes.root} key={index} >
                        <CardActionArea  >
                             <div class="product_image">
                                <img src={Film.img} alt=""/> 
                            </div>
                            <CardContent className={classes.information}>
                                <Typography sx={{ fontWeight: 'bold',      fontSize : 16 , textAlign : 'center'  }} 
                                className={classes.firstInfor}>
                                    {Film.title}
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} >
                                        <Typography sx={{ fontSize : 13 , textAlign : 'center' }}>
                                             {Film.time}
                                         </Typography> 
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography sx={{ fontSize : 13 , textAlign : 'center' }}>
                                            Year: {Film.year}
                                         </Typography>
                                     </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} >
                                        <Typography sx={{textAlign:'center' , marginTop : 1.5}} 
                                       >
                                            <Button style={{
                                     backgroundColor: "rgb(16, 33, 57)",
                                    }} variant="outlined"  onClick={() => handelLink(Film)} >QuickView</Button>
                                        </Typography>  
                                    </Grid>
                                     <Grid item xs={6}>
                                        <Link to={`detail/${Film.id}`}>
                                            <Typography sx={{textAlign:'center' , marginTop : 1.5}} >
                                            
                                                <Button style={{
                                                 backgroundColor: "rgb(16, 33, 57)",
                                                }} variant="outlined" >Detail</Button>
                                             
                                            </Typography>
                                        </Link>
                                     </Grid> 
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                         </Card>
                </Grid>
             ))}
             </Grid>
             
     <div class="overlay" id='poppp'> 
        <div class="contain_quickInfo">
            <div class="above_quickInfo">
                <div class="backgroundInfo">
                    <img src={film.backGround} alt=""/> 
                </div>
                <div class="backgroundInfoZ">
                    <div class="below_quickInfo">
                        <div class="below_logo">
                            <img src={film.img} alt=""/>
                        </div>
                        <div class="title_quickInfo">
                               <span class="to_quickInfo">{film.title}</span>
                                <span class="reviewTrailer"  onClick={() => handelVideo(film)}>Review Trailer Noww</span>
                                <div class="type_quickInfo">
                                    <span class="type_year">{film.time}</span>
                                    <span class="type_type">
                                        {film.type}
                                    </span>
                                </div>
                        </div>
                        
                    </div>
                    <div class="title_quickInfo_below">
                        <span class="shortReview">{film.info}</span>
                        <div class="icon_quickInfo">
                            <i class="fa-solid fa-share-nodes icon_quick"></i>
                            <i class="fa-solid fa-heart icon_quick"></i>
                            <i class="fa-regular fa-bookmark icon_quick"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex'>
                 <div className="exist_popus" onClick={() => handelLink(film)}>
                                <FontAwesomeIcon className="exist_popus_icon" icon={faXmark}  />
                </div>  
              
            </div>
           
        </div>

    </div>    




      <div class="overlay2" id='poppp2'> 
        <div class="contain_quickInfo2">
                <div>
                     <iframe width="800" height="400" src={video.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                   
                 <div className="exist_popus" onClick={() => handelVideo(video)}>
                                <FontAwesomeIcon className="exist_popus_icon" icon={faXmark}  />
                </div>     
        </div>
    </div>  



        
            
        </Grid> 
        <Pagination 
            pagination={pagination} 
            onPageChange={handlePageChange}
        />
        </Grid>
    )
} 
export default Container ; 