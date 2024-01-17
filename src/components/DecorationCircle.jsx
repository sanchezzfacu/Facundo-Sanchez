// import { gsap } from "gsap";
// import { useEffect, useRef } from 'react';


function DecorationCircle() {
    // const firstCircle = useRef()
    // const secondCircle = useRef()
    // const thirdCircle = useRef()
    // const fourthCircle = useRef()
    // const fifthCircle = useRef()
    // const sixthCircle = useRef()
    // const seventhCircle = useRef()

    // useEffect(() => {
    //     gsap.from(firstCircle.current, 4, {
    //         opacity: 0,
    //     })
    //     gsap.from(secondCircle.current, 5, {
    //         x: -30,
    //         opacity: 0
    //     })
    //     gsap.from(thirdCircle.current, 2, {
    //         opacity: 0
    //     })
    //     gsap.from(fourthCircle.current, 3, {
    //         opacity: 0
    //     })
    //     gsap.from(fifthCircle.current, 1, {
    //         opacity: 0
    //     })
    //     gsap.from(sixthCircle.current, 5, {
    //         opacity: 0
    //     })
    //     gsap.from(seventhCircle.current, 5, {
    //         opacity: 0
    //     })
    // })

    return (
        <div className='circle-decoration-container'>
            <div className='first-circle-decoration circle'></div>
            <div className='second-circle-decoration circle'></div>
            <div className='third-circle-decoration circle'></div>
            <div className='fourth-circle-decoration circle'></div>
            <div className='sixth-circle-decoration circle'></div>
            <div className='seventh-circle-decoration circle'></div>
            <div className='eighth-circle-decoration circle'></div>
        </div>
    )
}

export default DecorationCircle
