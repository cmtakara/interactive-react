import { useState } from 'react' ;
import Button from "./Button";

export default function PlayButton ( { movieName }) {
    const [isPlaying, setIsPlaying] = useState(false);

    function handlePlayClick() {
        // this is where you would put more functionality
        // alert(`Playing ${movieName}`);
        setIsPlaying(!isPlaying);
    }

    return <Button onClick={handlePlayClick} className={isPlaying && 'playing'}>
        {isPlaying ? "Stop Playing" : "Play"} "{movieName}"</Button>
}
