import React from 'react';

export const Transaction = ({transaction}) => {
    return (
        <li className="plus">
            {transaction.description}
            <span>{transaction.transactionAmount}</span>
            <button className="delete-button">X</button>
        </li>
    );
}