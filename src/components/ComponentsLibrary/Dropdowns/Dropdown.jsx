import React, { useState, useEffect, useRef } from 'react';

import {
	DropdownWrapper,
	Label,
	Select,
	Placeholder,
	OptionList,
	Option,
	DropdownBtnWrapper,
	DropdownBtn,
	Arrow,
	RequiredSpan,
} from './Dropdown.styles'

/* USAGE
  PROPS:
    placeholder: string - input placeholder text (default none)
    width?: int - specify width (defualt 300)px
		optionsData: This is the  options data that needs to be passed in to be selected.
			- This will need to be refactored because I don't know what data is comin through yet.
			- Rght now it handles an Array of objects that have an option key/value for what they can select.
		inactive: loads css to make input unselectable and inactive.
		label: label for what kind of input it is 
		required: checks if required prop exists, if it does load requiredSpan
 */

const Dropdown = (props) => {
	const [listOpen, setListOpen] = useState(false);
	const [selected, setSelected] = useState(props.placeholder);
	const wrapperRef = useRef(null);
	
	useEffect(() => {
		// better way?
		document.addEventListener('click', handleClickOutside, false);
		return () => {
				document.removeEventListener('click', handleClickOutside, false);
		};
	}, []);

	const handleSelected = (e) => {
		e.preventDefault();
		setSelected(e.target.getAttribute('value'));
	};

	const toggleList = () => {
		setListOpen((listOpen ? false : true))    
	};
	
	const handleClickOutside = (event) => {
		if(wrapperRef.current && !wrapperRef.current.contains(event.target)) {
			setListOpen(false);
		}
	};

	if(!props.optionsData) {
		return null
	}

	const displayOptions = props.optionsData.map(data => (
		<Option
			key={data.id} 
			value={data.option}
			onClick={() => toggleList()}
		>{data.option}</Option>
	));

	return (
		<DropdownWrapper width={props.width} inactive={props.inactive} ref={wrapperRef}>
			<Label htmlFor="dropdown">
				{props.label}
				{
					props.required ? <RequiredSpan> *</RequiredSpan> : ''
				}
			</Label>
			<Select id="dropdown">
				<Placeholder selected={selected} placeholder={props.placeholder}>{!selected ? props.placeholder : selected}</Placeholder>
				<DropdownBtnWrapper onClick={() => toggleList()}>
					<DropdownBtn><Arrow open={listOpen}></Arrow></DropdownBtn>
				</DropdownBtnWrapper>
			</Select>
			<OptionList onClick={handleSelected} open={listOpen}>
				{displayOptions}
			</OptionList>
		</DropdownWrapper>
	);
};

export default Dropdown;