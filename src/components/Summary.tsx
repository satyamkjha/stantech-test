import React from 'react';
import styled from 'styled-components';

const SummaryContainer = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 20px 0;
`;

interface SummaryProps {
	income: number;
	expenses: number;
}

const Summary: React.FC<SummaryProps> = ({ income, expenses }) => {
	const balance = income - expenses;

	return (
		<div className='summary'>
			<h3>Summary</h3>
			<div className='summary-item'>
				<span>Income:</span> <span>Rs {income.toFixed(2)}</span>
			</div>
			<div className='summary-item'>
				<span>Expenses:</span> <span>Rs {expenses.toFixed(2)}</span>
			</div>
			<div className='summary-item'>
				<span>Balance:</span> <span>Rs {balance.toFixed(2)}</span>
			</div>
		</div>
	);
};

export default Summary;
