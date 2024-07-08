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
					<span>{transaction.date}</span>
					<span>{transaction.category}</span>
					<span>{transaction.amount}</span>
					<span>{transaction.type}</span>
				</li>
			))}
		</ul>
	);
};

export default TransactionList;
