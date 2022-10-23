import Close from '../assets/close.png';
import { useState } from "react";
import { useLocalStorage } from "react-use";
import listProduct from "../dados";

function useUseProvider() {
    const [token, setToken, removeToken] = useLocalStorage('token', '');
    const [openModalProduct, setOpenModalProduct] = useState(false);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
    const [listProductModal, setListProductModal] = useState(listProduct);
    const [productSelect, setProductSelect] = useState({});
    const [topPosition, setTopPosition] = useState(0);
    const [listCategory, setListCategory] = useState([]);
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [titleProduct, setTitleProduct] = useState('');
    const [idCategoryProduct, setIdCategoryProduct] = useState('');
    const [priceProduct, setPriceProduct] = useState('');
    const [descriptionProduct, setDescriptionProduct] = useState('');
    const [imageProduct, setImageProduct] = useState('');

    // const [array]



    return {
        token, setToken, removeToken, openModalProduct, setOpenModalProduct, openSignIn, setOpenSignIn, openRegister, setOpenRegister, listProductModal, setListProductModal, productSelect, setProductSelect, topPosition, setTopPosition, listCategory, setListCategory, category, setCategory, name, setName, email, setEmail, pass, setPass, titleProduct, setTitleProduct, idCategoryProduct, setIdCategoryProduct, priceProduct, setPriceProduct, descriptionProduct, setDescriptionProduct, imageProduct, setImageProduct, user, setUser, Close
    }
}

export default useUseProvider;
