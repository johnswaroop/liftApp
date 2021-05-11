const PopoutCard = (props) => {

    console.log(props.result);

    return (
        <div className='popout-card'>
            <div className='y-scroll-pop' >

                <span>
                    <h1 className='q'>Date :</h1>
                    <h1 className='result-date' type="date" >{props.result[props.i].date}</h1>
                </span>
                <span>
                    <h1 className='q'>Lift No :</h1>
                    <h1 className='result-lift-no' type="text" >{props.result[props.i].liftNo}</h1>
                </span>
                <span>
                    <h1 className='q'>Name :</h1>
                    <h1 className='result-lift-customer' type="text" >{props.result[props.i].customerName}</h1>
                </span>
                <span>
                    <h1 className='q'>Mod :</h1>
                    <h1 className='result-date' type="date" >{props.result[props.i].mod}</h1>
                </span>
                <span>
                    <h1 className='q'>Pod :</h1>
                    <h1 className='result-lift-no' type="text" >{props.result[props.i].pod}</h1>
                </span>
                <span>
                    <h1 className='q'>Breakdown :</h1>
                    <h1 className='result-lift-customer' type="text" >{props.result[props.i].breakdown}</h1>
                </span>
                <span>
                    <h1 className='q'>Service :</h1>
                    <h1 className='result-date' type="date" >{props.result[props.i].service}</h1>
                </span>

                <span>
                    <h1 className='q'>Site Name :</h1>
                    <h1 className='result-lift-customer' type="text" >{props.result[props.i].siteName}</h1>
                </span>
                <span>
                    <h1 className='q'>Mechanic Name :</h1>
                    <h1 className='result-lift-customer' type="text" >{props.result[props.i].mechanicName}</h1>
                </span>
                <span>
                    <h1 className='q'>Remark :</h1>
                    <h1 className='result-date' type="date" >{props.result[props.i].remark}</h1>
                </span>


                <button onClick={
                    () => {
                        props.toggle((z) => {
                            return !z;
                        })
                    }




                }>Close</button>

            </div>
        </div >
    )
}

export default PopoutCard;