import React from 'react'

const Rainbow = (WrappedComponent) => {
    
    const color = ['red','blue','yellow']
    const randomColor = color[Math.floor(Math.random() * 2)]
    console.log(randomColor);
    
    const className = randomColor + '-text';  
    console.log(className);
      
    
    return (props) => {

            return (
                <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow;