import React from "react";


function Footer () {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1*/}
                    <div className="col-Githubs">
                        <h3>Github-Socials</h3>
                        <ul>
                            <li><i class="bi bi-github"></i></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bot">
                    <p className="text-xs-center">
                        &copy;{new DataTransfer().getFullYear()} Biome-z website - All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer