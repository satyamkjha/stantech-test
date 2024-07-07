import React, { useContext } from 'react';
import styled from 'styled-components';
import { TransactionContext } from '../context/TransactionContext';

const List = styled.ul`
	list-style: none;
	padding: 0;
`;

const TransactionItem = styled.li`
	display: flex;
	justify-content: space-between;
	padding: 10px;
	border: 1px solid #ccc;
	margin-bottom: 10px;
`;

const TransactionList: React.FC = () => {
	const context = useContext(TransactionContext);

	if (!context) {
		throw new Error(
			'TransactionContext must be used within a TransactionProvider'
		);
	}

	const { transactions } = context;

	return (
		<List>
			{transactions.map((transaction) => (
				<TransactionItem key={transaction.id}>
					<span>{transaction.date}</span>
					<span>{transaction.category}</span>
					<span>{transaction.amount}</span>
					<span>{transaction.type}</span>
				</TransactionItem>
			))}
		</List>
	);
};

export default TransactionList;
