import React, { useEffect } from 'react'
import $ from 'jquery';

function Preloader() {
    useEffect(() => {
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(450).css({'overflow': 'visible'});
    });

    return (
        <div id="preloader-active">
            <div className="preloader d-flex align-items-center justify-content-center">
                <div className="preloader-inner position-relative">
                    <div className="preloader-circle"></div>
                    <div className="preloader-img pere-text">
                        <img src="assets/img/logo/loder.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader
