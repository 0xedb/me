 import Social from './Social';

const style=<style>{`
footer {
    margin-top: 10px;
}
  
footer div { 
    background: black;  
    height: 90px;
    color: #d0d0d0bf;
}

@media(min-width: 700px) {
    footer {
        margin-top: unset;
    }
}
 
`}</style>

interface Props {
    css?: JSX.Element;
}
 

function Footer({css}: Props) {
    return (
        <> <Social />
        <footer className='centered'>
       
            <div className='centered' >&copy; 2019</div>
            </footer>
           {css}
        {style}
        </>
    )
}

export default Footer
