 
const style=<style>{`
  
footer div { 
    background: black;  
    height: 90px;
    color: #d0d0d0bf;
}
 
`}</style>

interface Props {
    css?: JSX.Element;
}
 

function Footer({css}: Props) {
    return (
        <>
        <footer className='centered'>
            <div className='centered' >&copy; 2019</div>
            </footer>
           {css}
        {style}
        </>
    )
}

export default Footer
