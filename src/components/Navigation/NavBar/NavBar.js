import React from 'react';
import NavItem from './NavItem/NavItem';
import style from './NavBar.css';

const navBar = () => {
    return (
        <nav className={style.NavBar}>
            <ul>
                <NavItem link='/'>
                    <svg
                        enableBackground="new 0 0 128 128"
                        height="128px"
                        id="Layer_1"
                        version="1.1"
                        viewBox="0 0 128 128"
                        width="128px"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g>
                            <g>
                                <path d="M20,48h8v-8h-8V48z M52,40h8v-8h-8V40z M68,40h8v-8h-8V40z M84,40h8v-8h-8V40z M52,24h8v-8h-8V24z M68,24    h8v-8h-8V24z M84,24h8v-8h-8V24z M52,72h8v-8h-8V72z M68,72h8v-8h-8V72z M84,72h8v-8h-8V72z M52,88h8v-8h-8V88z M84,88h8v-8h-8V88    z M52,104h8v-8h-8V104z M84,104h8v-8h-8V104z M108,96h8v-8h-8V96z M108,72v8h8v-8H108z M108,112h8v-8h-8V112z M52,56h8v-8h-8V56z     M68,56h8v-8h-8V56z M84,56h8v-8h-8V56z M20,64h8v-8h-8V64z M20,80h8v-8h-8V80z M20,96h8v-8h-8V96z M20,112h8v-8h-8V112z M68,88h8    v-8h-8V88z" fill="#B0BEC5" />
                            </g>
                        </g>
                        <path clipRule="evenodd"
                            d="M124,120c0,4.422-3.578,8-8,8H12c-4.422,0-8-3.578-8-8V32  c0-4.422,3.578-8,8-8h24V8c0-4.422,3.578-8,8-8h56c4.422,0,8,3.578,8,8v48h8c4.422,0,8,3.578,8,8V120z M36,32H12v88h24V32z M100,8  H44v112h24V96h8v24h24V8z M116,64h-8v56h8V64z"
                            fill="#0489B1"
                            fillRule="evenodd" />
                    </svg>
                </NavItem>
                <NavItem link='/'>Home</NavItem>
            </ul>
        </nav >
    );
}

export default navBar;