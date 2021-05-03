import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from './Loading.module.css';

const Loading = () => {
    return(
        <div className={styles.loading}>
            <Loader 
            type="Grid"
            color="#00BFFF"
            height={80}
            width={80}
            />
        </div>
    )
}

export default Loading;