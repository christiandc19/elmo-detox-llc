import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Section4.css'

import { CiBeerMugFull } from 'react-icons/ci';
import { CiPillsBottle1 } from 'react-icons/ci';
import { RiSyringeLine } from 'react-icons/ri';
import { TbPills } from 'react-icons/tb';

const Section4 = () => {
    return (
<>        
        <div className='Section4'>

                <div className="content">

                    <Fade left>
                        <div className='section4-left'>
                            <div className='left-content'>
                            <h1>Types of Substance Addiction Disorder We Treat</h1>
                            <p>Our compassionate staff utilizes established medical treatments to decrease withdrawal effects in an empathetic environment. In the meantime, you’ll receive behavioral health care from experienced counselors to boost your chances for an effective recovery.</p>
                            <br />
                            <div className='Section4-btn'>
                                <Link to="/substance-abuse">
                                    <button>DISCOVER MORE</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </Fade>



                        <div className='section4-right'>

                            <div className='right-content'>

                                <div className='box1 box'>
                                    <div className='box-content'>
                                        <CiBeerMugFull className='box-icon'/>
                                        <h1>ALCOHOL ADDICTION</h1>
                                        <p>Inability to manage one’s drinking habits. It is the most acute form of alcohol abuse.</p>
                                    </div>
                                </div>

                                <div className='box2 box'>
                                    <div className='box-content'>
                                        <CiPillsBottle1 className='box-icon'/>
                                        <h1>PRESCRIPTION ADDICTION</h1>
                                        <p>Abuse of prescription medications can be recreational, due to addiction, or both, and the consequences can be severe or fatal.</p>
                                    </div>                                
                                </div>

                                <div className='box3 box'>
                                    <div className='box-content'>
                                        <RiSyringeLine className='box-icon'/>
                                        <h1>HEROIN ADDICTION</h1>
                                        <p>Heroin is an opioid stimulant created from morphine and the seed of the poppy plant. It usually appears in either powder form or as a sticky tar substance.</p>
                                    </div>                                
                                </div>

                                <div className='box4 box'>
                                    <div className='box-content'>
                                        <TbPills className='box-icon'/>
                                        <h1>XANAX ADDICTION</h1>
                                        <p>When taken in high doses, Xanax can lead to serious side effects, ranging from coma, to respiratory arrest, and even death.</p>
                                    </div>                                
                                </div>

                            </div>

                            </div>
                        </div>
                </div>
</>

    )
}

export default Section4