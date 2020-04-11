import React from "react";
import './App.css';

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// {/* Hompage which contains the link to all the projects I am working on */}
export default function WriterApp() {
    return (
        <div className="main_writer row">
            {/* we divide the  content of this page into 3 sections  */}
            <div className="col-md-2 writer_sidebar">
                <h6>12 Months Goals</h6>
                <ul>
                    <li>NATIVE Schools Institute</li>
                    <li>OBILI</li>
                    <li>NATIVE Maintenance</li>
                </ul>
            </div>
            <div className="col-md-5 writer_content">
                <h6># 12 Months Goals</h6>
                <h6> ### NATIVE Schools Institute </h6>
                <p>
                    A institute where everyone can express their passions through learning and doing the things they like best; music, acting, dancing, building, creating, crafting, developing etc.
                    The educational system is structured to scale very fast based on a system of mentor and students where every student can become a mentor, this helps the system scale fast.
                    Productivity, each students is expected to be productive and to put into practice all what they learn.
                </p>

                <h6>## OBILI</h6>
                <p>
                    The biggest ecommerce plateforme to empower local businesses in africa.
                </p>

                <h6>## NATIVE Maintenance</h6>
                <p>
                    Electronics repair industry which is fair on its prices and reliable in its customer service
                </p>
            </div>
            <div className="col-md-5 writer_display">
                <div className="writer_page" >First page</div>
                <div className="writer_page writer_page_sub" >Second page</div>
                <div className="writer_page writer_page_sub" >third page</div>
            </div>
        </div>
  );
}