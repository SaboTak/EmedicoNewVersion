import React , {useState} from 'react'
import { AiFillBell } from "react-icons/ai";
import { FaAlignJustify, FaUserAlt , FaSearch , FaChevronDown}  from "react-icons/fa";




/* Import images */
import Logo from '../../images/Logo.png'
import profile8 from '../../images/User.png'
    
export const Layout = () => {

    return (
        <div className="main">
        
        <div class="mobile-menu md:hidden">
            <div class="mobile-menu-bar">
                <a href="" class="flex mr-auto">
                    <img alt="Emedico" class="w-60" src={Logo} />
                </a>
                <a href="javascript:;" id="mobile-menu-toggler"> <FaAlignJustify class="w-8 h-8 text-white transform mr-5" /> </a>
            </div>
            <ul class="border-t border-theme-2 py-5 hidden">
                <li>
                    <a href="javascript:;.html" class="menu menu--active">
                        <div class="menu__icon"> <i data-feather="home"></i> </div>
                        <div class="menu__title"> Dashboard <i data-feather="chevron-down" class="menu__sub-icon transform rotate-180"></i> </div>
                    </a>
                    <ul class="menu__sub-open">
                        <li>
                            <a href="side-menu-dark-dashboard-overview-1.html" class="menu menu--active">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Overview 1 </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-dashboard-overview-2.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Overview 2 </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-dashboard-overview-3.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Overview 3 </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" class="menu">
                        <div class="menu__icon"> <i data-feather="box"></i> </div>
                        <div class="menu__title"> Menu Layout <i data-feather="chevron-down" class="menu__sub-icon "></i> </div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="side-menu-dark-dashboard-overview-1.html" class="menu menu--active">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Side Menu </div>
                            </a>
                        </li>
                        <li>
                            <a href="simple-menu-dark-dashboard-overview-1.html" class="menu menu--active">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Simple Menu </div>
                            </a>
                        </li>
                        <li>
                            <a href="top-menu-dark-dashboard-overview-1.html" class="menu menu--active">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Top Menu </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="side-menu-dark-inbox.html" class="menu">
                        <div class="menu__icon"> <i data-feather="inbox"></i> </div>
                        <div class="menu__title"> Inbox </div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-dark-file-manager.html" class="menu">
                        <div class="menu__icon"> <i data-feather="hard-drive"></i> </div>
                        <div class="menu__title"> File Manager </div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-dark-point-of-sale.html" class="menu">
                        <div class="menu__icon"> <i data-feather="credit-card"></i> </div>
                        <div class="menu__title"> Point of Sale </div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-dark-chat.html" class="menu">
                        <div class="menu__icon"> <i data-feather="message-square"></i> </div>
                        <div class="menu__title"> Chat </div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-dark-post.html" class="menu">
                        <div class="menu__icon"> <i data-feather="file-text"></i> </div>
                        <div class="menu__title"> Post </div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-dark-calendar.html" class="menu">
                        <div class="menu__icon"> <i data-feather="calendar"></i> </div>
                        <div class="menu__title"> Calendar </div>
                    </a>
                </li>
                <li class="menu__devider my-6"></li>
                <li>
                    <a href="javascript:;" class="menu">
                        <div class="menu__icon"> <i data-feather="edit"></i> </div>
                        <div class="menu__title"> Crud <i data-feather="chevron-down" class="menu__sub-icon "></i> </div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="side-menu-dark-crud-data-list.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Data List </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-crud-form.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Form </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" class="menu">
                        <div class="menu__icon"> <i data-feather="users"></i> </div>
                        <div class="menu__title"> Users <i data-feather="chevron-down" class="menu__sub-icon "></i> </div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="side-menu-dark-users-layout-1.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Layout 1 </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-users-layout-2.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Layout 2 </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-users-layout-3.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Layout 3 </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" class="menu">
                        <div class="menu__icon"> <i data-feather="trello"></i> </div>
                        <div class="menu__title"> Profile <i data-feather="chevron-down" class="menu__sub-icon "></i> </div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="side-menu-dark-profile-overview-1.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Overview 1 </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-profile-overview-2.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Overview 2 </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-profile-overview-3.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Overview 3 </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" class="menu">
                        <div class="menu__icon"> <i data-feather="layout"></i> </div>
                        <div class="menu__title"> Pages <i data-feather="chevron-down" class="menu__sub-icon "></i> </div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Wizards <i data-feather="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-wizard-layout-1.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wizard-layout-2.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Layout 2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wizard-layout-3.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Layout 3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Blog <i data-feather="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-blog-layout-1.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-blog-layout-2.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Layout 2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-blog-layout-3.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Layout 3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Pricing <i data-feather="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-pricing-layout-1.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-pricing-layout-2.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Layout 2</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Invoice <i data-feather="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-invoice-layout-1.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-invoice-layout-2.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Layout 2</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> FAQ <i data-feather="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-faq-layout-1.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Layout 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-faq-layout-2.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Layout 2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-faq-layout-3.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Layout 3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="login-dark-login.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Login </div>
                            </a>
                        </li>
                        <li>
                            <a href="login-dark-register.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Register </div>
                            </a>
                        </li>
                        <li>
                            <a href="main-dark-error-page.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Error Page </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-update-profile.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Update profile </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-change-password.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Change Password </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="menu__devider my-6"></li>
                <li>
                    <a href="javascript:;" class="menu">
                        <div class="menu__icon"> <i data-feather="inbox"></i> </div>
                        <div class="menu__title"> Components <i data-feather="chevron-down" class="menu__sub-icon "></i> </div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Table <i data-feather="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-regular-table.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Regular Table</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-tabulator.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Tabulator</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Overlay <i data-feather="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-modal.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Modal</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-slide-over.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Slide Over</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-notification.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Notification</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="side-menu-dark-accordion.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Accordion </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-button.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Button </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-alert.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Alert </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-progress-bar.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Progress Bar </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-tooltip.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Tooltip </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-dropdown.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Dropdown </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-typography.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Typography </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-icon.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Icon </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-loading-icon.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Loading Icon </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" class="menu">
                        <div class="menu__icon"> <i data-feather="sidebar"></i> </div>
                        <div class="menu__title"> Forms <i data-feather="chevron-down" class="menu__sub-icon "></i> </div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="side-menu-dark-regular-form.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Regular Form </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-datepicker.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Datepicker </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-tom-select.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Tom Select </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-file-upload.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> File Upload </div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Wysiwyg Editor <i data-feather="chevron-down" class="menu__sub-icon "></i> </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-wysiwyg-editor-classic.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Classic</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wysiwyg-editor-inline.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Inline</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wysiwyg-editor-balloon.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Balloon</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wysiwyg-editor-balloon-block.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Balloon Block</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-wysiwyg-editor-document.html" class="menu">
                                        <div class="menu__icon"> <i data-feather="zap"></i> </div>
                                        <div class="menu__title">Document</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="side-menu-dark-validation.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Validation </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" class="menu">
                        <div class="menu__icon"> <i data-feather="hard-drive"></i> </div>
                        <div class="menu__title"> Widgets <i data-feather="chevron-down" class="menu__sub-icon "></i> </div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="side-menu-dark-chart.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> chart </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-slider.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Slider </div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-dark-image-zoom.html" class="menu">
                                <div class="menu__icon"> <i data-feather="activity"></i> </div>
                                <div class="menu__title"> Image Zoom </div>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>


        <div class="top-bar-boxed border-b border-theme-2  -mt-7 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 md:pt-0 mb-1">
            <div class="h-full flex items-center">

                <a href="" class="-intro-x pl-8 hidden md:flex">
                    <img alt="Emedico" class="w-60 h-14 -mt-3" src={Logo} />
                </a>
                <div class="-intro-x breadcrumb mr-auto ml-0"> <a href="">Application</a> <i data-feather="chevron-right" class="breadcrumb__icon"></i> <a href="" class="breadcrumb--active">Dashboard</a> </div>
                <div class="intro-x relativeml-1 mr-3 sm:mr-6">
                    <div class="search hidden sm:block">
                        <input type="text" class="search__input form-control dark:bg-dark-1 border-transparent placeholder-theme-8" placeholder="Search..." />
                        <FaSearch  class="search__icon dark:text-gray-300" />
                    </div>
                    <a class="notification sm:hidden" href=""> <i data-feather="search" class="notification__icon dark:text-gray-300"></i> </a>
                    <div class="search-result">
                        <div class="search-result__content">
                            <div class="search-result__content__title">Pages</div>
                            <div class="mb-5">
                                <a href="" class="flex items-center">
                                    <div class="w-8 h-8 bg-theme-29 text-theme-10 flex items-center justify-center rounded-full"> <i class="w-4 h-4" data-feather="inbox"></i> </div>
                                    <div class="ml-3">Mail Settings</div>
                                </a>
                                <a href="" class="flex items-center mt-2">
                                    <div class="w-8 h-8 bg-theme-30 text-theme-24 flex items-center justify-center rounded-full"> <i class="w-4 h-4" data-feather="users"></i> </div>
                                    <div class="ml-3">Users & Permissions</div>
                                </a>
                                <a href="" class="flex items-center mt-2">
                                    <div class="w-8 h-8 bg-theme-31 text-theme-26 flex items-center justify-center rounded-full"> <i class="w-4 h-4" data-feather="credit-card"></i> </div>
                                    <div class="ml-3">Transactions Report</div>
                                </a>
                            </div>
                            <div class="search-result__content__title">Users</div>
                            <div class="mb-5">
                                <a href="" class="flex items-center mt-2">
                                    <div class="w-8 h-8 image-fit">
                                        <img alt="Icewall Tailwind HTML Admin Template" class="rounded-full" src={profile8} />
                                    </div>
                                    <div class="ml-3">Russell Crowe</div>
                                    <div class="ml-auto w-48 truncate text-gray-600 text-xs text-right">russellcrowe@left4code.com</div>
                                </a>
                                <a href="" class="flex items-center mt-2">
                                    <div class="w-8 h-8 image-fit">
                                        <img alt="Icewall Tailwind HTML Admin Template" class="rounded-full" src="../../images/profile-15.jpg" />
                                    </div>
                                    <div class="ml-3">Russell Crowe</div>
                                    <div class="ml-auto w-48 truncate text-gray-600 text-xs text-right">russellcrowe@left4code.com</div>
                                </a>
                                <a href="" class="flex items-center mt-2">
                                    <div class="w-8 h-8 image-fit">
                                        <img alt="Icewall Tailwind HTML Admin Template" class="rounded-full" src="../../images/profile-6.jpg" />
                                    </div>
                                    <div class="ml-3">Robert De Niro</div>
                                    <div class="ml-auto w-48 truncate text-gray-600 text-xs text-right">robertdeniro@left4code.com</div>
                                </a>
                                <a href="" class="flex items-center mt-2">
                                    <div class="w-8 h-8 image-fit">
                                        <img alt="Icewall Tailwind HTML Admin Template" class="rounded-full" src="../../images/profile-7.jpg" />
                                    </div>
                                    <div class="ml-3">Robert De Niro</div>
                                    <div class="ml-auto w-48 truncate text-gray-600 text-xs text-right">robertdeniro@left4code.com</div>
                                </a>
                            </div>
                            <div class="search-result__content__title">Products</div>
                            <a href="" class="flex items-center mt-2">
                                <div class="w-8 h-8 image-fit">
                                    <img alt="Icewall Tailwind HTML Admin Template" class="rounded-full" src="../../images/preview-9.jpg" />
                                </div>
                                <div class="ml-3">Oppo Find X2 Pro</div>
                                <div class="ml-auto w-48 truncate text-gray-600 text-xs text-right">Smartphone &amp; Tablet</div>
                            </a>
                            <a href="" class="flex items-center mt-2">
                                <div class="w-8 h-8 image-fit">
                                    <img alt="Icewall Tailwind HTML Admin Template" class="rounded-full" src="../../images/preview-12.jpg" />
                                </div>
                                <div class="ml-3">Nikon Z6</div>
                                <div class="ml-auto w-48 truncate text-gray-600 text-xs text-right">Photography</div>
                            </a>
                            <a href="" class="flex items-center mt-2">
                                <div class="w-8 h-8 image-fit">
                                    <img alt="Icewall Tailwind HTML Admin Template" class="rounded-full" src="../../images/preview-4.jpg" />
                                </div>
                                <div class="ml-3">Apple MacBook Pro 13</div>
                                <div class="ml-auto w-48 truncate text-gray-600 text-xs text-right">PC &amp; Laptop</div>
                            </a>
                            <a href="" class="flex items-center mt-2">
                                <div class="w-8 h-8 image-fit">
                                    <img alt="Icewall Tailwind HTML Admin Template" class="rounded-full" src="../../images/preview-9.jpg" />
                                </div>
                                <div class="ml-3">Sony Master Series A9G</div>
                                <div class="ml-auto w-48 truncate text-gray-600 text-xs text-right">Electronic</div>
                            </a>
                        </div>
                    </div>
                </div>


                <div class="intro-x dropdown mr-4 sm:mr-6">
                    <div class="dropdown-toggle notification notification--bullet cursor-pointer" role="button" aria-expanded="false"> <AiFillBell class="w-6 h-6 dark:text-gray-300" /> </div>
                    <div class="notification-content pt-2 dropdown-menu">
                        <div class="notification-content__box dropdown-menu__content box dark:bg-dark-6">
                            <div class="notification-content__title">Notifications</div>
                            <div class="cursor-pointer relative flex items-center ">
                                <div class="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Icewall Tailwind HTML Admin Template" class="rounded-full" src="../../images/profile-8.jpg" />
                                    <div class="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                </div>
                                <div class="ml-2 overflow-hidden">
                                    <div class="flex items-center">
                                        <a href="javascript:;" class="font-medium truncate mr-5">Russell Crowe</a> 
                                        <div class="text-xs text-gray-500 ml-auto whitespace-nowrap">06:05 AM</div>
                                    </div>
                                    <div class="w-full truncate text-gray-600 mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                </div>
                            </div>
                            <div class="cursor-pointer relative flex items-center mt-5">
                                <div class="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Icewall Tailwind HTML Admin Template" class="rounded-full" src="../../images/profile-15.jpg" />
                                    <div class="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                </div>
                                <div class="ml-2 overflow-hidden">
                                    <div class="flex items-center">
                                        <a href="javascript:;" class="font-medium truncate mr-5">Russell Crowe</a> 
                                        <div class="text-xs text-gray-500 ml-auto whitespace-nowrap">01:10 PM</div>
                                    </div>
                                    <div class="w-full truncate text-gray-600 mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                </div>
                            </div>
                            <div class="cursor-pointer relative flex items-center mt-5">
                                <div class="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Icewall Tailwind HTML Admin Template" class="rounded-full" src="../../images/profile-6.jpg" />
                                    <div class="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                </div>
                                <div class="ml-2 overflow-hidden">
                                    <div class="flex items-center">
                                        <a href="javascript:;" class="font-medium truncate mr-5">Robert De Niro</a> 
                                        <div class="text-xs text-gray-500 ml-auto whitespace-nowrap">01:10 PM</div>
                                    </div>
                                    <div class="w-full truncate text-gray-600 mt-0.5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</div>
                                </div>
                            </div>
                            <div class="cursor-pointer relative flex items-center mt-5">
                                <div class="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Icewall Tailwind HTML Admin Template" class="rounded-full" src="../../images/profile-7.jpg" />
                                    <div class="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                </div>
                                <div class="ml-2 overflow-hidden">
                                    <div class="flex items-center">
                                        <a href="javascript:;" class="font-medium truncate mr-5">Robert De Niro</a> 
                                        <div class="text-xs text-gray-500 ml-auto whitespace-nowrap">01:10 PM</div>
                                    </div>
                                    <div class="w-full truncate text-gray-600 mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                </div>
                            </div>
                            <div class="cursor-pointer relative flex items-center mt-5">
                                <div class="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Icewall Tailwind HTML Admin Template" class="rounded-full" src="../../images/profile-15.jpg" />
                                    <div class="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                </div>
                                <div class="ml-2 overflow-hidden">
                                    <div class="flex items-center">
                                        <a href="javascript:;" class="font-medium truncate mr-5">Arnold Schwarzenegger</a> 
                                        <div class="text-xs text-gray-500 ml-auto whitespace-nowrap">05:09 AM</div>
                                    </div>
                                    <div class="w-full truncate text-gray-600 mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="intro-x dropdown w-8 h-8">
                    <div class="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110" role="button" aria-expanded="false">
                    <FaUserAlt class="rounded-full w-8 h-8 text-black" />
                    </div>
                    <div class="dropdown-menu w-56">
                        <div class="dropdown-menu__content box bg-theme-11 dark:bg-dark-6 text-white">
                            <div class="p-4 border-b border-theme-12 dark:border-dark-3">
                                <div class="font-medium">Russell Crowe</div>
                                <div class="text-xs text-theme-13 mt-0.5 dark:text-gray-600">Frontend Engineer</div>
                            </div>
                            <div class="p-2">
                                <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <i data-feather="user" class="w-4 h-4 mr-2"></i> Profile </a>
                                <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <i data-feather="edit" class="w-4 h-4 mr-2"></i> Add Account </a>
                                <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <i data-feather="lock" class="w-4 h-4 mr-2"></i> Reset Password </a>
                                <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <i data-feather="help-circle" class="w-4 h-4 mr-2"></i> Help </a>
                            </div>
                            <div class="p-2 border-t border-theme-12 dark:border-dark-3">
                                <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <i data-feather="toggle-right" class="w-4 h-4 mr-2"></i> Logout </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="wrapper">
            <div class="wrapper-box">

                <nav class="side-nav">
                    <ul>
                        <li>
                            <a href="javascript:;.html" class="side-menu side-menu">
                                <div class="side-menu__icon"> <i data-feather="home"></i> </div>
                                <div class="side-menu__title">
                                    Configuracion 
                                    <div class="side-menu__sub-icon transform "> <FaChevronDown /> </div>
                                </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-1.html" class="side-menu side-menu--active">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Sucursales </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-2.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Bodegas </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-3.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Clases de Productos </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-3.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Grupos de productos </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-3.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Subgrupo de productos </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-3.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Marcas </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-3.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Unidades de medidas </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-3.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Productos </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-3.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Insumos </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-3.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Departamentos y ciudades </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-3.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Terceros </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-3.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Formas de pago </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-3.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Medios de pago </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-3.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Tipos de movimiento </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" class="side-menu">
                                <div class="side-menu__icon"> <i data-feather="box"></i> </div>
                                <div class="side-menu__title">
                                    Procesos 
                                    <div class="side-menu__sub-icon transform "> <FaChevronDown /> </div>
                                </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Ordenes de compra  </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="simple-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Facturas de venta </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Notas de cartera </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Recibo de caja </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Legalizacion de anticipos </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Movimientos de almacen </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Recepcion de traslados </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Conteos de inventario </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Tomas de Inventario </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Descuentos y promociones </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="side-menu-dark-inbox.html" class="side-menu">
                                
                                <div class="side-menu__title">Cuentas por pagar
                                <div class="side-menu__sub-icon transform"> <FaChevronDown /> </div>
                                </div>
                                
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-1.html" class="side-menu side-menu--active">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Facturas de proveedor compras o servicios </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-2.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Notas de proveedor </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-3.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Egresos de pagos a facturas de proveedor </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="side-menu-dark-file-manager.html" class="side-menu side-menu">
                                <div class="side-menu__title"> 
                                Contabilidad 
                                <div class="side-menu__sub-icon transform "> <FaChevronDown /> </div>
                                </div>
                                




                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Plan de cuentas  </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="simple-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Plan de cuentas Niif </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Centro de costo </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Ubicaciones </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Tipos de comprobante </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Comprobantes contables </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Tipos de gastos de caja menor </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Administración de Cajas menores </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Activos fijos </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Depreciacion de activos </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Diferidos </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Amortizacion de diferidos </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Cierre de mes </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Asientos de cierre </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Cierre de año </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Configuracion de Medios magneticos </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Configuracion informes Super Salud </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Importar documentos </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Auditoria </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="side-menu-dark-point-of-sale.html" class="side-menu">
                                <div class="side-menu__icon"> <i data-feather="credit-card"></i> </div>
                                <div class="side-menu__title"> Nomina 
                                <div class="side-menu__sub-icon transform"> <FaChevronDown /> </div>
                                </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Parametros de nomina  </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="simple-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Conceptos de nomina </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Entidades </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Cargos </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Empleados </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Novedades </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Conceptos por empleado </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Prestamo </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Liquidacion de nomina </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Provision de Seguridad social </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Liquidacion de vacaciones </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Liquidacion de primas de servicios </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Lquidacion de cesantias </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Liquidacion final del empleado </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="side-menu-dark-chat.html" class="side-menu">
                                <div class="side-menu__icon"> <i data-feather="message-square"></i> </div>
                                <div class="side-menu__title"> Presupuesto 
                                <div class="side-menu__sub-icon transform"> <FaChevronDown /> </div>
                                </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Niveles de presupuesto  </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="simple-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Periodo de presupuesto </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Configuracion base de presupuesto </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Elaboracion base de presupuesto </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Modificaciones de presupuesto </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Traslados entre items de presupuestos </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Reconocimiento </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Solicitud CDP </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Elaboracion CDP </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Registro de RP </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Ordenes de pago </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Cierre de RP </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Ejecucion presupuestal </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="side-menu-dark-post.html" class="side-menu">
                                <div class="side-menu__icon"> <i data-feather="file-text"></i> </div>
                                <div class="side-menu__title"> Informes 
                                <div class="side-menu__sub-icon transform"> <FaChevronDown /> </div>
                                </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Generales  </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="simple-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Informes POS </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Cuentas por pagar </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Listado de activos </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Saldos por cuenta </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Informes auxiliares por cuenta y tercero </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Informes super salud </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Balance de prueba </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Estados de resultados </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Estados de cambios en patrimonio </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Balance general </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Iva generado </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Bases gravadas </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Certificados de retencion  </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Medios magneticos  </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Informes de nomina  </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="side-menu-dark-calendar.html" class="side-menu">
                                <div class="side-menu__icon"> <i data-feather="calendar"></i> </div>
                                <div class="side-menu__title"> Sistema 
                                <div class="side-menu__sub-icon transform"> <FaChevronDown /> </div>
                                </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Perfiles de Usuario  </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Administracion de Usuarios  </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Licencia  </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Parametros del Sistema  </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Terminales  </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Administracion de consecutivos  </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Modelos de Contabilidad   </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Manejo de Turnos  </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Importar  </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="top-menu-dark-dashboard-overview-1.html" class="side-menu">
                                        <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                                        <div class="side-menu__title"> Actualizar informes  </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        
                    </ul>
                </nav>


                <div class="content">
                    
                </div>

            </div>
        </div>

        <div data-url="index.html" class="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 right-0 box dark:bg-dark-2 border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10">
            <div class="mr-4 text-gray-700 dark:text-gray-300">Dark Mode</div>
            <div class="dark-mode-switcher__toggle dark-mode-switcher__toggle--active border"></div>
        </div>

        </div>

    )
}
