import React from 'react';
import './filters.css';

function Filters() {
    return (
        <div>
              <section className="htc__shop__sidebar bg__white ptb--120">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                        <div className="htc__shop__left__sidebar">
                            {/* <!-- Start Range --> */}
                            <div className="htc-grid-range">
                                <h4 className="section-title-4">FILTER BY PRICE</h4>
                                <div className="content-shopby">
                                    <div className="price_filter s-filter clear">
                                        <form action="#" method="GET">
                                            <div id="slider-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><div className="ui-slider-range ui-widget-header ui-corner-all"></div><span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" ></span><span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span></div>
                                            <div className="slider__range--output">
                                                <div className="price__output--wrap">
                                                    <div className="price--output">
                                                        <span>Price :</span><input type="text" id="amount" readonly="" />
                                                    </div>
                                                    <div className="price--filter">
                                                        <a href="www.google.com">Filter</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Range -->
                            <!-- Start Product Cat --> */}
                            <div className="htc__shop__cat">
                                <h4 className="section-title-4">PRODUCT CATEGORIES</h4>
                                <ul className="sidebar__list">
                                    <li><a href="www.google.com">Accessories <span>3</span></a></li>
                                    <li><a href="www.google.com">Book <span>4</span></a></li>
                                    <li><a href="www.google.com">Clothing <span>3</span></a></li>
                                    <li><a href="www.google.com">Homelife <span>6</span></a></li>
                                    <li><a href="www.google.com">Kids &amp; Baby <span>10</span></a></li>
                                    <li><a href="www.google.com">Stationery <span>3</span></a></li>
                                    <li><a href="www.google.com">Health &amp; Beauty <span>12</span></a></li>
                                    <li><a href="www.google.com">Home Appliances <span>15</span></a></li>
                                </ul>
                            </div>
                            {/* <!-- End Product Cat -->
                            <!-- Start Color Cat --> */}
                            <div className="htc__shop__cat">
                                <h4 className="section-title-4">CHOOSE COLOUR</h4>
                                <ul className="sidebar__list">
                                    <li className="black"><a href="www.google.com"><i className="zmdi zmdi-circle"></i>Black<span>3</span></a></li>
                                    <li className="blue"><a href="www.google.com"><i className="zmdi zmdi-circle"></i>Blue <span>4</span></a></li>
                                    <li className="brown"><a href="www.google.com"><i className="zmdi zmdi-circle"></i>Brown <span>3</span></a></li>
                                    <li className="red"><a href="www.google.com"><i className="zmdi zmdi-circle"></i>Red <span>6</span></a></li>
                                    <li className="orange"><a href="www.google.com"><i className="zmdi zmdi-circle"></i>Orange <span>10</span></a></li>
                                </ul>
                            </div>
                            {/* <!-- End Color Cat -->
                            <!-- Start Size Cat --> */}
                            <div className="htc__shop__cat">
                                <h4 className="section-title-4">PRODUCT CATEGORIES</h4>
                                <ul className="sidebar__list">
                                    <li><a href="www.google.com">xl <span>3</span></a></li>
                                    <li><a href="www.google.com">l <span>4</span></a></li>
                                    <li><a href="www.google.com">lm <span>3</span></a></li>
                                    <li><a href="www.google.com">ml <span>6</span></a></li>
                                    <li><a href="www.google.com">m <span>10</span></a></li>
                                    <li><a href="www.google.com">ml <span>3</span></a></li>
                                </ul>
                            </div>
                            {/* <!-- End Size Cat -->
                            <!-- Start Tag Area --> */}
                            <div className="htc__shop__cat">
                                <h4 className="section-title-4">Tags</h4>
                                <ul className="htc__tags">
                                    <li><a href="www.google.com">All</a></li>
                                    <li><a href="www.google.com">Clothing</a></li>
                                    <li><a href="www.google.com">Kids</a></li>
                                    <li><a href="www.google.com">Accessories</a></li>
                                    <li><a href="www.google.com">Stationery</a></li>
                                    <li><a href="www.google.com">Homelife</a></li>
                                    <li><a href="www.google.com">Appliances</a></li>
                                    <li><a href="www.google.com">Clothing</a></li>
                                    <li><a href="www.google.com">Baby</a></li>
                                    <li><a href="www.google.com">Beauty</a></li>
                                </ul>
                            </div>
                            {/* <!-- End Tag Area --> */}
                        </div>
                    </div>
                    <div className="col-md-9 col-lg-9 col-sm-12 col-xs-12 smt-30">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <div className="producy__view__container">
                                    {/* <!-- Start Short Form --> */}
                                    <div className="product__list__option">
                                        <div className="order-single-btn">
                                            <select className="select-color selectpicker">
                                              <option>Sort by newness</option>
                                              <option>Match</option>
                                              <option>Updated</option>
                                              <option>Title</option>
                                              <option>Category</option>
                                              <option>Rating</option>
                                            </select>
                                        </div>
                                        <div className="shp__pro__show">
                                            <span>Showing 1 - 4 of 25 results</span>
                                        </div>
                                    </div>
                                    {/* <!-- End Short Form -->
                                    <!-- Start List And Grid View --> */}
                                    <ul className="view__mode" role="tablist">
                                        <li role="presentation" className="grid-view active"><a href="#grid-view" role="tab" data-toggle="tab"><i className="zmdi zmdi-grid"></i></a></li>
                                        <li role="presentation" className="list-view"><a href="#list-view" role="tab" data-toggle="tab"><i className="zmdi zmdi-view-list"></i></a></li>
                                    </ul>
                                    {/* <!-- End List And Grid View --> */}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="shop__grid__view__wrap">
                                {/* <!-- Start Single View --> */}
                                <div id="grid-view" className="single-grid-view tab-pane active clearfix">
                                    {/* <!-- Start Single Product --> */}
                                    <div className="col-md-3 col-lg-4 col-sm-4 col-xs-12">
                                        <div className="product">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="www.google.com">
                                                        <img src={require('../../assets/images/product/1.png')} alt="product images" />
                                                    </a>
                                                </div>
                                                <div class="product__hover__info">
                                                    <div className='view_more_btn'>View</div>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Product -->
                                    <!-- Start Single Product --> */}
                                    <div className="col-md-3 col-lg-4 col-sm-4 col-xs-12">
                                        <div className="product"> 
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="www.google.com">
                                                        <img src={require('../../assets/images/product/2.png')} alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <div class="product__hover__info">
                                                        <div className='view_more_btn'>View</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Product -->
                                    <!-- Start Single Product --> */}
                                    <div className="col-md-3 col-lg-4 col-sm-4 col-xs-12">
                                        <div className="product">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="www.google.com">
                                                        <img src={require('../../assets/images/product/3.png')} alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <div class="product__hover__info">
                                                        <div className='view_more_btn'>View</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Product -->
                                    <!-- Start Single Product --> */}
                                    <div className="col-md-3 col-lg-4 col-sm-4 col-xs-12">
                                        <div className="product">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="www.google.com">
                                                        <img src={require('../../assets/images/product/4.png')} alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <div class="product__hover__info">
                                                        <div className='view_more_btn'>View</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Product -->
                                    <!-- Start Single Product --> */}
                                    <div className="col-md-3 col-lg-4 col-sm-4 col-xs-12">
                                        <div className="product">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="www.google.com">
                                                        <img src={require('../../assets/images/product/5.png')} alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <div class="product__hover__info">
                                                        <div className='view_more_btn'>View</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Product -->
                                    <!-- Start Single Product --> */}
                                    <div className="col-md-3 col-lg-4 col-sm-4 col-xs-12">
                                        <div className="product">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="www.google.com">
                                                        <img src={require('../../assets/images/product/6.png')} alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <div class="product__hover__info">
                                                        <div className='view_more_btn'>View</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Product -->
                                    <!-- Start Single Product --> */}
                                    <div className="col-md-3 col-lg-4 col-sm-4 col-xs-12">
                                        <div className="product">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="www.google.com">
                                                        <img src={require('../../assets/images/product/7.png')} alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <div class="product__hover__info">
                                                        <div className='view_more_btn'>View</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Product -->
                                    <!-- Start Single Product --> */}
                                    <div className="col-md-3 col-lg-4 col-sm-4 col-xs-12">
                                        <div className="product">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="www.google.com">
                                                        <img src={require('../../assets/images/product/8.png')} alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <div class="product__hover__info">
                                                        <div className='view_more_btn'>View</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Product --> */}
                                    {/* <!-- Start Single Product --> */}
                                    <div className="col-md-3 col-lg-4 col-sm-4 col-xs-12">
                                        <div className="product">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="www.google.com">
                                                        <img src={require('../../assets/images/product/9.png')} alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <div class="product__hover__info">
                                                        <div className='view_more_btn'>View</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Product --> */}
                                    {/* <!-- Start Single Product --> */}
                                    <div className="col-md-3 col-lg-4 col-sm-4 col-xs-12">
                                        <div className="product">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="www.google.com">
                                                        <img src={require('../../assets/images/product/10.png')} alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <div class="product__hover__info">
                                                        <div className='view_more_btn'>View</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Product --> */}
                                    {/* <!-- Start Single Product --> */}
                                    <div className="col-md-3 col-lg-4 col-sm-4 col-xs-12">
                                        <div className="product">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="www.google.com">
                                                        <img src={require('../../assets/images/product/11.png')} alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <div class="product__hover__info">
                                                        <div className='view_more_btn'>View</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Product --> */}
                                    {/* <!-- Start Single Product --> */}
                                    <div className="col-md-3 col-lg-4 col-sm-4 col-xs-12">
                                        <div className="product">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="www.google.com">
                                                        <img src={require('../../assets/images/product/12.png')} alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <div class="product__hover__info">
                                                        <div className='view_more_btn'>View</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Product --> */}
                                </div>
                                {/* <!-- End Single View --> */}
                                {/* <!-- Start Single View --> */}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Filters;