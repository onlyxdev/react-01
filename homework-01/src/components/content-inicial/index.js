import './style.css'
import Girl from '../../assets/girl-home.png';

export default function ContentInicial() {
    return(
        <>
            <div className='container-all'>
                <div className='container-40'>
                    <h4>Best dental surgeons</h4>
                    <h1>25K+ STUDENTS TRUST US</h1>
                    <h5>Our goal is to make online education work for everyone</h5>
                    <div className='btn-containers'>
                        <button className='btn-green'>Get Quote Now</button>
                        <button className='btn-off'>Learn More</button>
                    </div>
                </div>

                <div className='container-60'>
                    <img src={Girl} className='girl-home-img'></img>
                </div>
            </div>
        </>
    );
}