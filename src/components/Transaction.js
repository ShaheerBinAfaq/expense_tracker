import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const {deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.transactionAmount < 0 ? 'minus' : 'plus';
    return (
        <li className={sign}>
            {transaction.description}
            <span>${transaction.transactionAmount}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">X</button>
        </li>
    );
}