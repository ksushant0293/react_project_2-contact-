import styles from './Navigation.module.css'

const Navigation = () => {
  console.log(styles); 

  return (
    <nav className={`${styles.navigation} container`}>
      <div className='logo'>
        <img src="/images/image-50x50.jpg" alt="sushant_logo"/>
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
