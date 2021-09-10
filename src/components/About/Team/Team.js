import products from './Teamlist';
import './team.scss';
import Arun from './arun.jpg';
import Dummy from './dummy.jpg';
function Team(){



   const list = []
 
   
   const p=products.map((prod)=>(
      
         <div className="carousel-item ">
         <div className="row row2" >
             <div className="col-md-3 col-sm3 col-12"> 
             <div id="box">
                <img src={prod.first.img} className="rounded-circle"/>
                <h2> {prod.first.name} </h2>
                <p> {prod.first.designation} </p>
             </div>
             </div>
      
             <div className="col-md-3 col-sm3 col-12"> 
             <div id="box">
                <img src={prod.second.img} className="rounded-circle" />
                <h2> {prod.second.name} </h2>
                <p> {prod.second.designation} </p>
             </div>
             </div>
            
             <div className="col-md-3 col-sm3 col-12"> 
             <div id="box">
                <img src={prod.third.img} className="rounded-circle"/>
                <h2> {prod.third.name} </h2>
                <p> {prod.third.designation} </p>
             </div>
             </div>
      
             <div className="col-md-3 col-sm3 col-12"> 
             <div id="box">
                <img src={prod.fourth.img} className="rounded-circle" />
                <h2> {prod.fourth.name} </h2>
                <p> {prod.fourth.designation} </p>
             </div>
             </div>
      
      
      
             </div>  
       </div>
      
   ));


   const phone=products.map((prod)=>(
      <>
      
    <div className="carousel-item ">
    <div className="row row2" >
        <div className="col-md-3 col-sm3 col-12"> 
        <div id="box">
           <img src={prod.first.img} className="rounded-circle" />
           <h2> {prod.first.name} </h2>
           <p> {prod.first.designation} </p>
        </div>
        </div>


        </div>  
  </div>
  <div className="carousel-item ">
    <div className="row row2" >
        <div className="col-md-3 col-sm3 col-12"> 
        <div id="box">
           <img src={prod.second.img} className="rounded-circle" />
           <h2> {prod.second.name} </h2>
           <p> {prod.second.designation} </p>
        </div>
        </div>


        </div>  
  </div>

  <div className="carousel-item ">
    <div className="row row2" >
        <div className="col-md-3 col-sm3 col-12"> 
        <div id="box">
           <img src={prod.third.img} className="rounded-circle" />
           <h2> {prod.third.name} </h2>
           <p> {prod.third.designation} </p>
        </div>
        </div>


        </div>  
  </div>

  <div className="carousel-item ">
    <div className="row row2" >
        <div className="col-md-3 col-sm3 col-12"> 
        <div id="box">
           <img src={prod.fourth.img} className="rounded-circle" />
           <h2> {prod.fourth.name} </h2>
           <p> {prod.fourth.designation} </p>
        </div>
        </div>


        </div>  
  </div>

</>
   ));
   



return(<>
<div id="team">

<div className="container-fluid" >
<div className="row row1">
    <div id="heading" className="col-md-12 col-sm-12 col-12">
        <h1>Meet Our Team</h1>
    </div>
    
    <div  className="col-md-12 col-sm-12 col-12" id="desktop">
<div id="demo_about" className="carousel slide" data-ride="carousel">
  <ul className="carousel-indicators" style={{"display":"none"}}> 
    <li data-target="#demo_about" data-slide-to="0" className="active"></li>
    <li data-target="#demo_about" data-slide-to="1"></li>
    <li data-target="#demo_about" data-slide-to="2"></li>
  </ul>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row row2" >
          <div className="col-md-3 col-sm-3 col-12"> 
          <div id="box">
             <img src={Dummy} className="rounded-circle" />
             <h2> abs </h2>
             <p> abcabcbacb </p>
          </div>
          </div>

          <div className="col-md-3 col-sm-3 col-12"> 
          <div id="box">
          <img src={Dummy} className="rounded-circle" />
             <h2> abs </h2>
             <p> abcabcbacb </p>
          </div>
          </div>

          <div className="col-md-3 col-sm-3 col-12"> 
          <div id="box">
          <img src={Dummy} className="rounded-circle" />
             <h2> abs </h2>
             <p> abcabcbacb </p>
          </div>
          </div>

          <div className="col-md-3 col-sm-3 col-12"> 
          <div id="box">
          <img src={Dummy} className="rounded-circle" />
             <h2> abs </h2>
             <p> abcabcbacb </p>
          </div>
          </div>


          </div>  
    </div>

{/*p*/}




  </div>




  <a className="carousel-control-prev control" href="#demo_about" data-slide="prev">
    <span className="fa fa-angle-double-left icon"></span>
  </a>
  <a className="carousel-control-next control" href="#demo_about" data-slide="next">
    <span className="fa fa-angle-double-right icon"></span>
  </a>
</div>



</div>



<div  className="col-md-12 col-sm-12 col-12" id="phone">
<div id="demo2" className="carousel slide" data-ride="carousel">
  <ul className="carousel-indicators" style={{"display":"none"}}> 
    <li data-target="#demo2" data-slide-to="0" className="active"></li>
    <li data-target="#demo2" data-slide-to="1"></li>
    <li data-target="#demo2" data-slide-to="2"></li>
  </ul>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row row2" >
          <div className="col-md-3 col-sm3 col-12"> 
          <div id="box">
          <img src={Dummy} className="rounded-circle" />
             <h2> abs </h2>
             <p> abcabcbacb </p>
        
          </div>
          </div>


          </div>  
    </div>

    <div className="carousel-item ">
      <div className="row row2" >
          <div className="col-md-3 col-sm3 col-12"> 
          <div id="box">
          <img src={Dummy} className="rounded-circle" />
             <h2> abs </h2>
             <p> abcabcbacb </p>
          </div>
          </div>


          </div>  
    </div>

    {/*phone*/}






  </div>




  <a className="carousel-control-prev control" href="#demo2" data-slide="prev">
    <span className="fa fa-angle-double-left icon"></span>
  </a>
  <a className="carousel-control-next control" href="#demo2" data-slide="next">
    <span className="fa fa-angle-double-right icon"></span>
  </a>
</div>



</div>








</div>

</div>

</div>
</>);

}


export default Team;
