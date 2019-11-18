 
const style=<style>{`
  
footer div { 
    background: black; 
    width: 100%;
    max-width: 950px;
    height: 90px;
    color: #d0d0d0bf;
}

@media(min-width:700px) {
    
    
}
`}</style>

interface Props {
    max?: string;
}

function Footer({max}: Props) {
    return (
        <>
        <footer className='centered' style={{maxWidth: max}}>
            <div className='centered'>&copy; 2019</div>
            
            </footer>
        {style}
        </>
    )
}

export default Footer
