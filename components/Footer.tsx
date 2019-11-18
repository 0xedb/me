 
const style=<style>{`
footer {

    margin-top: 100px;
}


footer div { 
    background: black; 
    width: 100%;
    max-width: 635px;
    height: 90px;
    color: #d0d0d0bf;
}

@media(min-width:700px) {
    footer {

        margin-top: 70px;

    }


    footer div {
        width: 80%
    }
    
}
`}</style>

function Footer() {
    return (
        <>
        <footer className='centered'>
            <div className='centered'>&copy; 2019</div>
            
            </footer>
        {style}
        </>
    )
}

export default Footer
