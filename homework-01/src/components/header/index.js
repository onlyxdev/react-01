import './style.css'

export default function Header() {
    return(
        <>
        <div className='top-header'>
            <div className='nav-in'>
                <h4 style={{marginLeft: '6vw', marginRight: '6vw', cursor: 'pointer'}}>Brandname</h4>
                <ul className='firstUl'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Product</a></li>
                    <li><a href='#'>Pricing</a></li>
                    <li><a href='#'>Contact</a></li>                    
                </ul>
                <ul className='secondUl'>
                    <li><a href='#'>Login</a></li>
                    <button>
                        JOIN US ➜
                    </button>
                </ul>

            </div>
        </div>
        </>
    )
}