import { Link } from 'react-router-dom';
import styleCss from '../style-componen/style-homePageshero.module.css'
import { AiOutlineStar, AiOutlineLeft, AiOutlineRight, AiOutlineCopyrightCircle } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const HomePagesHero = () => {

    return (
        <div>
            <div className={styleCss.container1}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className={styleCss.conten1}>
                                <h1 className='text-center fw-bold'>EXPLOLER, <br /> DREAM & CREATE</h1>
                            </div>
                            <button className={styleCss.btnReadMore}>READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className={styleCss.border}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img className={styleCss.imageKamarTidur} src='https://d3p0bla3numw14.cloudfront.net/news-content/img/2022/01/29050615/Furniture-Kamar-Tidur1.png' alt='gambar kamar tidur' />
                        </div>
                        <div className='col-lg-6'>
                            <h1>WE ARE THE HOME<br />TECHNOLOGY EXPERTS</h1>
                            <p className='mt-4 mb-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem.
                            </p>
                            <button className={styleCss.btn2}>READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styleCss.conten2}>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-lg-4'>
                            <img className={styleCss.imageHero} src='https://images.adsttc.com/media/images/61dd/851b/23d7/e815/10c3/8b19/newsletter/tmz14.jpg?1641907518' alt='iamge whorking area' />
                        </div>
                        <div className='col-lg-4'>
                            <img className={styleCss.imageHero} src='https://images.adsttc.com/media/images/61dd/851b/23d7/e815/10c3/8b19/newsletter/tmz14.jpg?1641907518' alt='iamge whorking area' />
                        </div>
                        <div className='col-lg-4'>
                            <img className={styleCss.imageHero} src='https://images.adsttc.com/media/images/61dd/851b/23d7/e815/10c3/8b19/newsletter/tmz14.jpg?1641907518' alt='iamge whorking area' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row mb-5'>
                    <div className={`col-lg-4 ${styleCss.mobileContenResidential}`}>
                        <div className='mb-5'>
                            <h3 className='text-center mt-3'>RESIDENTIAL</h3>
                            <p className='text-center'>Lorem ipsum dolor sit amet</p>
                            <p className='text-center'>Lorem ipsum dolor</p>
                            <button className={styleCss.btn3}>LEARN ABOUT</button>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='mb-5'>
                            <h3 className='text-center mt-3'>RESIDENTIAL</h3>
                            <p className='text-center'>Lorem ipsum dolor sit amet</p>
                            <p className='text-center'>Lorem ipsum dolor</p>
                            <button className={styleCss.btn3}>LEARN ABOUT</button>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='mb-5'>
                            <h3 className='text-center mt-3'>RESIDENTIAL</h3>
                            <p className='text-center'>Lorem ipsum dolor sit amet</p>
                            <p className='text-center'>Lorem ipsum dolor</p>
                            <button className={styleCss.btn3}>LEARN ABOUT</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styleCss.conten3}>
                <div className='container'>
                    <div className='row pt-4'>
                        <div className='col-lg-12'>
                            <h1 className='text-center mt-5'>OUR PRODUCTS</h1>
                            <div className={`d-flex justify-content-center mt-3 ${styleCss.btnAll}`}>
                                <button className={styleCss.btn4}>ALL</button>
                                <button className={styleCss.btn4}>FURNITURES</button>
                                <button className={styleCss.btn4}>DECORATION</button>
                                <button className={styleCss.btn4}>ACCESSORIES</button>
                            </div>
                            <div className='row position-relative mt-5 mb-5'>
                                <div className='col-lg-4'>
                                    <div className="card bg-transparent border-0" style={{ width: "18rem;" }}>
                                        <img className={styleCss.imagesProduct} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTcj_xFRkpqTcvX6_UmIyNT0N7oHUpXAOgi0ygNiGYRIwfK_SkvLkIyEFhyjdoA5y2Bew&usqp=CAU" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title text-center mt-2">WIFI BLANKET</h5>
                                            <div className='d-flex justify-content-center'>
                                                <AiOutlineStar className='text-success fs-3' />
                                                <AiOutlineStar className='text-success fs-3' />
                                                <AiOutlineStar className='text-success fs-3' />
                                                <AiOutlineStar className='text-success fs-3' />
                                                <AiOutlineStar className='text-success fs-3' />
                                            </div>
                                            <p className='text-center'>$602.00</p>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="card bg-transparent border-0" style={{ width: "18rem;" }}>
                                        <img className={styleCss.imagesProduct} src="https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/02/2.-classic-round-arm-sofa.jpg" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title text-center mt-2">SOFA</h5>
                                            <div className='d-flex justify-content-center'>
                                                <AiOutlineStar className='text-success fs-3' />
                                                <AiOutlineStar className='text-success fs-3' />
                                                <AiOutlineStar className='text-success fs-3' />
                                                <AiOutlineStar className='text-success fs-3' />
                                                <AiOutlineStar className='text-success fs-3' />
                                            </div>
                                            <p className='text-center'>$602.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="card bg-transparent border-0" style={{ width: "18rem;" }}>
                                        <img className={styleCss.imagesProduct} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTcj_xFRkpqTcvX6_UmIyNT0N7oHUpXAOgi0ygNiGYRIwfK_SkvLkIyEFhyjdoA5y2Bew&usqp=CAU" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title text-center mt-2">WIFI BLANKET</h5>
                                            <div className='d-flex justify-content-center'>
                                                <AiOutlineStar className='text-success fs-3' />
                                                <AiOutlineStar className='text-success fs-3' />
                                                <AiOutlineStar className='text-success fs-3' />
                                                <AiOutlineStar className='text-success fs-3' />
                                                <AiOutlineStar className='text-success fs-3' />
                                            </div>
                                            <p className='text-center'>$602.00</p>
                                        </div>
                                    </div>
                                </div>
                                <button className={styleCss.btnLeft}><AiOutlineLeft className='text-success' /></button>
                                <button className={styleCss.btnRigt}><AiOutlineRight className='text-success' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-8'>
                        <div className='position-relative'>
                            <h1 className='text-center'>WHAT PEOPLE SAYING <br />''</h1>
                            <div className='d-flex justify-content-center'>
                                <AiOutlineStar className='text-success fs-3' />
                                <AiOutlineStar className='text-success fs-3' />
                                <AiOutlineStar className='text-success fs-3' />
                                <AiOutlineStar className='text-success fs-3' />
                                <AiOutlineStar className='text-success fs-3' />
                            </div>
                            <p className='text-center mt-3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem
                            </p>
                            <div className={styleCss.iconProfil}>
                                <img className={styleCss.imageProfile} src='https://www.biografiku.com/wp-content/uploads/2018/08/biografi-sandiaga-uno.jpg' alt='gambar profil' />
                            </div>
                            <h4 className='text-center text-success mt-2'>SCOTT & SHERLEY</h4>
                            <p className='text-center mb-5'>A. Mambaus Sholihin</p>
                            <button className={styleCss.btnLeft1}><AiOutlineLeft className='text-success' /></button>
                            <button className={styleCss.btnRigt1}><AiOutlineRight className='text-success' /></button>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <img className='w-100 h-100 mb-5' src='https://www.kahfeveryday.com/wp-content/uploads/2020/10/shutterstock_1233726961-scaled.jpg' alt='image hero profil' />
                    </div>
                    <div className={styleCss.conten4}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <h1 className='text-center mb-5'>AWESOME PORTFOLIO</h1>
                                    <div className={styleCss.containerImage}>
                                        <div className='position-relative'>
                                            <div className={styleCss.contenImage}>VIEW</div>
                                            <img className={styleCss.imageRuangan} src='https://asset.kompas.com/crops/_EXG2p6ZOaARjQ-RJhHSM9e2MJU=/117x0:988x581/750x500/data/photo/2022/02/12/62073285a358b.jpg' alt='iamge ruangan' />
                                        </div>
                                        <div className='position-relative'>
                                            <div className={styleCss.contenImage}>VIEW</div>
                                            <img className={styleCss.imageRuangan} src='https://asset.kompas.com/crops/_EXG2p6ZOaARjQ-RJhHSM9e2MJU=/117x0:988x581/750x500/data/photo/2022/02/12/62073285a358b.jpg' alt='iamge ruangan' />
                                        </div>
                                        <div className='position-relative'>
                                            <div className={styleCss.contenImage}>VIEW</div>
                                            <img className={styleCss.imageRuangan} src='https://asset.kompas.com/crops/_EXG2p6ZOaARjQ-RJhHSM9e2MJU=/117x0:988x581/750x500/data/photo/2022/02/12/62073285a358b.jpg' alt='iamge ruangan' />
                                        </div>
                                        <div className='position-relative'>
                                            <div className={styleCss.contenImage}>VIEW</div>
                                            <img className={styleCss.imageRuangan} src='https://asset.kompas.com/crops/_EXG2p6ZOaARjQ-RJhHSM9e2MJU=/117x0:988x581/750x500/data/photo/2022/02/12/62073285a358b.jpg' alt='iamge ruangan' />
                                        </div>
                                        <div className='position-relative'>
                                            <div className={styleCss.contenImage}>VIEW</div>
                                            <img className={styleCss.imageRuangan} src='https://asset.kompas.com/crops/_EXG2p6ZOaARjQ-RJhHSM9e2MJU=/117x0:988x581/750x500/data/photo/2022/02/12/62073285a358b.jpg' alt='iamge ruangan' />
                                        </div>
                                        <div className='position-relative'>
                                            <div className={styleCss.contenImage}>VIEW</div>
                                            <img className={styleCss.imageRuangan} src='https://asset.kompas.com/crops/_EXG2p6ZOaARjQ-RJhHSM9e2MJU=/117x0:988x581/750x500/data/photo/2022/02/12/62073285a358b.jpg' alt='iamge ruangan' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img className='w-100' src='https://imgsrv2.voi.id/HpO09gZIQxpPSpVKdPkkZwaQELHpXUDAgoUw26q-tiA/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xNTE4MjMvMjAyMjAzMzEwODA3LW1haW4uSlBH.jpg' alt='imag peta' />
            </div>
            <div className={styleCss.conten5}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className={styleCss.containerBtnContact}>
                                <h1>HAVE QUESTIONS ? <br /> WE HAVE ANSWERS</h1>
                                <button className={styleCss.btnContact}>CONTACT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='container'>
                    <div className='row custom-row mt-5 mb-5'>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
                            <h3>QUICK LINKS</h3>
                            <ul>
                                <li><Link to='/' className='text-decoration-none text-dark'>Home</Link></li>
                                <li><Link className='text-decoration-none text-dark'>About</Link></li>
                                <li><Link className='text-decoration-none text-dark'>Services</Link></li>
                                <li><Link className='text-decoration-none text-dark'>Portfolio</Link></li>
                                <li><Link className='text-decoration-none text-dark'>Contact</Link></li>
                                <li><Link to='/stoptwarch' className='text-decoration-none text-dark'>StoptWarch</Link></li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
                            <h3>SUPPORT</h3>
                            <ul>
                                <li><Link className='text-decoration-none text-dark'>FAQ</Link></li>
                                <li><Link className='text-decoration-none text-dark'>Employment</Link></li>
                                <li><Link className='text-decoration-none text-dark'>Request A Quick</Link></li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
                            <h3>MORE INFO</h3>
                            <ul>
                                <li><Link className='text-decoration-none text-dark'>News</Link></li>
                                <li><Link className='text-decoration-none text-dark'>Media</Link></li>
                                <li><Link className='text-decoration-none text-dark'>Videos</Link></li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
                            <h3>CONTACT</h3>
                            <div className='d-flex'>
                                <SiGooglemaps className='mt-2' />
                                <p className='ms-2'>
                                    61155 Bangeran <br />
                                    Gresik Jawa Timur <br />
                                    085730839962
                                </p>
                            </div>
                            <div className='d-flex'>
                                <MdEmail className='mt-2' />
                                <p className='ms-2'>
                                    mambaus.jobs@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styleCss.footer}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <p className='text-center text-white'><AiOutlineCopyrightCircle className='text-white' />2023 <span className={styleCss.spanFooter}>MY QUYS KNOW HOW</span>. ALL RESORT RESEVLORT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePagesHero