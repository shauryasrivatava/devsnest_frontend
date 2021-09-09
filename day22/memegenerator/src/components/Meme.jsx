const Meme=({meme})=>{
    console.log(meme)
    return (
        <div className="meme">
        <h3>MEME edit karlo frnds</h3>
        <img src={meme.url} alt="" />
        </div>
    );
}

export default Meme;