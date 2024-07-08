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
	const [amount, setAmount] = useState(0);
	const [category, setCategory] = useState('');
	const [date, setDate] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		addTransaction({ type, amount: amount, category, date });
		setType('income');
		setAmount(0);
		setCategory('');
		setDate('');
	};

	return (
		<div className='add-transaction'>
			<h3>Add New Transaction</h3>
			<form onSubmit={handleSubmit}>
				<div className='form-row'>
					<div className='form-group'>
						<label htmlFor='type'>Type</label>
						<select
							id='type'
							value={type}
							onChange={(e) => setType(e.target.value as 'income' | 'expense')}
							required>
							<option value='income'>Income</option>
							<option value='expense'>Expense</option>
						</select>
					</div>
					<div className='form-group'>
						<label htmlFor='category'>Category</label>
						<input
							type='text'
							id='category'
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className='form-row'>
					<div className='form-group'>
						<label htmlFor='amount'>Amount</label>
						<input
							type='number'
							id='amount'
							value={amount}
							onChange={(e) => setAmount(Number(e.target.value))}
							required
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='date'>Date</label>
						<input
							type='date'
							id='date'
							value={date}
							onChange={(e) => setDate(e.target.value)}
							required
						/>
					</div>
				</div>
				<button type='submit'>Add Transaction</button>
			</form>
		</div>
	);
};

export default AddTransaction;
