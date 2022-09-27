function ImageList({pics}){
    const picItems = pics.map(({src, text}) => (   
        <li>
            <img src={src} />
            <p>{text}</p>
        </li>
    ));
    return (
    <ul>
        {picItems}
    </ul>
    )
};   

export default ImageList;

