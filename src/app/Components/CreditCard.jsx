import React from 'react';
import './credit-card.css';
import Image from 'next/image';
const CreditCard = (props) => {
    return (
        <div className="credit-card" style={{ 
            // backdropFilter: 'blur(16px)',
            // backgroundColor: 'rgba(255, 255, 255, 0.1)'
            background: props.background,
            backdropFilter: 'blur(15px)',
            transform: `rotate(${props.rotate})`,
            transform: `skew(${props.skew})`,
        }}>
            <div className="credit-card-master">
                <Image src="/masterc.svg" alt="masterc" width={50} height={50} />
                <Image src="/nfc.svg" alt='nfc' width={20} height={20}/>
            </div>
            <div className="credit-card-informations">
                <span style={{color:"#B9BEBD"}}>Credit Card No.</span>
                <span className='card-num' >1234 5678 9101 1121</span>
                <div className="credit-card-dates">
                    <div className="name">
                        <span style={{color:"#B9BEBD"}}>Name</span>
                        <span>John Doe</span>
                    </div>
                    <div className="date">
                        <span style={{color:"#B9BEBD"}}>Exp.</span>
                        <span>12/24</span>
                </div>
                <Image src="/chip.svg" alt="chip" width={50} height={50} className='chip'/>
            </div>    
        </div>
    </div>
    );
}

export default CreditCard;
