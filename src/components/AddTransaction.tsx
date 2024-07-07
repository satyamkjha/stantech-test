import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { TransactionContext } from '../context/TransactionContext';

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const AddTransaction: React.FC = () => {
	const context = useContext(TransactionContext);

	if (!context) {
		throw new Error(
			'TransactionContext must be used within a TransactionProvider'
		);
	}

	const { addTransaction } = context;
	const [type, setType] = useState<'income' | 'expense'>('income');
	const [amount, setAmount] = useState('');
	const [category, setCategory] = useState('');
	const [date, setDate] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		addTransaction({ type, amount: parseFloat(amount), category, date });
		setType('income');
		setAmount('');
		setCategory('');
		setDate('');
	};

	return (
		<Form onSubmit={handleSubmit}>
			<select
				value={type}
				onChange={(e) => setType(e.target.value as 'income' | 'expense')}>
				<option value='income'>Income</option>
				<option value='expense'>Expense</option>
			</select>
			<input
				type='number'
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
				placeholder='Amount'
				required
			/>
			<input
				type='text'
				value={category}
				onChange={(e) => setCategory(e.target.value)}
				placeholder='Category'
				required
			/>
			<input
				type='date'
				value={date}
				onChange={(e) => setDate(e.target.value)}
				required
			/>
			<button type='submit'>Add Transaction</button>
		</Form>
	);
};

export default AddTransaction;
