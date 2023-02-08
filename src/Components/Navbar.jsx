import React, { useState } from "react";
import logo from "../assests/hose.png";
import { User, UserAdd } from "iconsax-react";
import { Turn as Hamburger } from 'hamburger-react'
import { Container, Logo, Logo2, Responsive, ResponsiveRow, Icon, Hr, Row, Button, NavItem } from "./design"
import { Link } from "react-router-dom";

const Navbar = ({ callback, id = -1 }) => {
    const [active, setActive] = useState(0)
    const [open, setOpen] = useState(false)
    const links = [{ title: "Acceuil" },
    { title: "Nouvelle" },
    { title: "Rechercher" },
    { title: "contacter" }]

    return (
        <Container>
            <Logo2 color="#e20112" src={logo} />
            <Icon>

                <Hamburger rounded size={20} toggled={open} toggle={setOpen} />
            </Icon>

            <Responsive open={open}>
                <Logo color="#e20112" src={logo} />
                <ResponsiveRow>
                    {
                        links.map((v, i) => {
                            return (
                                <Link style={{ textDecoration: "none" }} to={"/"}>
                                    <NavItem onClick={() => setActive(i)}>
                                        <span>{v.title}</span>
                                        <Hr active={active == i && id < 5} />
                                    </NavItem>
                                </Link>
                            )
                        })
                    }
                    <Link style={{ textDecoration: "none" }} to={"/cree"}>
                        <NavItem onClick={callback}>
                            <span>Creer</span>
                            <Hr active={id == 5} />
                        </NavItem>
                    </Link>
                </ResponsiveRow>
                <Row>
                    <Button>
                        <User size="18" color="#262626" />
                        <span>
                            Login
                        </span>
                    </Button>
                    <Button primary={true}>
                        <UserAdd size="18" color="#FFF" />
                        <span>
                            Register
                        </span>
                    </Button>
                </Row>
            </Responsive>
        </Container >
    );
}
export default Navbar;

/*
 <div className=" ">
            <div className="flex items-center bg-white justify-between   px-4    ">
                <div className="lg:hidden flex items-center ">
                    <FiMenu className="w-7 h-7" />
                </div>
                <div className="shrink-0 relative">
                    <div className="-my-[0.7rem] ">
                        <img src={logo} className="w-32 " />
                    </div>

                </div>
                <div className="hidden lg:flex  ">
                    <ul className="flex space-x-10  py-4 ">

                        {buttons.map((button) => <NavBin title={button.title} />)}
                    </ul>
                </div>


                <div className=" w-10 h-10 bg-[#e20112] rounded-full text-white flex items-center justify-center lg:hidden " >
                    < HiOutlineUser className="text-[30px] " />
                </div>


                <div className="hidden items-center lg:flex  ">
                    {" "}
                    <div className="" >Sign up</div>
                    <div className="bg-[#e20112] py-[6px] text-white rounded-full px-4 ml-6 flex items-center " >Log in</div>



                </div>
            </div>
        </div>

*/