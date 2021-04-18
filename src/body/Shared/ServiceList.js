import React, { useRef } from 'react';
import mixitup from 'mixitup';
const ServiceList = () => {
    const containerEl = useRef()
    const target = useRef()
    var mixer = mixitup(containerEl, {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 300
        }
    });

    const buttonA=()=>{
        mixer.filter('.category-a');
    }
    const buttonB=()=>{
        mixer.filter('.category-b');
    }
    const buttonC=()=>{
        mixer.filter('.category-c');
    }
    

     
    return (
         <div className="main">
             <button onclick={buttonA} type="submit">a</button>
             <button onclick={buttonB} type="submit">b</button>
             <button onclick={buttonC} type="submit">c</button>
             <div ref={containerEl}>
            <div className="blog-item">
            <div className="category-a">hello</div>
            <div className="category-a">hello</div>
            <div className="category-a">hello</div>
            <div className="category-b">hello</div>
            <div className="category-b">hellob</div>
            <div className="category-b">hellob</div>
            <div className="category-b">hellob</div>
            <div className="category-b">hellob</div>

            </div>
            
            
        </div>
         </div>
    );
};

export default ServiceList;