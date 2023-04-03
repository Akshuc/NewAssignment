
import style from '.././styles/Home.module.css';
import CardContainer from './Components/Cards/CardContainer';
import Navbar from './Components/Navbar';

const index = ()=>{
  return(
    <div className={style.parent}>
      <Navbar/>
      <CardContainer/>

    
    </div>
  )
}

export default index;