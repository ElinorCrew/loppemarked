import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/_createNewMarket';

const cx = classNames.bind(styles);

export default class CreateNewMarket extends Component {
	componentDidMount() {
	    $('.ui.radio.checkbox').checkbox();  
	}	
	
	render(){
		return (
			<div className={cx('ui','container','formContainer')}>
			<div className={cx('ui','header')}>Legg til nytt marked</div>
				<div className={cx('ui','form', 'formPadding')}>
				    <label>Navn på marked</label>
				    <div className={cx('twelve','wide','field')}>
				      <input type="text" placeholder="Markedsnavn"/>
				    </div>
				  	<label>Hvor skal markedet arrangeres?</label>
				  <div className={cx('fields')}>
				    <div className={cx('ten','wide','field')}>
				      <input type="text" placeholder="Gate"/>
				    </div>
				    <div className={cx('two','wide','field')}>
				      <input type="text" placeholder="Gatenummer"/>
				    </div>
				  </div>
				  <div className={cx('fields')}>
				    <div className={cx('ten','wide','field')}>
				      <input type="text" placeholder="Poststed"/>
				    </div>
				    <div className={cx('two','wide','field')}>
				      <input type="text" placeholder="Postnummer"/>
				    </div>
				  </div>
				<label>Når skal markedet arrangeres?</label>
				  <div className={cx('ui','message')}>
				    <div className={cx('header')}>TODO: Add datepicker</div>
				  </div>
				<label>Gi gjerne litt informasjon om markedet</label>
				<textarea></textarea>

				<div className={cx('grouped', 'fields')}>
			    <label for="fruit">Hvilken type marked vil du legge til?</label>
			    <div className={cx('field')}>
			      <div className={cx('ui','radio','checkbox')}>
			        <input type="radio" name="fruit" checked="true" tabindex="0" className={cx('hidden')}/>
			        <label>Loppemarked</label>
			      </div>
			    </div>
			    <div className={cx('field')}>
			      <div className={cx('ui','radio','checkbox')}>
			        <input type="radio" name="fruit" tabindex="0" className={cx('hidden')}/>
			        <label>Garasjesalg</label>
			      </div>
			    </div>
			    <div className={cx('field')}>
			      <div className={cx('ui','radio','checkbox')}>
			        <input type="radio" name="fruit" tabindex="0" className={cx('hidden')}/>
			        <label>Større arrangement</label>
			      </div>
			    </div>
			    <div className={cx('field')}>
			      <div className={cx('ui','radio','checkbox')}>
			        <input type="radio" name="fruit" tabindex="0" className={cx('hidden')}/>
			        <label>Annet</label>
			      </div>
			    </div>
			</div>
			<button className={cx('ui','button')} type="submit">Legg til marked</button>
			</div>
			</div>
			);
	}
}

