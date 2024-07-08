import React, { useContext } from 'react';
import styled from 'styled-components';
import { TransactionContext } from '../context/TransactionContext';

const TransactionList: React.FC = () => {
	const context = useContext(TransactionContext);

	if (!context) {
		throw new Error(
			'TransactionContext must be used within a TransactionProvider'
		);
	}

	const { transactions } = context;

	return (
		<ul>
			{transactions.map((transaction) => (
				<li key={transaction.id}>
					<span className='date'>{transaction.date}</span>
					<span className='category'>{transaction.category}</span>
					<span className={`amount ${transaction.type}`}>
						{transaction.amount}
					</span>
					<span className={`type ${transaction.type}`}>{transaction.type}</span>
				</li>
			))}
		</ul>
	);
};

export default TransactionList;
