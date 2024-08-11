import ParamsTitle from "../ParamsTitle/ParamsTitle";

function ParamsContainer({sheetSize, rects}){
    const rectsArr = rects.split("\n");
    return (
        <div className="params-container">
            <ParamsTitle title="Sheet size (in * 72 / 6)" />
            {`${sheetSize.width} x ${sheetSize.height}`}
            <ParamsTitle title="Rectangle size (in * 72 / 6)" />
            {rectsArr.map((rect) => {
                return <div key={rect}>{rect}</div>;
            })}
        </div>
    );
}

export default ParamsContainer;