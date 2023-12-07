import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AnimationIcon from '@mui/icons-material/Animation';
import WalletIcon from '@mui/icons-material/Wallet';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ExploreIcon from '@mui/icons-material/Explore';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SchoolIcon from '@mui/icons-material/School';



import { Link } from 'react-router-dom';
import { Button } from "bootstrap";

const Homepage =()=>{
    return(
        <div className="bg-light">
   
        <nav>

            <div className="lies my-3">
                <a className="mx-4 " href="">Wallet</a>
            
                <a className="mx-">Courses</a>
            
                <a className="mx-4" href="">Explore</a>
            
                <a className="mx-4" href="">Institutional</a>
             </div>

             <div className=" mouse mx-2 my-2">
                <button className="btn btn-light" >Login</button>
                <button className="btn btn-light" >Sign Up</button>

             </div>
            
            
            
        </nav>

        <div className="container-fluid border-top">
            <div className="row">
                <div className="col-md-8 ">
                    <h1 className="text my-4 mx-3">The Best Learning <span className="mss "><br/> Management <AnimationIcon sx={{fontSize:"50px"}}/>   System </span> </h1>

                </div>
                <div className="col-md-4 ">
                    <p className="para my-3">Trusted by millions since 2011 with <br/> over $1 trillion in crypto transactions</p>
                    <div className="bunny"> 
                        <button className="btn btn-dark">Get Started</button>
                        <button className="btn btn-light"><ExploreIcon/> Explore</button>
                    </div>

                </div>

            </div>

        </div>

        <div  className="container-fluid ">
            <div className="row">
                <h1 className="make mx-3 my-5">Our Products</h1>
                <div className="col-md-6 ">
                    <div className="box1">
                        <button className="btn btn-light mx-4 my-3"> <WalletIcon/> Wallet</button>
                        <p className="bob mx-4">The Easiest Way To <br/> Learn Anything and Everything </p>
                        <p className="all mx-4">Buy a course and experience unparrallel Learning for <br/> Web Development to Data Science</p>

                        <div className="mx-4">
                        <PlayArrowIcon/> <a className="dare mx-2">Start</a>


                        </div>

                    </div>
                </div>

                <div className="col-md-6">
                    <div className="box2 mx-3 ">
                        <div style={{display: 'flex'}}>
                        <h2 className=" lof mx-5">10%</h2>
                        <p className="long my-4">Earn with us <br/> in Rewards</p>

                        </div>

                        

                    </div>

                    <div className="box3 mx-3 my-4">
                        <h3 className="py-1 per" style={{textAlign: "center"}}>100%</h3>
                        <p style={{textAlign: "center", fontFamily: 'Teko'}}>Your Learning is Progressive</p>
                        


                    </div>

                </div>

            </div>

        </div>


    <div className="container-fluid">
      <h1 className="my-5 mx-5" style={{fontFamily:"Bruno Ace", paddingLeft:"150px", justifyContent:'space-around'}}>
      Best place to <SchoolIcon sx={{fontSize:'42px'}}/> <br/> <span style={{paddingLeft:"130px"}}> Learn  Everything</span> <LightbulbIcon sx={{fontSize:"42px"}}/>
      
      </h1>

      <div className="row">
      <div className="col-md-6 ">
      <img className="" style={{borderRadius:"50%", alignItems:"center", paddingLeft:'150px', height:'300px'}} src="/images/LMS3.PNG"/>
      </div>

      <div className="col-md-6">
      <p style={{fontFamily:'Playfair_Display'}}>Best selling system where an  individual <br/> can Learn any skill  desired </p>
       <p style={{fontFamily:'Playfair_Display'}} className="py-4">Built by Developers for Development</p>
       
       
       <button className="btn btn-dark mx-2" style={{height:"50px"}}> <div style={{display:"flex"}}><AndroidIcon className="my-2"/> <p style={{fontSize:"10px"}}>Get app on the<br/> <span>Play Store</span></p></div></button>
       <button className="btn btn-dark mx-2" style={{height:"50px"}}> <div style={{display:"flex"}}><AppleIcon className="my-2"/> <p style={{fontSize:"10px"}}>Get app on the<br/> <span>App Store</span></p></div></button>

      
      
      </div>
      <div >
       
      
      </div>
      
      </div>

    
    </div>
    
</div>
    )

}

export default Homepage