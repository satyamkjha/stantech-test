import React, { useContext } from 'react';
import styled from 'styled-components';

import Summary from './components/Summary';
import AddTransaction from './components/AddTransaction';
import CategoryBreakdown from './components/CategoryBreakdown';
import TransactionList from './components/TransactionList';
import { TransactionContext } from './context/TransactionContext';

const AppContainer = styled.div`
	padding: 20px;
	max-width: 800px;
	margin: 0 auto;
`;

const App: React.FC = () => {
	const context = useContext(TransactionContext);

	if (!context) {
		throw new Error(
			'TransactionContext must be used within a TransactionProvider'
		);
	}

	const { transactions, loading, error } = context;

	// Calculate income, expenses, and category data with proper types
	const income = transactions
		.filter((t) => t.type === 'income')
		.reduce((acc, t) => acc + t.amount, 0);
	const expenses = transactions
		.filter((t) => t.type === 'expense')
		.reduce((acc, t) => acc + t.amount, 0);

	const categoryData = transactions
		.filter((t) => t.type === 'expense')
		.reduce((acc, t) => {
			acc[t.category] = (acc[t.category] || 0) + t.amount;
			return acc;
		}, {} as Record<string, number>);

	return (
		<AppContainer>
			<h1>Personal Finance Tracker</h1>
			<AddTransaction />
			{loading ? <p>Loading...</p> : <TransactionList />}
			{error && <p>{error.message}</p>}
			<Summary income={income} expenses={expenses} />
			<CategoryBreakdown data={categoryData} />
		</AppContainer>
	);
};

export default App;
