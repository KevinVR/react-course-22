import {atom} from "recoil";

const clickAtom = atom({
    key: 'click', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
});

export default clickAtom;