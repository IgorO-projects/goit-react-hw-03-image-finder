import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from './Loading.module.css';

const Loading = () => {
    return(
        <div className={styles.loading}>
            <Loader 
            type="Grid"
            color="#3f51b5"
            height={60}
            width={60}
            />
        </div>
    )
}

export default Loading;