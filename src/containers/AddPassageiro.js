import React from 'react';
import { addPassageiro } from '../actions';
import { connect } from 'react-redux';
import './form.css';

function AddPassageiro({ dispatch }) {
    let input;
    return (
        <div className="form-field">
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return;
                }
                dispatch(addPassageiro(input.value));
                input.value = '';
            }}>
                <input type="text" ref={node => (input = node)} />
                <button type="submit">
                    Adicionar passageiro
                </button>
            </form>
        </div>
    );
}

export default connect()(AddPassageiro);