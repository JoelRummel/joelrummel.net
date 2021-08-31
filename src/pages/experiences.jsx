import { makeStyles, useTheme } from "@material-ui/core";
import Navbar from "../components/Navbar"

const useStyles = makeStyles((theme) => ({

}));

const Experiences = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <>
            <Navbar />
            <div>henlo</div>
        </>
    );
}

export default Experiences;
