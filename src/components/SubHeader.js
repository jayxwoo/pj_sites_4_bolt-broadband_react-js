import "../styles/SubHeader.scss";

const SubHeader = ({data}) => {
    return (
        <div className="subHeader">
            <img className="img" src={data.img} alt="" />
            <div className="overlay"></div>
            <div className="subHeader-cont">
                <h1 className="title">{data.title}</h1>
            </div>
        </div>
    );
}
 
export default SubHeader;