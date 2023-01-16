import React from 'react'
import Leaflet from '../leaflet/Leaflet'
import './fotter.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faWhatsapp, faTiktok } from "@fortawesome/free-brands-svg-icons"
import { FaPhone, FaEnvelope, FaSearchLocation } from "react-icons/fa"

const Fotter = () => {
    return (
        <div className='container'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320">
                <path
                    fill="#FF4820"
                    fillOpacity=".8"
                    d="M0,64L34.3,64C68.6,64,137,64,206,101.3C274.3,139,343,213,411,234.7C480,256,549,224,617,186.7C685.7,149,754,107,823,122.7C891.4,139,960,213,1029,240C1097.1,267,1166,245,1234,234.7C1302.9,224,1371,224,1406,224L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                </path>
            </svg>
            <div className='leaflet'>
                <Leaflet />
            </div>

            <div className='fotter' >
                <div className='container-left'>
                    <div className='fotter-logo'>
                        <img src='/fab-down.png' alt="logo" />
                    </div>
                    <div className='center-text'>
                        <div className='text-animated'>
                            <div className='fotter-title'>
                                <h2>Imad Iziki</h2>
                                <h2>Imad Iziki</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-right '>
                    <div className='detail'>
                        <div className='company-detail'>
                            <div className='container-detail'>
                                <div><FaSearchLocation /></div>
                                <div className='detail-info'>516 , DOUAR IZIKI<br /> Marrakesh</div>
                            </div>
                            <div className='container-detail'>
                                <div>< FaPhone /></div>
                                <div className='detail-info'>+212 06 41 49 31 39</div>
                            </div>
                            <div className='container-detail'>
                                <div><FaEnvelope /></div>
                                <div className='detail-info'>imadiziki1@gmail.com</div>
                            </div>
                        </div>
                        <div className='company-text'>
                            أدوات الحلاقة الرّجاليّة من الأدوات المهمّة جداً للرجل، حيث يقبل على استخدامها مرّتين، إلى ثلاث مرّات في الأسبوع، لذا فلا بد من تواجدها كاملة دون نقصان ضمن مواد العناية الشخصية الّتي يستخدمها، مع ضرورة اختيارها من ماركات معروفة. احصل علئ احسن الاادوات باثمنة مناسبة.
                        </div>
                    </div>
                    <div className='icon-links'>
                        <a href="https://www.facebook.com/imad.coiffeure1" rel="noreferrer" target="_blank" > <FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://wa.me/212641493139" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a>
                        <a href="https://www.instagram.com/imad12422/?hl=fr" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://vm.tiktok.com/ZMY1SUNvn/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faTiktok} /></a>
                    </div>
                </div>
            </div>
            <div className='copy-right'> © avrnikh iziki {new Date().getFullYear()}</div>
        </div>
    );
}

export default Fotter
