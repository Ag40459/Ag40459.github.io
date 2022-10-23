import Close from '../assets/close.png';
import { useState } from "react";
import { useLocalStorage } from "react-use";
import listProduct from "../dados";

function useUseProvider() {
    const [token, setToken, removeToken] = useLocalStorage('token', '');
    const [listCarShopping, setListCarShopping, removeListCarShopping] = useLocalStorage('listCarShopping', [{}]);
    const [openModalProduct, setOpenModalProduct] = useState(false);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
    const [openModalCarShopping, setOpenModalCarShopping] = useState(false);
    const [dayOffer, setDayOffer] = useState('Domingo');
    const [topPosition, setTopPosition] = useState(0);
    const [category, setCategory] = useState('');
    const [listCategory, setListCategory] = useState([]);
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [titleProduct, setTitleProduct] = useState('');
    const [productSelect, setProductSelect] = useState({});
    const [listProductModal, setListProductModal] = useState(listProduct);
    const [idCategoryProduct, setIdCategoryProduct] = useState('');
    const [priceProduct, setPriceProduct] = useState('');
    const [descriptionProduct, setDescriptionProduct] = useState('');
    const [imageProduct, setImageProduct] = useState('');

    return {
        token, setToken, removeToken, openModalProduct, setOpenModalProduct, openSignIn, setOpenSignIn, openRegister, dayOffer, setDayOffer, setOpenRegister, openModalCarShopping, setOpenModalCarShopping, listProductModal, setListProductModal, productSelect, setProductSelect, topPosition, setTopPosition, listCategory, setListCategory, listCarShopping, setListCarShopping, removeListCarShopping, category, setCategory, name, setName, email, setEmail, pass, setPass, titleProduct, setTitleProduct, idCategoryProduct, setIdCategoryProduct, priceProduct, setPriceProduct, descriptionProduct, setDescriptionProduct, imageProduct, setImageProduct, user, setUser, Close
    }
}

export default useUseProvider;
