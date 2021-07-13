import '../App.css';

const CalorieBox = ({props})=>{
    const {item, id} =props;
    const {name, cal} =item;

    return(
        <>
        <div className="caloriebox"
            style={{
                backgroundColor:cal>50? "red": id%2===0 ? "orange":"pink"
            }}
            >
                <div className="food">
                    <h2>{name}</h2>
                </div>
                <div className="data">
                    <p>
                        you have consumed {cal}cals
                    </p>
                </div>
           </div>
        </>
    );
};

export default CalorieBox;