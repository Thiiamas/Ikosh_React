import '../Styles/Header.css'

function handleClick(){
    console.log('clicked')
}

function Header(){
    return (
        <div className='HeaderMain' onClick={handleClick}>
            <h1>Game Of life</h1>
        </div>
    )
}

export default Header