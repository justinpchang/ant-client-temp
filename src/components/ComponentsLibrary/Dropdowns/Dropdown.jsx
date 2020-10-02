import React, { useState, useEffect, useRef } from 'react';

import {
    DropdownWrapper,
    Label,
    Select,
    Title,
    OptionList,
    Option,
    DropdownBtnWrapper,
    DropdownBtn,
    RequiredSpan,
} from './Dropdown.styles'

const Dropdown = ({ optionsData, header }) => {
    const [listOpen, setListOpen] = useState(true);
    const [selected, setSelected] = useState('');
    const wrapperRef = useRef(null);

    useEffect(() => {
        // better way?
        document.addEventListener('click', handleClickOutside, false);
        return () => {
            document.removeEventListener('click', handleClickOutside, false);
        };
    }, []);
    
    const handleClickOutside = (event) => {
        if(wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setListOpen(false);
        }
    };

    const toggleList = () => {
        setListOpen((listOpen ? false : true))        
    };

    if(!optionsData) {
        return null
    }

    const displayOptions = optionsData.map(data => (
        <Option key={data.id} value={data.month}>{data.month}</Option>
    ))

    return (
        <DropdownWrapper  ref={wrapperRef}>
            <Label htmlFor="dropdown">Field title text <RequiredSpan>*</RequiredSpan></Label>
            <Select width={12} id="dropdown">
                <Title>{!selected ? header : selected}</Title>
                <DropdownBtnWrapper onClick={() => toggleList()}>
                    <DropdownBtn open={listOpen}>{'>'}</DropdownBtn>
                </DropdownBtnWrapper>
            </Select>
            <OptionList onClick={(e) => setSelected(e.target.value)} open={listOpen}>
                {displayOptions}
            </OptionList>
        </DropdownWrapper>
    );
};

export default Dropdown;