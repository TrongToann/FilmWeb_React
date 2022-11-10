import {faVideo,faPhotoFilm,faPlus, faChevronDown,faArrowUpRightFromSquare ,faShareNodes , faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams} from 'react-router-dom'
import {Films2} from '../shared/ListOfFilm2'
import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'; 
import {  Grid} from '@mui/material' 
import StarIcon from '@mui/icons-material/Star';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import SwipeUpIcon from '@mui/icons-material/SwipeUp';
import request from '../utils/request';
function FilmDetail() {
        const userName = useParams();
        const [Film , setfilmList] = useState([]) ; 
        console.log(userName.id)
       useEffect(() => {
        request(`filmList/${userName.id}`,'GET', null).then(res => {
        setfilmList(res.data)   
       })
       }, [])
    return(
      
     <Grid sx={{ width: '100%' }} className="contain_all" >
        <Grid sx={{ width: '90%' }} margin={'auto'}   >
            <ul class="detailFirstList">
                        <li class="detailFirstitem">Cast Crew |</li>
                        <li class="detailFirstitem">User Reviews |</li>
                        <li class="detailFirstitem">Trivia</li>
                        <li class="detailFirstitem">
                            <FontAwesomeIcon icon={faStar} />
                             AppPro</li>
                        <li class="detailFirstitem"><FontAwesomeIcon icon={faShareNodes} /></li>
                    </ul>
                    <div class="detailSecond">
                        <div class="detail_Title">
                            <span class="detail_titleInside">{Film.title}</span>
                                <li class="yearInside">2022 . PG-13 . 2h 6m</li>
                        </div>
                        <div class="detailIconView">
                            <div class="rating">
                                <div class="title_raing">IMDb RATING</div>
                                <div class="icon_rating">
                                    <FontAwesomeIcon icon={faStar} className="icon_ratingInside" />
                                    <div class="icon_titleInside"><span>9.5</span>/10</div>
                                </div>
                            </div>
                            <div class="rating">
                                <div class="title_raing2">YOUR RATING</div>
                                <div class="icon_rating">
                                    <FontAwesomeIcon icon={faStar} className="icon_ratingInside2" />
                                    <div class="icon_titleInside2">RATE</div>
                                </div>
                            </div>
                            <div class="rating">
                                <div class="title_raing3">POPULARITY</div>
                                <div class="icon_rating">
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon_ratingInside3" />
                                    <div class="icon_titleInside3">178</div> 
                                </div>
                            </div>
                            
                        </div>
                    </div>
            
            <Grid container paddingTop={5} >
                    <Grid item xs={3}>
                        <div>
                            <img src={`../${Film.img}`} style={{height:450}} />
                        </div>
                    </Grid>
                    <Grid item xs={9} > 
                        <iframe width="1000" height="450" src={Film.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Grid>
                    
                    
            </Grid>
            <div className="Popups_film_title">
                                                    <span >Action</span>
                                                    <span >Adventure</span>
                                                    <span >Fantasy</span>
                                               </div>
            <Grid container > 
                <Grid item xs={8} >

                     <Typography sx={{ fontWeight: 'bold',fontSize : 16 , textAlign : 'left' , color : "rgb(114, 114, 114)"  }} >{Film.info}</Typography>
                </Grid>
                <Grid item xs = {4} >
                    <div className="Popups_coming">
                            <div className="border_coming">
                                        <span >COMING SOON</span>
                                        <span >Release {Film.day}</span>
                            </div>
                             <div className="button_coming">
                                                    <button >+ Add to WatchList</button>
                                                    <div className='button_coming2'> 
                                                           + 
                                                    </div>
                                               </div>
                          </div>
                </Grid>
            </Grid>
                
            

                



      </Grid>
      </Grid>
   )

} 
export default FilmDetail ; 