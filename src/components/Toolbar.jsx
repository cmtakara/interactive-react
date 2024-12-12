import Button from "./Button";
import AlertButton from "./AlertButton";
import PlayButton from "./PlayButton";

function Toolbar({ onPlayMovie, onUploadImage }) {
// I know that the Button is accessing the children, which means
// there needs to be an opening and closing Button tag
    return (
    <div>
        <Button onClick={onPlayMovie}>Play Movie</Button>
        <Button onClick={onUploadImage}>Upload Image</Button>
        <Button onClick={() => {console.log('this can be any function')}}>Not an Alert</Button>
        <br />
        <PlayButton movieName="Nightmare Before Christmas"/>
        <PlayButton movieName="Spirited Away"/>
        <PlayButton movieName="Die Hard"/>
        <PlayButton movieName="Gremlins"/>
        <hr />
        <AlertButton message={'Playing!'}>Play Movie</AlertButton>
        <AlertButton message={'Uploading!'}>Upload Image</AlertButton>

    </div>
  )
}

export default Toolbar