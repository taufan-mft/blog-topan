import styles from './renderer.module.css'
export default function ImageRenderer({ src, alt }) {
  return <div style={{alignContent:'center', alignItems:'center'}}><img src={src} alt={alt} className={styles.tasya}  style={{ marginLeft: 'auto',
  marginRight:'auto',
  display:'block', borderRadius:'15px'}} /><br></br>
 
  
  </div>;
}