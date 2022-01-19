import React, { useState } from 'react'
import { ReactComponent as ListIcon } from '../svgs/list.svg'
import Data from './Data'

const allCompanies = [...new Set(Data.map((data) => data.name))];
//console.log(allCompanies)

const Main = () => {

    const [datas, setDatas] = useState(Data);
    const [companies, setCompanies] = useState(allCompanies);
    const [count, setCount] = useState(0);

    const {id, name, job, date, desc} = datas[count];


    return (
        <section className='section'>
            <div className='title'>
                <h2>experience</h2>
                <div className='underline'></div>
            </div>
            <div className='jobCenter'>
                <div className='btnContainer'>
                {Data.map((company, index) => {
                    return (
                        <button 
                            key={index} 
                            onClick={() => setCount(index)}  
                            className={`jobBtn ${index === count && 'activeBtn'}`}
                        >
                            {company.name}
                        </button>
                    );
                })}
                </div>
                <article className='jobInfo'>
                    <h3>{job}</h3>
                    <h4>{name}</h4>
                    <p className='jobDate'>{date}</p>
                    {desc.map((d, index) => {
                        return (
                            <div key={index} className='jobDesc'>
                                <ListIcon className='jobIcon' />
                                <p>{d}</p>
                            </div>   
                        );
                    })}   
                </article>
            </div>
            <button className='btn'>more info</button>
        </section>
    )
}

export default Main
