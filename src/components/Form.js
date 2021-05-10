import React, { useState, useContext } from 'react'
import useFetchData from '../hooks/useFetchData'
import { useHistory } from "react-router-dom";

import { DataContext } from '../hooks/DataContext'


const Form = () => {

    let nav = useHistory();

    var today = new Date();
    var month = today.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    var day = today.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    var currentDate = today.getFullYear() + '-' + month + '-' + day;

    let [data, setData, trigger] = useContext(DataContext);





    const [entryForm, setEntryForm] = useState({


        date: currentDate,
        liftNo: '',
        siteName: '',
        mod: '',
        pod: '',
        breakdown: '',
        service: '',
        customerName: '',
        address: '',
        mechanicName: '',
        remark: ''


    });





    function handleChange(e) {



        setEntryForm((data) => {

            data[e.target.name] = e.target.value
            return { ...data }
        })




    }






    function submitLift() {

        let newObj = { ...entryForm }
        newObj.id = Object.keys(data).length + 1;


        fetch('https://api.steinhq.com/v1/storages/60979616d9e29121dfda964e/sheet1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify([newObj])

        }).then(Response => Response.json()).then(out => {

            console.log(out + "submitted");
            trigger();
            alert('submitted sucessfully')
            console.log("close");
            nav.push('/');





        }).catch((er) => {

            console.log('error');


        });




    }












    return (
        <div className='form-page'>

            <div className='form-nav'>
                <h1>LIFT FORM</h1>
                <img src="images/icons/back-button.png" alt="" />
            </div>
            <div className='y-scroll-form'>

                <div className='form-container'>



                    <form id='form' action="">


                        <label>
                            Date <input name="date" type="date" value={entryForm.date} onChange={handleChange} />
                        </label>

                        <label>
                            Lift number <input name="liftNo" value={entryForm.liftNo} type="text" onChange={handleChange} />
                        </label>

                        <label>
                            Site Name <input name="siteName" value={entryForm.siteName} type="text" onChange={handleChange} />
                        </label>

                        <label>
                            Mod <input name="mod" value={entryForm.mod} type="text" onChange={handleChange} />
                        </label>

                        <label>
                            Pod <input name="pod" value={entryForm.pod} type="text" onChange={handleChange} />
                        </label>

                        <label>
                            Breakdown <textarea name="breakdown" value={entryForm.breakdown} type="text" rows='5' onChange={handleChange} />
                        </label>

                        <label>
                            Service <textarea name="service" value={entryForm.service} type="text" rows='5' onChange={handleChange} />
                        </label>

                        <label>
                            Customer Name <input name="customerName" value={entryForm.customerName} type="text" onChange={handleChange} />
                        </label>

                        <label>
                            Address <textarea name="address" type="text" rows='10' value={entryForm.address} onChange={handleChange} />
                        </label>

                        <label>
                            Mechanic Name <input name="mechanicName" type="text" value={entryForm.mechanicName} onChange={handleChange} />
                        </label>

                        <label>
                            Remark <textarea name="remark" rows='10' type="text" value={entryForm.remark} onChange={handleChange} />
                        </label>


                    </form>

                    <div className='submit'>
                        <button onClick={submitLift}>SUBMIT</button>
                    </div>

                </div>

            </div>

        </div>


    )

}










export default Form