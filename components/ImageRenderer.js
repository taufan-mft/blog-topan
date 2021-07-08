
export default function ImageRenderer({ src, alt }) {
  return <div style={{alignContent:'center', alignItems:'center'}}><img src={src} alt={alt} style={{maxWidth:"60%",  marginLeft: 'auto',
  marginRight:'auto',
  display:'block', borderRadius:'15px'}} /><br></br></div>;
}